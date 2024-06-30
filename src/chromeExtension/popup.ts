document.getElementById('validateBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getHTML"}, (response) => {
      const issues = window.Halidator.validateHTML(response.html);
      displayResults(issues);
    });
  });
});

function displayResults(issues) {
  const resultDiv = document.getElementById('result');
  if (issues.length === 0) {
    resultDiv.textContent = 'No issues found.';
  } else {
    resultDiv.innerHTML = `<h3>Found ${issues.length} issue(s):</h3>`;
    issues.forEach((issue, index) => {
      resultDiv.innerHTML += `
        <div>
          <strong>Issue ${index + 1}:</strong>
          <p>${issue.message}</p>
          <pre>${escapeHTML(issue.element)}</pre>
        </div>
      `;
    });
  }
}

function escapeHTML(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
