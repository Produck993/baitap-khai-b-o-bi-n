//Bài 2: Chuyển từ mét sang feet:
//ft =m * 3.2808

let m = prompt("Nhập số mét");
let ft;
if (m <=0) {
    alert("Yêu cầu nhập đúng thông số")
} else if (m > 0) {
    ft = m * 3.2808
}
document.write(m + " " +"mét Bằng : " + ft + " "+ "Feet")