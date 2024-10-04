function kiemTra() {
    let tendangNhap = document.login.dangNhap.value;
    let passWord = document.login.passWord.value;
    let nhoMatKhau = document.login.nhoMatKhau.value;
    if (tendangNhap == "") {
        alert('Vui lòng nhập tên đăng nhập');
        document.login.dangNhap.focus();
        return false;
    }
    if (passWord == "") {
        alert('Vui lòng nhập mật khẩu');
        document.login.passWord.focus();
        return false;
    }
    alert('Đăng Nhập thành công');
    let thongTin = '<h3>THÔNG TIN ĐĂNG NHẬP</h3>' +
        '<p>Tên đăng nhập: ' + '<span>' + tendangNhap + '</span>' + '</p>' +
        '<p>Tên đăng nhập: ' + '<span>' + passWord + '</span>' + '</p>';
    document.getElementById('hienThongTin').innerHTML = thongTin;
}
function huy() {
    location.reload(true);
}