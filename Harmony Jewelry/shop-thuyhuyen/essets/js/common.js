window.addEventListener("load", function () {/*Khi trang được tải hoàn toàn, thực hiện các hành động sau đây
*/
    const loginForm = document.querySelector(".login-form");/*Lấy phần tử HTML có class là "login-form" và gán vào biến loginForm. */
    const showPasswordIcon =
        loginForm && loginForm.querySelector(".show-password");/*Lấy phần tử con có class là "show-password" bên trong loginForm (nếu tồn tại) và gán vào biến showPasswordIcon. */
    const inputPassword =
        loginForm && loginForm.querySelector('input[type="password"');/*Lấy phần tử input có type là "password" bên trong loginForm (nếu tồn tại) và gán vào biến inputPassword. */
    showPasswordIcon.addEventListener("click", function () {
        const inputPasswordType = inputPassword.getAttribute("type");/*Lấy giá trị của thuộc tính "type" của phần tử input. */
        inputPasswordType === "password"
            ? inputPassword.setAttribute("type", "text")
            : inputPassword.setAttribute("type", "password");/*Kiểm tra nếu giá trị của inputPasswordType là "password", thì đặt thuộc tính "type" của phần tử input thành "text", ngược lại đặt thành "password". Điều này giúp hiển thị hoặc ẩn mật khẩu khi người dùng nhấp vào biểu tượng "show password".*/
    });
});