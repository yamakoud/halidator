chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  if (request.action === "getHTML") {
    sendResponse({ html: document.documentElement.outerHTML });
  }
});