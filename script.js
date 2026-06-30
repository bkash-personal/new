document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID'; // EmailJS থেকে নিন
    const templateID = 'YOUR_TEMPLATE_ID'; // EmailJS থেকে নিন

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('সফলভাবে সাবমিট হয়েছে!');
        }, (err) => {
            alert('কিছু ভুল হয়েছে: ' + JSON.stringify(err));
        });
});
