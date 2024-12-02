var plus=document.getElementsByClassName("fas fa-plus-circle");
var minus=document.getElementsByClassName("fas fa-minus-circle");
var quantitys=document.getElementsByClassName("quantity");

for(let i=0; i<plus.length;i++){
    let oneplus=plus[i];
    oneplus.addEventListener("click", function(){
        oneplus.nextElementSibling.textContent++
        // let a= parseInt( oneplus.nextElementSibling.innerText )
        // oneplus.nextElementSibling.innerText=a+1
    updateTotal();
    })
}
for(let i=0; i<minus.length;i++){
    let minu=minus[i];
    minu.addEventListener("click", function(){
        // let a= parseInt( minu.previousElementSibling.innerText )
        // minu.previousElementSibling.innerText=a-1
        if(minu.previousElementSibling.textContent>1){minu.previousElementSibling.textContent--}
        updateTotal();
    })
}








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
