//Bài 10: Viết chương trình tính giá điện. 
// Biết rằng 100 kWh đầu giá 1000, từ kWh 101 – 150 giá 1200, từ kWh 151 – 200 giá 2000, từ 201 trở lên giá 2500.

let kwh = prompt("Nhập số điện đã dùng");
let tiendien;
if (kwh <= 100) {
    tiendien = 1000*kwh
} else if ( kwh > 100 && kwh < 150) {
    tiendien = 1200*kwh
} else if ( kwh > 151 && kwh < 200) {
    tiendien = 2000*kwh
} else {
    tiendien = 2500*kwh
};
document.write(tiendien = "kwh đã dùng trong tháng là :" + kwh + "Số tiền thanh toán" + tiendien + "VNĐ")