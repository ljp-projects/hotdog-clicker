onmessage = e => {
    const clickCount = e.data[0]
	const buyables = [];

    if (clickCount >= bunCost) {
		buyables.push(bunBuyable)
	} else {
		buyables.push(bunUnBuyable)
	}

	if (clickCount >= dadCost) {
		buyables.push(dadBuyable)
	} else {
		buyables.push(dadUnBuyable)
	}

	if (clickCount >= grillCost) {
		buyables.push(grillBuyable)
	} else {
		buyables.push(grillUnBuyable)
	}

	if (clickCount >= farmCost) {
		buyables.push(farmBuyable)
	} else {
		buyables.push(farmUnBuyable)
	}

	if (clickCount >= facCost) {
		buyables.push(facBuyable)
	} else {
		buyables.push(facUnBuyable)
	}

	if (clickCount >= bankCost) {
		buyables.push(bankBuyable)
	} else {
		buyables.push(bankUnBuyable)
	}

	if (clickCount >= freezerCost) {
		buyables.push(freezerBuyable)
	} else {
		buyables.push(freezerUnBuyable)
	}

	postMessage(buyables)
}