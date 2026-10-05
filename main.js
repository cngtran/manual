const tabDangNhap = document.getElementById('dangnhap');
const tabDangKy = document.getElementById('dangky');
const formDangNhap = document.getElementById('form-dangnhap');
const formDangKy = document.getElementById('form-dangky');

tabDangNhap.addEventListener('click', function () {
    formDangNhap.hidden = false;
    formDangKy.hidden = true;

    tabDangNhap.classList.add('tab-active');
    tabDangKy.classList.remove('tab-active');
});

tabDangKy.addEventListener('click', function () {
    formDangKy.hidden = false;
    formDangNhap.hidden = true;

    tabDangKy.classList.add('tab-active');
    tabDangNhap.classList.remove('tab-active');
});