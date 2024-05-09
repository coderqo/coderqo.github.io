document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('search-form');
    const resultDiv = document.getElementById('result');

    // Assume you have an array of student data
    const students = [
        { 
            studentId: "123456", 
            name: "Thí sinh 1",
            mathScore: 8.5, 
            literatureScore: 7.5, 
            englishScore: 9.0 
        },
        { 
            studentId: "789012", 
            name: "Thí sinh 2",
            mathScore: 9.0, 
            literatureScore: 8.0, 
            englishScore: 8.5 
        },
        // Add more students here as needed
    ];

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const studentId = document.getElementById('student-id').value;
        
        let foundStudent = students.find(student => student.studentId === studentId);

        if (foundStudent) {
            const mathScore = foundStudent.mathScore;
            const literatureScore = foundStudent.literatureScore;
            const englishScore = foundStudent.englishScore;
            const totalScore = (mathScore + literatureScore) * 2 + englishScore;
            
            resultDiv.innerHTML = `
                <p>Môn Toán: ${mathScore}</p>
                <p>Môn Văn: ${literatureScore}</p>
                <p>Tiếng Anh: ${englishScore}</p>
                <p>Tổng điểm: ${totalScore}</p>
            `;
        } else {
            resultDiv.innerHTML = 'Không tìm thấy điểm thi cho học sinh này.';
        }
    });
});
