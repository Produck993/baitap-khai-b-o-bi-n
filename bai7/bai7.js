    //Bài 6: Giải phương trình bậc 1. ax + b = 0; a !==0
    let a = prompt('Nhập vào số a');
    let b = prompt('Nhập vào số b');
    let c = prompt('Nhập vào số c');
    let x;
    let delta = Math.pow(b,2) - 4*a*c;
    // ax2 + bx + c = 0
    if (a == 0) {
        if  ( b == 0) {
            if (c == 0) {
                alert("Phương trình vô số nghiệm")
            } else {
                alert ("Phương trình vô nghiệm")
            }
        } else {
            x = -b/c
             document.write('Phương trình có nghiệm là : ' + x)
        }
    } else {
        if ( delta > 0) {
            let  x1 = -b + Math.sqrt(delta)/2*a
            let x2 = -b - Math.sqrt(delta)/2*a
            document.write(x1)
            document.write(x2)
        } else if (delta == 0) {
            x = -b/2*a
            document.write("Phuong trinh co nghiem la : " + x)
        } else {
            document.write('Phuong trinh vo nghiem')
        }
    };
