let version = '0.1.0'
let enabled = true

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ version, enabled })
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    // TODO: add some event
  }
})