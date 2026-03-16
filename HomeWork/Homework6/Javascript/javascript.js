// ฟังก์ชันสำหรับสุ่มคะแนน
function randomScore() {
    // สุ่มเลข 0 - 100 (Math.random ให้ค่า 0-1 แล้วคูณ 100 จากนั้นปัดเศษลง)
    let randomVal = Math.floor(Math.random() * 101);
    
    // เอาค่าที่สุ่มได้ไปใส่ในช่อง Input
    document.getElementById("scoreInput").value = randomVal;
    
    // สั่งให้รันระบบเช็คเกรดทันทีหลังจากสุ่มเสร็จ
    checkGrade();
}

// ฟังก์ชันเช็คเกรด (แบบ Switch Case เดิม)
function checkGrade() {
    let score = parseFloat(document.getElementById("scoreInput").value);
    let output = document.getElementById("outputBox");

    if (isNaN(score) || score < 0 || score > 100) {
        output.innerHTML = `<div style="color: var(--v-red); margin-top: 20px; font-size: 0.8rem;">ERROR: INVALID_SCORE</div>`;
        return;
    }

    let grade = "";
    let color = "";

    switch (true) {
        case (score >= 80): grade = "A"; color = "#00baff"; break;
        case (score >= 70): grade = "B"; color = "#0ac8b9"; break;
        case (score >= 60): grade = "C"; color = "#ece8e1"; break;
        case (score >= 50): grade = "D"; color = "#8b978f"; break;
        default: grade = "F"; color = "#ff4655"; break;
    }

    output.innerHTML = `
        <div class="grade-display" style="color: ${color}; text-shadow: 0 0 30px ${color}44;">
            ${grade}
        </div>
    `;
}