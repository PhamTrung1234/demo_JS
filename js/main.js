function tinhluong(){
    let luongngay = document.getElementById('luongngay').value;
    let songay = document.getElementById('songay').value;
    let luong = 0;
    luong = luongngay * songay;
    document.getElementById("txtluong").innerHTML = 'số lương của bạn là :' + luong
}

document.getElementById('btnluong').onclick = tinhluong;



function tinhTB(){
    let so1 = document.getElementById("sothu1").value;
    let so2 = document.getElementById("sothu2").value;
    let so3 = document.getElementById("sothu3").value;
    let so4 = document.getElementById("sothu4").value;
    let so5 = document.getElementById("sothu5").value;
    let trungbinh = 0;
    trungbinh = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) /5;
    document.getElementById("txttinhTB").innerHTML = "giá trị trung bình là :" + trungbinh;
}
document.getElementById('btntinhTB').onclick = tinhTB;





function quydoi(){
    let sotien = document.getElementById('sotien').value;
    let tilequydoi = 23500;
    let ketqua = sotien * tilequydoi;
    
   
     
    document.getElementById('txtTien').innerHTML = 'số tiền quy đổi được là: ' + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(
        ketqua,
      );
}

document.getElementById('btnTien').onclick = quydoi;



// diện tích & chu vi 
function tinh(){
    let chieudai = document.getElementById('chieudai').value;
    let chieurong = document.getElementById('chieurong').value;
    let chuvi = (Number(chieudai) + Number(chieurong)) * 2 ;
    let dientich = chieudai * chieurong;
    document.getElementById('txtTinh').innerHTML = `
    chu vi là : ${chuvi} ; 
    diện tích là : ${dientich}`
}


//tính tổng 2 ký số

function tinhtong(){
    let socantinh = document.getElementById('socantinh').value;
    let tinhtong = Number(Math.floor(socantinh / 10)) + Number(socantinh % 10)
    document.getElementById("txtTinhtong").innerHTML = " tổng hai ký số là : " + tinhtong;
}