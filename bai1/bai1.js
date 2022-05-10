//Chuyển từ độ C sang độ F.

//C  x  9/5 + 32 = °F
//C = (F– 32) /1.8

function chuyendoiF() {
    let C = prompt("Nhập độ C")
    let F = (C * 9/5) + 32
    document.getElementById('trave').innerHTML = "Nhiệt độ C vừa nhập" + C + " Nhiệt độ F quy đổi:" +F
}
function chuyendoiC() {
    let F = prompt("Nhập độ F");
    let C = (F-32) /1.8
    document.getElementById('trave').innerHTML = "Nhiệt độ F vừa nhập" + F + " Nhiệt độ C quy đổi:" + C
}