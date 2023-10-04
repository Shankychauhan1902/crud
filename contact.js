document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);
});

function handleContactFormSubmit(event) {
    event.preventDefault();

    let inquiry = {
        senderName: document.getElementById('senderName').value,
        senderEmail: document.getElementById('senderEmail').value,
        message: document.getElementById('message').value,
        submissionDate: new Date().toLocaleDateString()
    };

    saveInquiry(inquiry);

    alert('Your message has been received. We will get back to you shortly!');

    // Reset the form
    event.target.reset();
}

function saveInquiry(inquiry) {
    let inquiries = getInquiriesFromLocalStorage();
    inquiries.push(inquiry);
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
}

function getInquiriesFromLocalStorage() {
    let inquiries = localStorage.getItem('inquiries');
    if (inquiries === null) {
        inquiries = [];
    } else {
        inquiries = JSON.parse(inquiries);
    }
    return inquiries;
}
