//external
<!-- addEventListener: Lang nghe su kien click, khi su kien click xay ra thi no se thuc hien function va hien thi-->
document.getElementById("btn").addEventListener("click", function () {
    alert("hello")
    document.getElementById("btn").style.backgroundColor = "green"
    document.getElementById("btn").innerText = "Unlike"
})