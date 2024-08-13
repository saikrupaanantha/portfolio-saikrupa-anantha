<script type="text/javascript">
    // Initialize EmailJS with your User ID
    (function() {
        emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    })();

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contact-form');
        const responseMessage = document.getElementById('form-response');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Collect the form data
            const formData = {
                to_name: form.to_name.value,  // Ensure this field name matches {{to_name}} in your template
                email: form.email.value,
                message: form.message.value
            };

            // Send the email using EmailJS
            emailjs.send('service_68331fm', 'template_im1c2zi', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    responseMessage.textContent = 'Thank you for your message!';
                    responseMessage.classList.remove('hidden');
                    form.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    responseMessage.textContent = 'Sorry, there was an error sending your message.';
                    responseMessage.classList.remove('hidden');
                });
        });
    });
</script>
