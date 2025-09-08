const contactForm = document.querySelector('form[name="youthContact"]');

contactForm.addEventListener('submit', function(event) {
    
    // stop the form from refreshing the page
    event.preventDefault();
    
    const questValue = document.getElementById('quest').value;
    const whyValue = document.getElementById('why').value;
    const messageValue = document.getElementById('message').value;

    const confirmationDiv = document.getElementById('form-confirmation');
        confirmationDiv.classList.remove('hidden');

        contactForm.reset();

        // hide the message after 5 seconds
        setTimeout(() => {
            confirmationDiv.classList.add('hidden');
        }, 5000);
    }
);

