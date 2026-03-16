function startPractice() {
    let display = document.getElementById("displayArea");
    let maxNumber = 20; // ข้อ 2: สร้างตัวแปร maxNumber
    let resultHTML = "";

    // ล้าง Console ก่อนรัน
    console.clear();

    // ข้อ 3: for loop 0 ถึง maxNumber พร้อมเช็คเลขคู่/คี่
    resultHTML += "<div class='header'>--- EVEN/ODD CHECK ---</div>\n";
    for (let i = 0; i <= maxNumber; i++) {
        let type = "";
        let className = "";

        if (i % 2 === 0) {
            type = "(คู่)";
            className = "even";
        } else {
            type = "(คี่)";
            className = "odd";
        }

        let outputLine = `${i} ${type}\n`;
        resultHTML += `<span class="${className}">${outputLine}</span>`;
        console.log(`${i} ${type}`); // ข้อ 4: แสดงผลใน Console
    }

    // ข้อ 5.1: นับทีละ 2 (0, 2, 4, 6, ...)
    resultHTML += "\n<div class='header'>--- COUNT BY 2 ---</div>\n";
    for (let j = 0; j <= maxNumber; j += 2) {
        resultHTML += `นับทีละ 2: ${j}\n`;
        console.log(`นับทีละ 2: ${j}`);
    }

    // ข้อ 5.2: นับถอยหลังจาก 10 -> 0
    resultHTML += "\n<div class='header'>--- COUNT DOWN (10 to 0) ---</div>\n";
    for (let k = 10; k >= 0; k--) {
        resultHTML += `ถอยหลัง: ${k}\n`;
        console.log(`ถอยหลัง: ${k}`);
    }

    // แสดงผลลงในหน้าเว็บ
    display.innerHTML = resultHTML;
}