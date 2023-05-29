let users = [];
if(JSON.parse(localStorage.getItem('users')) !== null){
    users = JSON.parse(localStorage.getItem('users'));
}

// Hàm đăng ký email và lưu vào localStorage
function registerEmail(event) {
    event.preventDefault(); // Ngăn chặn trang web tải lại khi nhấn nút đăng ký
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    if (email !== null && email !== "") {
      localStorage.setItem("registeredEmail", email);
      console.log(`Email đã được đăng ký: ${email}`);
      window.location.href = "./access/Sign/index2.html";
    } else {
      console.log("Bạn chưa nhập địa chỉ email!");
    }
  }
  



// Gắn sự kiện submit cho biểu mẫu
const registerForm= document.getElementById("register-form");
registerForm.addEventListener("submit", registerEmail);

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};