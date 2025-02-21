import crypto from "crypto";
import { encode, decode } from "@msgpack/msgpack";

// read & write controls read access to saves
// authorise & revoke controls access to tokens
const permissionsTable: {[level: number]: string[]} = {
  0: ["read", "write", "authorise", "revoke"],
  1: ["read", "write", "revoke"],
  2: ["read", "write", "authorise"],
  3: ["read", "write"],
  4: ["read"]
}

const reversePermissionsTable: Record<string, number> = {
  "rwad": 0,
  "rwd": 1,
  "rwa": 2,
  "rw": 3,
  "r": 4,
}

export default {
  async fetch(req, env) {
    // @ts-ignore
    const root_token_hash: string = env.ROOT_TOKEN_HASH!!;

    // @ts-ignore
    const all_uid_hash: string = env.ALL_UID_HASH!!;

    // @ts-ignore
    const all_user_agent_hash: string = env.ALL_USER_AGENT_HASH!!;

    // @ts-ignore
    const all_user_agent_checksum: string = env.ALL_USER_AGENT_CHECKSUM!!;

    let insert =  env.DB.prepare(`DELETE FROM data`);

    await insert.all()

    const url = new URL(req.url);
    const token = req.headers.get("X-Auth-Token")

    if (token == null) {
      return new Response(JSON.stringify({
        error: true,
        abbreviation: "TKNREQ",
        message: "A token is required in the X-Auth-Token header",
        fix: "Specify a token in the X-Auth-Token header",
      }), {
        status: 403,
      });
    }

    const hasher = crypto.createHash("sha512");
    hasher.update(Buffer.from(token));

    const hashedToken = hasher.digest("hex");

    const tokenLookupStmt =
        env.DB.prepare(`SELECT * FROM tokens where hash = ?`)
            .bind(hashedToken)

    const tokenLookupResult = await tokenLookupStmt.all();

    console.log(tokenLookupResult);

    if (!tokenLookupResult.success || tokenLookupResult.error || tokenLookupResult.results.length === 0) {
      return new Response(JSON.stringify({
        error: true,
        abbreviation: "INVTKN",
        message: "Your token is invalid.",
        fix: "Create a new token with the /authenticate API endpoint.",
      }), {
        status: 403,
      });
    }

    const tokenExpiration = new Date(tokenLookupResult.results[0]["expiration"] as string);
    const tokenPermissions = permissionsTable[Number(tokenLookupResult.results[0]["permissions"])];
    const tokenAgentChecksum = tokenLookupResult.results[0]["user_agent_hash"] as string;

    const userAgentHasher = crypto.createHash("sha512");
    userAgentHasher.update(req.headers.get("user-agent")!!);

    const userAgentChecksum = userAgentHasher.digest("hex");

    if (tokenAgentChecksum !== userAgentChecksum && tokenAgentChecksum !== all_user_agent_checksum) {
      return new Response(JSON.stringify({
        error: true,
        abbreviation: "INVUSRAGNT",
        message: "Your user agent does not match the agent used to create this token.",
        fix: "Create a new token with the /authenticate API endpoint.",
      }), {
        status: 403,
      });
    }

    if (Date.now() < tokenExpiration.getMilliseconds()) {
      return new Response(JSON.stringify({
        error: true,
        abbreviation: "EXPTKN",
        message: "Your token is expired.",
        fix: "Create a new token with the /authenticate API endpoint.",
      }), {
        status: 403,
      });
    }

    switch (url.pathname) {
      case "/authorise":
        const body = await req.json() as Record<string, any>;

        const byteHasher = crypto.createHash("sha512");
        byteHasher.update(crypto.randomBytes(8192))

        const unauthorisedToken = byteHasher.digest("hex");
        const uid = body["uid"] as string;
        const permissions = reversePermissionsTable[body["perms"] as string];

        if (!tokenPermissions.includes("authorise")) {
          return new Response(JSON.stringify({
            error: true,
            abbreviation: "PERM",
            message: "Your token needs the 'authenticate' permission.",
            fix: "Use a token with the required permissions.",
          }), {
            status: 403,
          })
        }

        const date = new Date(Date.now());

        const userAgentHasher = crypto.createHash("sha256");
        userAgentHasher.update(req.headers.get("user-agent")!!);

        const userAgentChecksum = userAgentHasher.digest("hex");

        // these tokens expire after 6 months from creation
        const expiry = date.setUTCMonth(date.getUTCMonth() + 6);

        const tokenHasher = crypto.createHash("sha512");
        tokenHasher.update(Buffer.from(unauthorisedToken));

        const uidHasher = crypto.createHash("sha256");
        uidHasher.update(Buffer.from(uid));

        const tokenHash = tokenHasher.digest("hex");
        const uidHash = uidHasher.digest("hex");

        const stmt =
            env.DB.prepare(`INSERT INTO tokens VALUES (?, ?, ?, ?, ?)`)
                .bind(tokenHash, uidHash, permissions, expiry, userAgentChecksum);

        await stmt.all();

        return new Response(JSON.stringify({
          createdToken: unauthorisedToken,
        }));

      default:
        return new Response(JSON.stringify({
          error: true,
          abbreviation: "INVENDP",
          message: "Invalid API endpoint.",
          fix: "N/A",
        }), {
          status: 400,
        });
    }
  },
} satisfies ExportedHandler<Env>;

type HDCItemInfo = {
  cost: number,
  owned: number,
  rate: number
}

async function readSave(uid: string, env: Env): Promise<Record<string, HDCItemInfo>> {
  const stmt = env.DB.prepare("SELECT * FROM data where uid = ?").bind(uid);
  const { results }: D1Result<Record<string, HDCItemInfo>> = await stmt.all();

  return results[0]
}

async function writeSave(uid: string, req: Request<unknown, IncomingRequestCfProperties>, env: Env){
  const body = await req.json() as Record<string, HDCItemInfo>;

  const hotdogBunData = encode(body[""]!!)
}