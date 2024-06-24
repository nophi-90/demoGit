// lấy ra phần tử của trang

const formdangky = document.getElementById("formdangky");
const usernameElement = document.getElementById("user");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("rePassword");
// phàn tử liên quan đến lỗi

const userNameError = document.getElementById("nameerror");
const emailError = document.getElementById("emailerror");
const passwordError = document.getElementById("passworderror");
const rePasswordError = document.getElementById("rePassworderror");

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

// lắng nghe sự kiện submit form đăng ký tài khoản
formdangky.addEventListener("submit", function(e){
    // ngăn sự kiện load lại trang
    e.preventDefault();

    // validate dữ liệu đầu vào tên đăng ký
    if(!usernameElement.value){
        userNameError.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        userNameError.style.display = "none";
    }

    // validate dữ liệu đầu vào email đăng ký
    if(!emailElement.value){
        emailError.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        emailError.style.display = "none";
        if(!validateEmail(emailElement.value)){
            emailError.style.display = "block";
            emailError.innerHTML = "email không đúng định dạng";
        }
    }

    // validate dữ liệu đầu vào mật khẩu đăng ký
    if(!passwordElement.value){
        passwordError.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        passwordError.style.display = "none";
    }

    // validate dữ liệu đầu vào mật khẩu đăng ký
    if(!rePasswordElement.value){
        rePasswordError.style.display = "block";
    }else{
        // ẩn lỗi nếu đã có dữ liệu
        rePasswordError.style.display = "none";
    }

    // kiểm tra mật khẩu với nhập lại mật khẩu
    if(passwordElement.value !== rePasswordElement.value){
        rePasswordError.style.display = "block";
        rePasswordError.innerHTML = "mật khẩu không khớp";
    }

    // gửi dữ liệu từ mấy chủ lưu trữ
    if(usernameElement.value && emailElement.value && passwordElement.value &&
        rePasswordElement.value && rePasswordElement.value == passwordElement.value &&
        validateEmail(emailElement.value)
    ){
        // lấy dữ liệu từ form và hợp thành đối tượng user
        const user = {
            userid: Math.ceil(Math.random() * 100000000),
            userName: usernameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
        };

        // đưa user vào trong mảng userlocal
        userlocal.push(user);

        // lưu trữ dữ liệu lên máy chủ
        localStorage.setItem("users", JSON.stringify(userlocal));

        // chuyển hướng về trang đăng nhập
        setTimeout(function(){
            window.location.href = "login.html";
        }, 1000)
    }
})