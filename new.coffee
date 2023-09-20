grill = new Audio 'designed-fire-winds-swoosh-04-116788.mp3' 
bun = new Audio 'crunch-crispy-breadbun-41340.mp3' 
dad = new Audio 'dad-says-yummy-113126.mp3' 
farm = new Audio 'zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3' 
factory = new Audio 'some-kind-of-machine-103152.mp3' 
bank = new Audio 'cash-register-purchase-87313.mp3' 
ambience = new Audio 'https://kotlinc.github.io/hotdog-clicker/Hotdog-Clicker-Ambience.m4a' 
ambience.loop = true

bunBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Bun-Button.svg'
bunUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Bun-Button.svg'
bunBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Bun-Button.svg'

dadBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Dad-Button.svg'
dadUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Dad-Button.svg'
dadBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Dad-Button.svg'

grillBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Grill-Button.svg'
grillUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Grill-Button.svg'
grillBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Grill-Button.svg'

farmBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Farm-Button.svg'
farmUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Farm-Button.svg'
farmBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Farm-Button.svg'

facBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Fac-Button.svg'
facUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Fac-Button.svg'
facBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Fac-Button.svg'

bankBuyable = 'https://kotlinc.github.io/hotdog-clicker/Can-Buy-Bank-Button.svg'
bankUnBuyable = 'https://kotlinc.github.io/hotdog-clicker/Cant-Buy-Bank-Button.svg'
bankBuying = 'https://kotlinc.github.io/hotdog-clicker/Buying-Bank-Button.svg'
 
passiveClicks = 0
clickCount = 0
bunCount = 0
dadCount = 0
grillCount = 0
dogFarmCount = 0
facCount = 0
bankCount = 0

bunCost = 10
bunRate = 0.2

dadCost = 100
dadRate = 2

grillCost = 500
grillRate = 10

dogFarmCost = 5000
dogFarmRate = 50

facCost = 50000
facRate = 500

bankCost = 250000
bankRate = 2500

increment = 1.3

passiveClicksElement = document.getElementById'passive'
clickCountElement = document.getElementById'clickCount'

grillCountElement = document.getElementById'grillCount'
bunCountElement = document.getElementById'bunCount'
dadCountElement = document.getElementById'dadCount'
dogFarmCountElement = document.getElementById'dogFarmCount'
facCountElement = document.getElementById'dogFacCount'
bankCountElement = document.getElementById'dogBankCount'

hotdogButton = document.getElementById'hotdogButton'
bunButton = document.getElementById'bunButton'
dadButton = document.getElementById'dadButton'
grillButton = document.getElementById'grillButton'
dogFarmButton = document.getElementById'dogFarmButton'
facButton = document.getElementById'dogFacButton'
bankButton = document.getElementById'dogBankButton'
 
bunPriceElement = document.getElementById 'bunPrice'
dadPriceElement = document.getElementById 'dadPrice'
grillPriceElement = document.getElementById 'grillPrice'
farmPriceElement = document.getElementById 'farmPrice'
facPriceElement = document.getElementById 'facPrice'
bankPriceElement = document.getElementById 'bankPrice'

bunImage = document.getElementById 'bunImg' 
dadImage = document.getElementById 'dadImg' 
grillImage = document.getElementById 'grillImg' 
farmImage = document.getElementById 'farmImg' 
facImage = document.getElementById 'facImg' 
bankImage = document.getElementById 'bankImg'
 
checkBuyables = () -> 
    if clickCount >= bunCost 
        bunImage?.textContent = bunBuyable
     else
        bunImage?.textContent = bunUnBuyable
        dadImage?.textContent = dadUnBuyable
        grillImage?.textContent = grillUnBuyable
        farmImage?.textContent = farmUnBuyable
        facImage?.textContent = facUnBuyable
        bankImage?.textContent = bankUnBuyable
        return
    if clickCount >= dadCost 
        dadImage?.textContent = dadBuyable
     else
        dadImage?.textContent = dadUnBuyable
        grillImage?.textContent = grillUnBuyable
        farmImage?.textContent = farmUnBuyable
        facImage?.textContent = facUnBuyable
        bankImage?.textContent = bankUnBuyable
        return
    
    if clickCount >= grillCost 
        grillImage?.textContent = grillBuyable
     else 
        grillImage?.textContent = grillUnBuyable
        farmImage?.textContent = farmUnBuyable
        facImage?.textContent = facUnBuyable
        bankImage?.textContent = bankUnBuyable
        return
        
    if clickCount >= dogFarmCost 
        farmImage?.textContent = farmBuyable
     else 
        farmImage?.textContent = farmUnBuyable
        facImage?.textContent = facUnBuyable
        bankImage?.textContent = bankUnBuyable
        return
        
    if clickCount >= facCost 
        facImage?.textContent = facBuyable
    else
        facImage?.textContent = facUnBuyable
        bankImage?.textContent = bankUnBuyable
        return
    if clickCount >= bankCost 
        bankImage?.textContent = bankBuyable
    else
        bankImage?.textContent = bankUnBuyable
        return
        
hotdogButton?.addEventListener 'click', () ->
    clickCount++
    clickCountElement?.textContent = clickCount.toFixed 1
    checkBuyables()
    


bunButton?.addEventListener 'click', () ->  
    if  clickCount >= bunCost 
        clickCount -= bunCost
        bunCost *= increment
        checkBuyables() 
        bunImage?.textContent = bunBuying
        bunPriceElement?.textContent = bunCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        bunCount++
        bunCountElement?.textContent = bunCount
        passiveClicks += bunRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        bun?.play()
    

dadButton?.addEventListener 'click', () ->
    if clickCount >= dadCost
        clickCount -= dadCost
        dadCost *= increment
        checkBuyables() 
        dadImage?.textContent = dadBuying
        dadPriceElement?.textContent = dadCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        dadCount++
        dadCountElement?.textContent = dadCount
        passiveClicks += dadRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        dad?.play()
    

grillButton?.addEventListener 'click', () ->  
    if  clickCount >= grillCost
        clickCount -= grillCost
        grillCost *= increment
        checkBuyables() 
        grillImage?.textContent = grillBuying
        grillPriceElement?.textContent = grillCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        grillCount++
        grillCountElement?.textContent = grillCount
        passiveClicks += grillRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        grill?.play() 
    

dogFarmButton?.addEventListener 'click', () ->  
    if  clickCount >= dogFarmCost
        clickCount -= dogFarmCost
        dogFarmCost *= increment
        checkBuyables() 
        farmImage?.textContent = farmBuying
        farmPriceElement?.textContent = dogFarmCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        dogFarmCount++
        dogFarmCountElement?.textContent = dogFarmCount
        passiveClicks += dogFarmRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        farm?.play() 
    

facButton?.addEventListener 'click', () ->  
    if  clickCount >= facCost
        clickCount -= facCost
        facCost *= increment
        checkBuyables() 
        facImage?.textContent = facBuying
        facPriceElement?.textContent = facCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        facCount++
        facCountElement?.textContent = facCount.toFixed 1
        passiveClicks += facRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        factory?.play() 
    

bankButton?.addEventListener 'click', () ->  
    if  clickCount >= bankCost
        clickCount -= bankCost
        bankCost *= increment
        checkBuyables() 
        bankImage?.textContent = bankBuying
        bankPriceElement?.textContent = bankCost.toFixed 1
        clickCountElement?.textContent = clickCount.toFixed 1
        bankCount++
        bankCountElement?.textContent = bankCount.toFixed 1
        passiveClicks += bankRate
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
        bank?.play() 
    


# Upgrades

mustardCost = 5000
tSauceCost = 1000
crispCost = 5000

tSauceButton = document.getElementById 'tSauceButton'
mustardButton = document.getElementById 'mustardButton'
crispButton = document.getElementById 'crispButton'

tSauceButton?.addEventListener 'click', () ->  
    if  clickCount >= tSauceCost
        clickCount -= tSauceCost
        checkBuyables() 
        clickCountElement?.textContent = clickCount.toFixed 1
        tSauceButton?.style.display = 'none'
        passiveClicks += 25
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
    


mustardButton?.addEventListener 'click', () ->  
    if  clickCount >= mustardCost
        clickCount -= mustardCost
        checkBuyables() 
        clickCountElement?.textContent = clickCount.toFixed 1
        mustardButton?.style.display = 'none'
        passiveClicks += 50
        passiveClicksElement?.textContent = passiveClicks.toFixed 1
    


crispButton?.addEventListener 'click', () ->  
    if  clickCount >= crispCost
        clickCount -= crispCost
        checkBuyables() 
        clickCountElement?.textContent = clickCount.toFixed 1
        crispButton?.style.display = 'none'
        bunRate *= 2
    


setInterval () ->
    clickCount += passiveClicks
    clickCountElement?.textContent = clickCount.toFixed 1
    checkBuyables() 
    
, 1000