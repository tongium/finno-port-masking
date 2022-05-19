const hideValue = function () {
    const display = "XX,XXX,XXX.XX"
    const values = document.getElementsByClassName("value")
    for (let i = 0; i < values.length; i++) {
        if (values[i].childNodes.length > 1) {
            values[i].childNodes[0].textContent = display
        } else {
            values[i].childNodes[0].textContent = display + ' ฿'
        }
    }

    let cards = document.getElementsByClassName("card-port__info--summary")
    for (let i = 0; i < cards.length; i++) {
        cards[i].childNodes[0].textContent = display + ' ฿'
    }

    let unrealizeds = document.getElementsByClassName("card-port__info--unrealized")
    for (let i = 0; i < unrealizeds.length; i++) {
        unrealizeds[i].childNodes[0].textContent = display
    }
}

const noLoss = function () {
    const vs = document.getElementsByClassName("value value--loss")
    for (let i = 0; i < vs.length; i++) {
        vs[i].className = "value value--profit"
    }

    const unrealizeds = document.getElementsByClassName("card-port__info--unrealized")
    for (let i = 0; i < unrealizeds.length; i++) {
        unrealizeds[i].className = "card-port__info--unrealized color__market-value--profit"
    }
}


chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled == true) {
        setInterval(hideValue, 250, 9)
        setInterval(noLoss, 250, 9)
    }
})