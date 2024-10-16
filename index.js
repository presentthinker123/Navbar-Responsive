const nav = document.getElementById("clic");
const svgs = document.getElementById("svg");
const listele = document.getElementById("list")
nav.addEventListener("click",function(){
    nav.classList.add("hidden");
    listele.classList.remove("hidden");
    svgs.classList.remove("hidden");
})
svgs.addEventListener("click",function(){
    nav.classList.remove("hidden");
    listele.classList.add("hidden");
    svgs.classList.add("hidden");

})