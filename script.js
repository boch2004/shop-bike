// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 5000);

// FIXME:start
let currentBrand = 0;

function showBrand(index) {
  const brands = document.querySelectorAll('.brand-item');
  const totalBrands = brands.length;
  const track = document.querySelector('.carousel-track');

  // جعل التغيير دائريًا
  currentBrand = (index + totalBrands) % totalBrands;

  // نقل الشرائح باستخدام التحويل (translate)
  track.style.transform = `translateX(-${currentBrand * 220}px)`;
}

function nextBrand() {
  showBrand(currentBrand + 1);
}

function prevBrand() {
  showBrand(currentBrand - 1);
}

// تشغيل الشريط تلقائيًا كل 5 ثوانٍ (اختياري)
setInterval(nextBrand, 5000);

// FIXME:end

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



