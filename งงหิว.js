let slideIndex = 0; // ตัวแปรเก็บลำดับของสไลด์

// เริ่มต้นฟังก์ชันโชว์สไลด์
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
    
    // ซ่อนสไลด์ทั้งหมด
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // เพิ่มค่า slideIndex และกำหนดให้มันวนกลับไปที่สไลด์แรกเมื่อมันเลยจำนวนสไลด์ทั้งหมด
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // แสดงสไลด์ปัจจุบัน
    slides[slideIndex-1].style.display = "block";  
    
    // ตั้งเวลาในการเปลี่ยนสไลด์ทุก 3 วินาที (3000 มิลลิวินาที)
    setTimeout(showSlides, 3000); 
}

// เรียกใช้ฟังก์ชันเพื่อเริ่มต้นการโชว์สไลด์
showSlides();
