    //Bài 6: Giải phương trình bậc 1. ax + b = 0; a !==0
    let a = prompt('Nhập vào số a');
    let b = prompt('Nhập vào số b');
    let x;
    if (a == 0 && b == 0) {
        alert("Phương trình vô số nghiệm") 
    } else if (a == 0 && b !== 0) {
        alert("Phương trình vô nghiệm") 
    } else {
        x = -b/a
        document.write(x)
    }
