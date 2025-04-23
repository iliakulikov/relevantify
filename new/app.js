// Parse the URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Replace content dynamically using query string
var switchContent = document.getElementsByClassName("switch-content");
for (var i = 0; i < switchContent.length; i++) {
    dynamicKey = switchContent[i].getAttribute('data-switch-key');
    if (dynamicKey) dynamicContent = getParameterByName(dynamicKey);
    if (dynamicContent) switchContent[i].textContent = dynamicContent;
}

// get GCLID
window.onload = function getGclid() {
    var value = getParameterByName("gclid");
    var e = document.getElementById("gclid");
    if (e) e.value = value; // Add null check
}

// Improved form submission with spinner handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['submit-to-google-sheet'];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx_141aM2ScfatbVVNIKuMaOFJqYnDo011RJGpwKUIs0l6BhMWX7W-MrhPDPx0a0gZr/exec';
    
    if (form) {
        const spinner = document.getElementById('spinner');
        const submitButton = form.querySelector('button[type="submit"]');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Check if the form is valid
            if (this.checkValidity()) {
                // Disable the button and show spinner
                if (submitButton) submitButton.disabled = true;
                if (spinner) spinner.style.display = 'block';
                
                // Send data to the spreadsheet
                fetch(scriptURL, { 
                    method: 'POST', 
                    body: new FormData(form) 
                })
                .then(response => {
                    if (response.ok) {
                        // On success, redirect to thank you page
                        window.location.href = 'thankyou.html';
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    // Re-enable the button and hide spinner on error
                    if (spinner) spinner.style.display = 'none';
                    if (submitButton) submitButton.disabled = false;
                    console.error('Error!', error.message);
                    alert('There was a problem submitting your form. Please try again.');
                });
            }
        });
    }
});