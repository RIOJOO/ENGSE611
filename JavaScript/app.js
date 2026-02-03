function showMessage() {
    alert("สวัสดีจากไฟล์ JavaScript ภายนอก!");
}

document.getElementById("reset-btn").addEventListener("click", showMessage);

console.log("สคริปต์ทำงานแล้ว");