"use strict";
console.log("Background script loaded");
chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked");
    if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { action: "ping" }, response => {
            if (chrome.runtime.lastError) {
                console.error("Content script not found:", chrome.runtime.lastError);
                chrome.action.setPopup({ tabId: tab.id, popup: "error.html" });
            }
            else {
                console.log("Content script is ready, response:", response);
                chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
            }
        });
    }
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background received message:", request);
    if (request.action === "logError") {
        console.error("Error from popup:", request.error);
    }
    sendResponse({ received: true });
});
