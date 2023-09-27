var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var maxjs = this.nextElementSibling;
    if (maxjs.style.maxHeight){
        maxjs.style.maxHeight = null;
    } else {
        maxjs.style.maxHeight = maxjs.scrollHeight + "px";
    }
  });
}
