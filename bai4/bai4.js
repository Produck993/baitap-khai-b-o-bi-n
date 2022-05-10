//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b. S(abc ) = 1/2 a*b

let a = prompt("Nhập cạnh trái tam giác vuông ?");
let b = prompt("Nhập cạnh phải hình tam giác vuông")
let S;
if (a <= 0 && b <=0) {
    alert("Thông số không chính xác")
} else if (a > 0 && b > 0) {
    S = 1/2*a*b
};
document.write("Diện tích hình tam giác vuông là : " + S)