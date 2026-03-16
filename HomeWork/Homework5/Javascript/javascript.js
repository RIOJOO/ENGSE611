function checkGrade() {
    const scoreInput = document.getElementById('scoreInput');
    const score = parseInt(scoreInput.value);
    const outputDiv = document.getElementById('output');

    // ตรวจตอนไม่ได้ใส่ตัวเลข
    if (isNaN(score) || score < 0 || score > 100) {
        outputDiv.innerHTML = "โปรดระบุคะแนนที่ถูกต้อง (0-100)";
        return;
    }

    let grade = "";
    let status = "";
    let statusClass = "";

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (score >= 50) {
        status = "ผ่าน";
        statusClass = "status-pass";
    } else {
        status = "ไม่ผ่าน";
        statusClass = "status-fail";
    }

    const resultHTML = `
        <div class="result-item">คะแนนที่ได้: ${score}</div>
        <div class="result-item">เกรด: <span class="grade-value">${grade}</span></div>
        <div class="result-item">ผลสอบ: <span class="${statusClass}">${status}</span></div>
    `;
    
    outputDiv.innerHTML = resultHTML;

    console.log("--- Grade Report ---");
    console.log("คะแนนที่ได้: " + score);
    console.log("เกรด: " + grade);
    console.log("ผลสอบ: " + status);
}