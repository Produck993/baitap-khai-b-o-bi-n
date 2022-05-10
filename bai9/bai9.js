/*Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c 
là cạnh của một tam giác là:

a,b,c > 0
a + b > c
b + c > a
a + c > b*/

let a = prompt('nhập a')
let b = prompt('nhập b')
let c = prompt('nhập c')
let ketqua
if (a > 0 && b > 0 && c >0) {
                if ( a + b > c) {
    ketqua = document.write('Đây là 1 hình tam giác')
}          else if ( a + c > b) {
    ketqua = document.write('Đây là 1 hình tam giác')
}           else if (b + c > a) {
    ketqua = document.write('Đây là 1 hình tam giác')
}           else {
    ketqua = document.write('Đây không phải là hình tam giác')
}
};
