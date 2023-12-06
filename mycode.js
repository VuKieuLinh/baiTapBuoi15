// ---------------Bài tập 1: Quản Lý Tuyển Sinh

    function tinhDiemKhuVuc() {
        var diemKhuVuc = 0;
        var khuVucA = document.getElementById("khuVucA").checked;
        var khuVucB = document.getElementById("khuVucB").checked;
        var khuVucC = document.getElementById("khuVucC").checked;

        switch (true) {
            case khuVucA:
                diemKhuVuc = 2;
                break;
            case khuVucB:
                diemKhuVuc = 1;
                break;
            case khuVucC:
                diemKhuVuc = 0.5;
                break;
        }

        return diemKhuVuc;
    }

    function tinhDiemDoiTuong() {
        var diemDoiTuong = 0;
        var doiTuong1 = document.getElementById("doiTuong1").checked;
        var doiTuong2 = document.getElementById("doiTuong2").checked;
        var doiTuong3 = document.getElementById("doiTuong3").checked;

        switch (true) {
            case doiTuong1:
                diemDoiTuong = 2.5;
                break;
            case doiTuong2:
                diemDoiTuong = 1.5;
                break;
            case doiTuong3:
                diemDoiTuong = 1;
                break;
        }

        return diemDoiTuong;
    }

    function tinhDiemTongKet() {
        var diemMon1 = parseFloat(document.getElementById("mon1").value) ;
        var diemMon2 = parseFloat(document.getElementById("mon2").value) ;
        var diemMon3 = parseFloat(document.getElementById("mon3").value) ;

        var diemChuan = parseFloat(document.getElementById("diemChuan").value) || 0;

        var diemKhuVuc = tinhDiemKhuVuc();
        var diemDoiTuong = tinhDiemDoiTuong();

        var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

        // Kiểm tra nếu điểm tổng kết lớn hơn điểm chuẩn thì hiển thị kết quả
        if (diemTongKet >= diemChuan) {
            alert("Chúc mừng! Bạn đã đậu với điểm " + diemTongKet);
        } else {
            alert("Rất tiếc, bạn không đậu. Điểm của bạn là " + diemTongKet);
        }
    }


// ---------------Bài tập 2: Tính Tiền Điện--------------------
function tinhTienDien() {
    var ten = document.getElementById("ten").value;
    var soDienTieuThu = parseFloat(document.getElementById("soDienTieuThu").value);

    var m1 = 50; // Mức 1: Dưới hoặc bằng 50 kWh
    var gia1 = 500; // Giá cho mức 1

    var m2 = 100; // Mức 2: Từ 51 kWh đến 150 kWh
    var gia2 = 650; // Giá cho mức 2

    var m3 = 100; // Mức 3: Từ 151 kWh đến 250 kWh
    var gia3 = 850; // Giá cho mức 3

    var m4 = 150; // Mức 4: Từ 251 kWh đến 400 kWh
    var gia4 = 1100; // Giá cho mức 4

    var gia5 = 1300; // Giá cho mức 5 (Trên 400 kWh)

    var tienDien = 0;

    // Tính tiền dựa trên các mức giá và ngưỡng sử dụng
    if (soDienTieuThu <= m1) {
        tienDien = soDienTieuThu * gia1;
    } else if (soDienTieuThu <= m1 + m2) {
        tienDien = m1 * gia1 + (soDienTieuThu - m1) * gia2;
    } else if (soDienTieuThu <= m1 + m2 + m3) {
        tienDien = m1 * gia1 + m2 * gia2 + (soDienTieuThu - m1 - m2) * gia3;
    } else if (soDienTieuThu <= m1 + m2 + m3 + m4) {
        tienDien = m1 * gia1 + m2 * gia2 + m3 * gia3 + (soDienTieuThu - m1 - m2 - m3) * gia4;
    } else {
        tienDien = m1 * gia1 + m2 * gia2 + m3 * gia3 + m4 * gia4 + (soDienTieuThu - m1 - m2 - m3 - m4) * gia5;
    }

    document.getElementById("tongTien").innerHTML = "Số tiền điện cần trả của " + ten + " là: " + tienDien + " VND";
}


//------------------ Bài tập 3: Tính Thuế Thu Nhập Cá Nhân ----------------------------
function tinhThueThuNhap() {
    var ten = document.getElementById("ten-nguoi-dong-thue").value;
    var tongThuNhap = parseFloat(document.getElementById("tong-thu-nhap").value);
    var soNguoiPhuThuoc = parseInt(document.getElementById("so-nguoi-phu-thuoc").value);

    // Tính thuế thu nhập cá nhân dựa trên các quy tắc
    var thueThuNhap = 0;

    // Thu nhập chịu thuế
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;

    if (thuNhapChiuThue <= 60000000) {
        thueThuNhap = thuNhapChiuThue * 5 / 100;
    } else if (thuNhapChiuThue <= 120000000) {
        thueThuNhap = 60000000 * 5 / 100 + (thuNhapChiuThue - 60000000) * 10 / 100;
    } else if (thuNhapChiuThue <= 210000000) {
        thueThuNhap = 60000000 * 5 / 100 + 60000000 * 10 / 100 + (thuNhapChiuThue - 120000000) * 15 / 100;
    } else if (thuNhapChiuThue <= 382000000) {
        thueThuNhap = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + (thuNhapChiuThue - 210000000) * 20 / 100;
    } else if (thuNhapChiuThue <= 624000000) {
        thueThuNhap = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 172000000 * 20 / 100 + (thuNhapChiuThue - 382000000) * 25 / 100;
    } else if (thuNhapChiuThue <= 960000000) {
        thueThuNhap = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 172000000 * 20 / 100 + 242000000 * 25 / 100 + (thuNhapChiuThue - 624000000) * 30 / 100;
    } else {
        thueThuNhap = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 172000000 * 20 / 100 + 242000000 * 25 / 100 + 336000000 * 30 / 100 + (thuNhapChiuThue - 960000000) * 35 / 100;
    }

    document.getElementById("tongTienThue").innerHTML = "Thuế thu nhập cá nhân của " + ten + " là: " + thueThuNhap.toFixed(2) + " VND";
}


function hienThiNhapKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var inputSoKetNoi = document.getElementById("soKetNoi");

    if (loaiKhachHang === "nhaDan") {
        inputSoKetNoi.disabled = true;
    } else {
        inputSoKetNoi.disabled = false;
    }
}
// ------------------Bài tập 4: Tính Tiền Cáp---------------------
function tinhHoaDon() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value) || 0;

    var phiXuLyHoaDon = 0;
    var phiDichVuCoBan = 0;
    var phiThueKenhCaoCap = 0;

    if (loaiKhachHang === "nhaDan") {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
    } else {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + 5 * (soKetNoi - 10);
        phiThueKenhCaoCap = 50 * soKenhCaoCap;
    }

    var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

    var ketQua = `Mã Khách Hàng: ${maKhachHang}<br>`;
    ketQua += `Loại Khách Hàng: ${loaiKhachHang}<br>`;
    ketQua += `Phí Xử Lý Hóa Đơn: $${phiXuLyHoaDon.toFixed(2)}<br>`;
    ketQua += `Phí Dịch Vụ Cơ Bản: $${phiDichVuCoBan.toFixed(2)}<br>`;
    ketQua += `Phí Thuê Kênh Cao Cấp: $${phiThueKenhCaoCap.toFixed(2)}<br>`;
    ketQua += `Tổng Hóa Đơn: $${tongHoaDon.toFixed(2)}`;

    document.getElementById("ketQua").innerHTML = ketQua;
}