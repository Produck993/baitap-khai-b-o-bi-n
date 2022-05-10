//Bài 5: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b. S= a x b

let a = prompt("Nhập chiều dài hình chữ nhất ?");
let b = prompt("Nhập chiều rộng hình chữ nhật ?")
let S;
if (a <= 0 && b <=0) {
    alert("Thông số không chính xác")
} else if (a > 0 && b > 0) {
    S = a*b
};
document.write("Diện tích hình chữ nhật là : " + S)