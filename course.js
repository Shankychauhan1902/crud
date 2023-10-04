document.addEventListener("DOMContentLoaded", function() {
    displayCourses();
});

document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let course = {
        courseName: document.getElementById('courseName').value,
        courseDuration: document.getElementById('courseDuration').value
    };

    saveCourse(course);
    displayCourses();

    // Reset the form
    event.target.reset();
});

function saveCourse(course) {
    let courses = getCoursesFromLocalStorage();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
}

function getCoursesFromLocalStorage() {
    let courses = localStorage.getItem('courses');
    if (courses === null) {
        courses = [];
    } else {
        courses = JSON.parse(courses);
    }
    return courses;
}

function displayCourses() {
    let courses = getCoursesFromLocalStorage();
    let courseTableBody = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
    courseTableBody.innerHTML = '';

    courses.forEach(function(course, index) {
        let row = courseTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = course.courseName;
        cell2.innerHTML = course.courseDuration;
        cell3.innerHTML = `<button onclick="deleteCourse(${index})">Delete</button>`;
    });
}

function deleteCourse(index) {
    let courses = getCoursesFromLocalStorage();
    courses.splice(index, 1);
    localStorage.setItem('courses', JSON.stringify(courses));
    displayCourses();  // Refresh the displayed course list after deletion
}
