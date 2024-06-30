console.log("Popup script loaded");
document.addEventListener('DOMContentLoaded', () => {
    console.log("Popup DOM loaded");
    const validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
        console.log("Validate button found");
        validateBtn.addEventListener('click', validateCurrentPage);
    }
    else {
        console.error("Validate button not found");
    }
});
function validateCurrentPage() {
    console.log("Validate button clicked");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
            console.log("Sending getHTML message to content script");
            chrome.tabs.sendMessage(tabs[0].id, { action: "getHTML" }, (response) => {
                if (chrome.runtime.lastError) {
                    const errorMsg = "Error getting HTML: " + chrome.runtime.lastError.message;
                    console.error(errorMsg);
                    chrome.runtime.sendMessage({ action: "logError", error: errorMsg });
                    displayResults([{
                            message: errorMsg + ". Please refresh the page and try again.",
                            element: ""
                        }]);
                    return;
                }
                console.log("Received response from content script:", response);
                if (response && response.html) {
                    if (typeof window.Halidator !== 'undefined' && typeof window.Halidator.validateBody === 'function') {
                        console.log("Validating HTML with Halidator");
                        window.Halidator.validateBody().then(issues => {
                            console.log("Validation issues:", issues);
                            displayResults(issues);
                        }).catch(error => {
                            console.error("Validation error:", error);
                            displayResults([{ message: "Validation error: " + error.message, element: "" }]);
                        });
                    }
                    else {
                        const errorMsg = "Halidator is not loaded properly";
                        console.error(errorMsg);
                        chrome.runtime.sendMessage({ action: "logError", error: errorMsg });
                        displayResults([{ message: errorMsg, element: "" }]);
                    }
                }
                else {
                    const errorMsg = "Invalid response from content script";
                    console.error(errorMsg, response);
                    chrome.runtime.sendMessage({ action: "logError", error: errorMsg });
                    displayResults([{ message: errorMsg, element: "" }]);
                }
            });
        }
    });
}
function displayResults(issues) {
    console.log("Displaying results");
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        if (issues.length === 0) {
            resultDiv.textContent = 'No issues found.';
        }
        else {
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
    else {
        console.error("Result div not found");
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
export {};
