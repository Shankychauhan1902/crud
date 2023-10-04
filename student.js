document.addEventListener("DOMContentLoaded", function() {
    // Attach form submit event listener
    document.getElementById('studentForm').addEventListener('submit', handleStudentFormSubmit);

    // Display initial student list
    displayStudentList();
});

function handleStudentFormSubmit(event) {
    event.preventDefault();

    let student = {
        name: document.getElementById('studentName').value,
        rollNo: document.getElementById('studentRollNo').value,
        course: document.getElementById('studentCourse').value,
        year: document.getElementById('studentYear').value,
        semester: document.getElementById('studentSemester').value,
    };

    saveStudent(student);

    alert('Student added successfully!');

    // Reset the form
    event.target.reset();

    // Refresh the student list
    displayStudentList();
}

function saveStudent(student) {
    let students = getStudentsFromLocalStorage();
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}

function getStudentsFromLocalStorage() {
    let students = localStorage.getItem('students');
    if (students === null) {
        students = [];
    } else {
        students = JSON.parse(students);
    }
    return students;
}

function displayStudentList() {
    let students = getStudentsFromLocalStorage();
    let studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    
    // Clear the current list
    studentTableBody.innerHTML = '';

    students.forEach((student, index) => {
        let newRow = studentTableBody.insertRow();

        let nameCell = newRow.insertCell(0);
        let rollNoCell = newRow.insertCell(1);
        let courseCell = newRow.insertCell(2);
        let yearCell = newRow.insertCell(3);
        let semesterCell = newRow.insertCell(4);
        let actionCell = newRow.insertCell(5);

        nameCell.innerHTML = student.name;
        rollNoCell.innerHTML = student.rollNo;
        courseCell.innerHTML = student.course;
        yearCell.innerHTML = student.year;
        semesterCell.innerHTML = student.semester;
        actionCell.innerHTML = `<button onclick="deleteStudent(${index})">Delete</button>`; // For simplicity, only a delete action is added
    });
}

function deleteStudent(index) {
    let students = getStudentsFromLocalStorage();
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Student removed successfully!');
    
    // Refresh the student list
    displayStudentList();
}
