document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('admissionForm').addEventListener('submit', handleAdmissionFormSubmit);
});

function handleAdmissionFormSubmit(event) {
    event.preventDefault();

    let application = {
        applicantName: document.getElementById('applicantName').value,
        applicantEmail: document.getElementById('applicantEmail').value,
        chosenCourse: document.getElementById('chosenCourse').value,
        reason: document.getElementById('reason').value,
        applicationDate: new Date().toLocaleDateString()
    };

    saveApplication(application);

    alert('Your application has been submitted! We will get back to you soon.');

    // Reset the form
    event.target.reset();
}

function saveApplication(application) {
    let applications = getApplicationsFromLocalStorage();
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
}

function getApplicationsFromLocalStorage() {
    let applications = localStorage.getItem('applications');
    if (applications === null) {
        applications = [];
    } else {
        applications = JSON.parse(applications);
    }
    return applications;
}
