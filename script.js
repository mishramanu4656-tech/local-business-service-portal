// ---------- Getting elements from the page ----------
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

// Key name used to save requests in the browser (localStorage)
const STORAGE_KEY = "serviceHubRequests";


// ---------- Helper functions ----------

// Get all saved requests. Returns an object like { SH1001: {...}, SH1002: {...} }
function getRequests() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.log("Could not read saved requests:", error);
    }

    // First time (or storage not available): start with one sample request
    // so the "Check Status" feature can be tried with SH1001
    return {
        SH1001: {
            name: "Sample Customer",
            service: "Website Development",
            status: "In Progress"
        }
    };
}

// Save all requests back to localStorage
function saveRequests(requests) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
        return true;
    } catch (error) {
        console.log("Could not save requests:", error);
        return false;
    }
}

// Make the next request ID: SH1001, SH1002, SH1003 ...
function makeRequestId(requests) {
    let number = 1001;
    while (requests["SH" + number]) {
        number++;
    }
    return "SH" + number;
}

// Show an error under one field and mark it red
function showError(fieldId, text) {
    document.getElementById(fieldId + "Error").textContent = text;
    document.getElementById(fieldId).setAttribute("aria-invalid", "true");
}

// Remove the error from one field
function clearError(fieldId) {
    document.getElementById(fieldId + "Error").textContent = "";
    document.getElementById(fieldId).removeAttribute("aria-invalid");
}

// Show a message (green for success, red for error)
function showMessage(element, text, isSuccess) {
    element.textContent = text;
    element.className = isSuccess ? "success-text" : "error-text";
}


// ---------- Enquiry form ----------

// Check every field. Returns true only if everything is correct.
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    let firstWrongField = null;
    let isValid = true;

    // Clear old errors first
    ["name", "email", "service", "message"].forEach(clearError);

    if (name.length < 2) {
        showError("name", "Please enter your full name (at least 2 letters).");
        firstWrongField = firstWrongField || "name";
        isValid = false;
    }

    // Simple email pattern: something@something.something
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email, like name@example.com.");
        firstWrongField = firstWrongField || "email";
        isValid = false;
    }

    if (service === "") {
        showError("service", "Please choose a service.");
        firstWrongField = firstWrongField || "service";
        isValid = false;
    }

    if (message.length < 10) {
        showError("message", "Please describe your requirement (at least 10 characters).");
        firstWrongField = firstWrongField || "message";
        isValid = false;
    }

    // Move the cursor to the first wrong field
    if (firstWrongField) {
        document.getElementById(firstWrongField).focus();
    }

    return isValid;
}

enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
        showMessage(formMessage, "Please fix the errors above and try again.", false);
        return;
    }

    // Get the readable name of the chosen service (e.g. "Website Development")
    const serviceSelect = document.getElementById("service");
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text.trim();

    // Create the request and save it
    const requests = getRequests();
    const requestId = makeRequestId(requests);

    requests[requestId] = {
        name: document.getElementById("name").value.trim(),
        service: serviceName,
        status: "Received"
    };

    const saved = saveRequests(requests);

    if (!saved) {
        showMessage(
            formMessage,
            "Sorry, we could not save your enquiry in this browser. Please try again.",
            false
        );
        return;
    }

    showMessage(
        formMessage,
        "Thank you! Your enquiry was submitted. Your request ID is " +
        requestId + ". Use it in the Status section to track your request.",
        true
    );

    enquiryForm.reset();
});

// Remove a field's error as soon as the user starts fixing it
["name", "email", "service", "message"].forEach(function (fieldId) {
    document.getElementById(fieldId).addEventListener("input", function () {
        clearError(fieldId);
    });
});


// ---------- Status tracker ----------

function checkStatus() {
    const statusMessage = document.getElementById("statusMessage");

    // toUpperCase so "sh1001" also works
    const requestId = document.getElementById("requestId").value.trim().toUpperCase();

    if (requestId === "") {
        showMessage(statusMessage, "Please enter your request ID.", false);
        return;
    }

    const requests = getRequests();
    const request = requests[requestId];

    if (request) {
        showMessage(
            statusMessage,
            "Request " + requestId + " (" + request.service + ") - Status: " + request.status,
            true
        );
    } else {
        showMessage(
            statusMessage,
            "No request found. Please check your request ID.",
            false
        );
    }
}

// Pressing Enter in the Request ID box also checks the status
document.getElementById("requestId").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkStatus();
    }
});