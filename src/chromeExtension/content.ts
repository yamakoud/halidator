console.log("Content script loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request);
  
  if (request.action === "ping") {
    console.log("Responding to ping");
    sendResponse({status: "ready"});
  } else if (request.action === "getHTML") {
    console.log("Getting HTML");
    sendResponse({ html: document.documentElement.outerHTML });
  }
  
  return true; // 非同期レスポンスのために必要
});