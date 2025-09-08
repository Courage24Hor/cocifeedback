const contactForm = document.querySelector('form[name="youthContact"]');

contactForm.addEventListener('submit', function(event) {
    
    // STOP the form from refreshing the page
    event.preventDefault();
    
    // Let Netlify handle the form submission data
    const formData = new FormData(contactForm);
    
    // Use Netlify's built-in form handling
    fetch('/', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // REDIRECT to a new page (change this URL to whatever you want)
            window.location.href = "/thank-you.html"; 
        } else {
            alert('There was a problem submitting the form. Please try again.');
        }
    })
    .catch(error => {
        alert('There was a network error. Please try again.');
    });
});
