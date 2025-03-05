cd ../curve-data
cat bank-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/bank-text.xml -
cat bun-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/bun-text.xml -
cat dad-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/dad-text.xml -
cat fac-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/fac-text.xml -
cat farm-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/farm-text.xml -
cat freezer-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/freezer-text.xml -
cat grill-buying.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/grill-text.xml -
cat locked-button.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/locked-button-text.xml -
cat t-sauce-can-buy.json | jq -r '.abstractTexts.[0].attributedText' | base64 -d | plutil -convert xml1 -o ../extra-curve-data/t-sauce-text.xml -
