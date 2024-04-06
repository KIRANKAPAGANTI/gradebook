// Function to calculate total grade, percentage, and determine grade
const calcy = () => {
    let wd = parseFloat(document.getElementById('wd').value) || 0;
    let maths = parseFloat(document.getElementById('maths').value) || 0;
    let comp = parseFloat(document.getElementById('comp').value) || 0;
    let phy = parseFloat(document.getElementById('phy').value) || 0;
    let totalGrades = (wd + maths + comp + phy).toFixed(2);
    let perc = (((totalGrades / 400) * 100).toFixed(2));
    let grade = '';

    if (perc >= 80) {
        grade = 'A';
    } else if (perc >= 60) {
        grade = 'B';
    } else if (perc >= 40) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    // Display result
    let resultMsg = `Out of 400, your total is ${totalGrades} and percentage is ${perc}%. Your grade is ${grade}.`;
    document.getElementById('showData').innerHTML = resultMsg;
    document.getElementById('result').innerHTML = perc >= 40 ? 'PASS' : 'FAIL';
}

// Function to toggle the statistics block
const toggleStatistics = () => {
    const statistics = document.getElementById('statistics');
    if (statistics.style.display === 'none') {
        statistics.style.display = 'block';
        // Implement logic to display statistics
    } else {
        statistics.style.display = 'none';
    }
}
// Function to display exam information
const displayExamInformation = () => {
    const examInfoContainer = document.getElementById('examInfoContainer');
    examInfoContainer.innerHTML = `
        <header>
            <h1>Exam Information</h1>
            <p>Title: [Exam Title]</p>
            <p>Date: [Exam Date]</p>
            <p>Professor's Name: [Professor's Name]</p>
            <p>College: [College Name]</p>
            <p>Department: [Department Name]</p>
            <p>Semester: [Semester]</p>
            <p>Group: [Group]</p>
        </header>
    `;
}

// Function to display statistics
const displayStatistics = () => {
    const statisticsContainer = document.getElementById('statisticsContainer');
    statisticsContainer.innerHTML = `
        <div class="statistics">
            <h2>Statistics</h2>
            <p>The number of students that received a certain grade: [Number]</p>
            <p>Average grade: [Average]</p>
            <p>Maximal grade: [Maximal]</p>
            <p>Minimal grade: [Minimal]</p>
            <p>Total number of students: [Total]</p>
            <button id="hideStatsBtn">Hide</button>
        </div>
    `;
}

// Function to hide statistics
const hideStatistics = () => {
    const statisticsContainer = document.getElementById('statisticsContainer');
    statisticsContainer.innerHTML = '';
}

// Event listener for "Statistics" link
document.getElementById('showStatsBtn').addEventListener('click', displayStatistics);

// Event listener for "Hide" button in statistics
document.addEventListener('click', function(event) {
    if (event.target.id === 'hideStatsBtn') {
        hideStatistics();
    }
});
// Function to calculate total marks and redirect to appropriate page
const calculateAndRedirect = () => {
    // Calculate total marks
    let wd = parseFloat(document.getElementById('wd').value);
    let maths = parseFloat(document.getElementById('maths').value);
    let comp = parseFloat(document.getElementById('comp').value);
    let phy = parseFloat(document.getElementById('phy').value);
    let totalMarks = wd + maths + comp + phy;

    // Redirect based on total marks (for demonstration purposes)
    if (totalMarks >= 160) {
        // Redirect to exam information page
        window.location.href = 'exam_information.html';
    } else {
        // Redirect to student grade calculator page
        window.location.href = 'student_grade_calculator.html';
    }
}

// Event listener for Enter key in input fields
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateAndRedirect();
    }
});



// Event listener for "Exam Information" link
document.getElementById('examInfoLink').addEventListener('click', displayExamInformation);

// Event listener for Show Statistics button
document.getElementById('showStatsBtn').addEventListener('click', toggleStatistics);
