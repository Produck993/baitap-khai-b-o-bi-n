//Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
/* Bậc 1: 4 triệu đồng/tháng 0%;
Bậc 2: Trên 4 - 6 triệu đồng/tháng: 5%;
Bậc 3: Trên 6 - 9 triệu đồng: 10%;
Bậc 4: Trên 9 - 14 triệu đồng/tháng: 15%;
Bậc 5: trên 14 - 24 triệu đồng/tháng: 20%;
Bậc 6: Trên 24 - 44 triệu đồng/tháng: 25%;
Bậc 7: Trên 44 - 84 triệu đồng/tháng: 30%;
Bậc 8: Trên 84 triệu đồng: 35%. */

let a = prompt('Nhập số tiền lương thuế thu nhập cá nhân');
let trave;
if (a > 0 && a <= 6) {
    trave = a *5/100 
}
    else if (a <= 9) {
    trave = a * 10/100
} else if (a <= 14) {
    trave = a* 15/100
}else if (a <= 24) {
    trave = a* 20/100
}else if (a <= 44) {
    trave = a* 25/100
}else if (a <= 84) {
    trave = a* 30/100
}else{
    trave = a* 3/100
}
document.write('Số tiền lương bạn đã nhập vào là : ' + a + "triệu VNĐ, " + "Số tiền thuế phải nộp là : " + trave + "triệu VNĐ")