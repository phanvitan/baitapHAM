
// ***** BÀI 1 : XET TUYEN SINH VIEN *****

function calcXetTuyen(){
    var DiemChuan = document.getElementById("selectDiemChuan").value;
    console.log(DiemChuan);
    var DiemKV = document.getElementById("selectKVUT").value;
    console.log(DiemKV);
    var DiemDT = document.getElementById("selectDTUT").value;
    console.log(DiemDT);
    
    var Mon1 = document.getElementById("input1").value;
    console.log(Mon1);
    var Mon2 = document.getElementById("input2").value;
    console.log(Mon2);
    var Mon3 = document.getElementById("input3").value;
    console.log(Mon3);

    var sum = parseInt(Mon1) + parseInt(Mon2) + parseInt(Mon3) + Number(DiemKV) + Number(DiemDT);
    console.log(sum);
    var DiemXet = Number(sum) - Number(DiemChuan);
    console.log(DiemXet);

    if (Mon1 == 0 || Mon2 == 0 || Mon3 == 0) {
        document.getElementById("txtResultXetTuyen").innerHTML = "<br>Tổng điểm của bạn : "+sum+ "<br> Bạn đã Trượt! Ôn thi lại bạn nhé! Mạnh mẽ lên!";
    }else{
        if (DiemXet >= 0) {
            document.getElementById("txtResultXetTuyen").innerHTML = "<br>Tổng điểm của bạn : "+sum+ "<br>Bạn đã đậu ! Xin Chúc Mừng !!";

        }else{
            document.getElementById("txtResultXetTuyen").innerHTML = "<br>Tổng điểm của bạn : "+sum+ "<br> Bạn đã Trượt! Ôn thi lại bạn nhé! Mạnh mẽ lên!";
        }
    }
}

//******** BÀI 2 : TÍNH TIỀN ĐIỆN ***** */


const gia1 = 500;
const gia2 = 650;
const gia3 = 850;
const gia4 = 1100;
const gia5 = 1300;

function calcTinhTienDien(){
    var name = document.getElementById("inputNameTienDien").value;
    console.log(name);
    var soKW = document.getElementById("inputSoKW").value;
    console.log(soKW);
    var TongTienDien = 0;
   

    if (0 <= soKW && soKW <= 50) {
        TongTienDien = soKW * gia1;
        console.log(TongTienDien);
    }else if (50 < soKW && soKW <= 100) {
        TongTienDien = 50 * gia1 + (soKW-50) * gia2;
        console.log(TongTienDien);
    }else if (100 < soKW && soKW <=200) {
        TongTienDien = 50 * gia1 + 50 * gia2 + (soKW-100) * gia3;
        console.log(TongTienDien);
    }else if (200 < soKW <=350) {
        TongTienDien = 50 * gia1 + 50 * gia2 + 100 * gia3 + (soKW-200) * gia4;
        console.log(TongTienDien);
    }else if (350 < soKW) {
        TongTienDien = 50 * gia1 + 50 * gia2 + 100 * gia3 + 150 * gia4 + (soKW-350) * gia5;
        console.log(TongTienDien);
    }

 document.getElementById("txtResultTinhTienDien").innerHTML = "<br>Tên : "+name+"<br>Tổng tiền điện : "+TongTienDien;

}

//******** BÀI 3 : TÍNH TIỀN THUẾ *********

const tax1 = 5;
const tax2 = 10;
const tax3 = 15;
const tax4 = 20;
const tax5 = 25;
const tax6 = 30;
const tax7 = 35;

function calcTAX(){
var ThuNhap = document.getElementById("inputIncome").value;
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(ThuNhap));
var PhuThuoc = document.getElementById("inputSNPT").value;
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(PhuThuoc));

var STPT = PhuThuoc * 1.6e+6;
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(STPT));

var TNChiuThue = ThuNhap - 4e+6 - STPT;
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TNChiuThue));

var TaxFinal = 0;

if (TNChiuThue <= 60e+6) {
    TaxFinal = (TNChiuThue * tax1) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (60e+6 < TNChiuThue && TNChiuThue <= 120e+6) {
    TaxFinal = (TNChiuThue * tax2) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (120e+6 < TNChiuThue && TNChiuThue <= 210e+6) {
    TaxFinal = (TNChiuThue * tax3) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (210e+6 < TNChiuThue && TNChiuThue <= 384e+6) {
    TaxFinal = (TNChiuThue * tax4) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (384e+6 < TNChiuThue && TNChiuThue <= 624e+6) {
    TaxFinal = (TNChiuThue * tax5) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (624e+6 < TNChiuThue && TNChiuThue <= 960e+6) {
    TaxFinal = (TNChiuThue * tax6) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}else if (960e+6 < TNChiuThue) {
    TaxFinal = (TNChiuThue * tax7) / 100;
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(TaxFinal));
}

document.getElementById("txtResultTAX").innerHTML = "<br>Thuế TN Cá Nhân : "+TaxFinal;
}

//******** BÀI 4 : TÍNH TIỀN CÁP *********

