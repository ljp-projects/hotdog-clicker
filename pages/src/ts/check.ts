onmessage = e => {
    const clickCount = e.data[0]

    if (clickCount >= bunCost) {
		bunImage.src = bunBuyable
	} else {
		bunImage.src = bunUnBuyable
	}

	if (clickCount >= dadCost) {
		dadImage.src = dadBuyable
	} else {
		dadImage.src = dadUnBuyable
	}

	if (clickCount >= grillCost) {
		grillImage.src = grillBuyable
	} else {
		grillImage.src = grillUnBuyable
	}

	if (clickCount >= farmCost) {
		farmImage.src = farmBuyable
	} else {
		farmImage.src = farmUnBuyable
	}

	if (clickCount >= facCost) {
		facImage.src = facBuyable
	} else {
		facImage.src = facUnBuyable
	}

	if (clickCount >= bankCost) {
		bankImage.src = bankBuyable
	} else {
		bankImage.src = bankUnBuyable
	}

	if (clickCount >= freezerCost) {
		freezerImage.src = freezerBuyable
	} else {
		freezerImage.src = freezerUnBuyable
	}
}