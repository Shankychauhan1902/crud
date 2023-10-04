document.addEventListener("DOMContentLoaded", function() {
    displayFaculty();
});

document.getElementById('facultyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let faculty = {
        name: document.getElementById('facultyName').value,
        department: document.getElementById('facultyDepartment').value,
        qualification: document.getElementById('facultyQualification').value,
        experience: document.getElementById('facultyExperience').value
    };

    saveFaculty(faculty);
    displayFaculty();

    // Reset the form
    event.target.reset();
});

function saveFaculty(faculty) {
    let facultyList = getFacultyFromLocalStorage();
    facultyList.push(faculty);
    localStorage.setItem('faculty', JSON.stringify(facultyList));
}

function getFacultyFromLocalStorage() {
    let facultyList = localStorage.getItem('faculty');
    if (facultyList === null) {
        facultyList = [];
    } else {
        facultyList = JSON.parse(facultyList);
    }
    return facultyList;
}

function displayFaculty() {
    let facultyList = getFacultyFromLocalStorage();
    let facultyTableBody = document.getElementById('facultyTable').getElementsByTagName('tbody')[0];
    facultyTableBody.innerHTML = '';

    facultyList.forEach(function(faculty, index) {
        let row = facultyTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = faculty.name;
        cell2.innerHTML = faculty.department;
        cell3.innerHTML = faculty.qualification;
        cell4.innerHTML = faculty.experience;
        cell5.innerHTML = `<button onclick="deleteFaculty(${index})">Delete</button>`;  // This button will delete the faculty member
    });
}

function deleteFaculty(index) {
    let facultyList = getFacultyFromLocalStorage();
    facultyList.splice(index, 1);
    localStorage.setItem('faculty', JSON.stringify(facultyList));
    displayFaculty();  // Refresh the displayed faculty list after deletion
}
