let toggle = document.getElementById("toggle");

chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled == true) {
        toggle.innerText = "disable"
    } else {
        toggle.innerText = "enable"
    }
})

toggle.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    const current = toggle.innerText
    if (current == "disable") {
        toggle.innerText = "enable"
    } else {
        toggle.innerText = "disable"
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setEnabled,
    });
});

function setEnabled() {
    chrome.storage.sync.get("enabled", ({ enabled }) => {
        chrome.storage.sync.set({ enabled: !enabled })
        location.reload()
    })
}