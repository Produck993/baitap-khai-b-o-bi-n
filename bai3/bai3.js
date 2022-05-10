// Tính diện tích hình vuông khi biết cạnh a. math.pow(a,b)

let a = prompt("Nhập chiều dài cạnh hình vuông ?");
let S;
if (a <= 0) {
    alert("Thông số không chính xác")
} else if (a > 0) {
    S = Math.pow(a,2)
};
document.write("Diện tích hình vuông là : " + S)