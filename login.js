const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});







// الحصول على العناصر
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const closeButton = document.getElementById('closeButton');

// إظهار شريط البحث عند الضغط على الشعار
searchIcon.addEventListener('click', (event) => {
    searchBar.style.top = '0'; // إظهار الشريط
    event.stopPropagation(); // منع انتقال الحدث للأعلى
});

// إخفاء شريط البحث عند الضغط على زر الإغلاق
closeButton.addEventListener('click', (event) => {
    searchBar.style.top = '-60px'; // إخفاء الشريط
    event.stopPropagation(); // منع انتقال الحدث للأعلى
});

// إخفاء الشريط عند الضغط في أي مكان آخر
document.addEventListener('click', (event) => {
    // التأكد من أن النقر ليس على الشريط أو الشعار
    if (!searchBar.contains(event.target) && event.target !== searchIcon) {
        searchBar.style.top = '-60px'; // إخفاء الشريط
    }
});
