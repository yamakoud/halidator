export {};

document.addEventListener('DOMContentLoaded', () => {
  const validateBtn = document.getElementById('validateBtn');
  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "getHTML"}, (response: {html: string}) => {
            // @ts-ignore
            const issues = window.Halidator.validateHTML(response.html);
            displayResults(issues);
          });
        }
      });
    });
  }
});

function displayResults(issues: any[]) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
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
}

function escapeHTML(html: string): string {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

declare global {
  interface Window {
    Halidator: {
      validateHTML: (html: string) => any[];
    }
  }
}