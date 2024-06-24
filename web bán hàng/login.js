// phần tử của trang
const formdangnhap = document.getElementById("formdangnhap");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const errormailmk = document.getElementById("errormailmk");

// lấy phần tử liên quan đến lỗi
const erroremail = document.getElementById("erroremail");
const errormk = document.getElementById("errormk");

// lấy dữ liệu từ máy chủ lưu trữ 
const userlocal = JSON.parse(localStorage.getItem("users")) || []; 

/**
 * validate địa chỉ email
 * @param {*} email : chuỗi email người dùng nhập vào
 * @returns : dữ liệu nếu email đúng định dạng, undifined nếu email k đúng định dạng
 */
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

// lắng nge sự kiện submit form đăng nhập tài khoản
formdangnhap.addEventListener("submit", function(e){
    // ngăn chặn sự kiện load lại trang
    e.preventDefault();

    // validate dữ liệu đầu vào email đăng nhập
    if(!emailElement.value){
        erroremail.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        erroremail.style.display = "none";
        if(!validateEmail(emailElement.value)){
            erroremail.style.display = "block";
            erroremail.innerHTML = "email không đúng định dạng";
        }
    }

    // validate dữ liệu đầu vào mật khẩu đăng nhập
    if(!passwordElement.value){
        errormailmk.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        errormailmk.style.display = "none";
    }

    // lấy dữ liệu từ máy chủ về
    const userlocal = JSON.parse(localStorage.getItem("users")) || []; 

    // tìm kiếm email và mật khẩu người dùng đăng nhập vào có tồn tại trên máy chủ
    const finduser = userlocal.find(user => user.email === emailElement.value && 
        user.password === passwordElement.value
    );

    if(!finduser){
        // nếu không thì thông báo cho người dùng đăng nhập lại
        errormailmk.style.display = "block";
    } else{
        // nếu có thì đăng nhập thành công và chuyển hướng về trang chủ
        setTimeout(function(){
            window.location.href = "index1.html";
        }, 1000)
    }
    // console.log(finduser);
})