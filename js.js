var btn = document.getElementById("btn-link");
console.log(btn);
var modal = document.getElementById("modal");
var close = document.getElementById("btn-close");
console.log(modal);

btn.addEventListener('click', function() {
    modal.style.display = "block";
});
close.addEventListener('click', function() {
    modal.style.display = "none";
});