chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "validate") {
    fetch('https://your-api-url.com/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html: request.html })
    })
    .then(response => response.json())
    .then(data => sendResponse({ result: data }))
    .catch(error => sendResponse({ error: error.message }));
    return true;  // 非同期レスポンスを示す
  }
});
