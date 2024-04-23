$(document).ready(function() {
    $('#checkoutForm').validate({
      rules: {
        kh_ten: {
          required: true
        },
        kh_diachi: {
          required: true
        },
        kh_dienthoai: {
          required: true,
          number: true
        },
        kh_email: {
          required: true,
          email: true
        },
        httt_ma: {
          required: true
        }
      },
      messages: {
        kh_ten: 'Vui lòng nhập họ tên',
        kh_diachi: 'Vui lòng nhập địa chỉ',
        kh_dienthoai: 'Vui lòng nhập số điện thoại hợp lệ',
        kh_email: 'Vui lòng nhập email hợp lệ',
        httt_ma: 'Vui lòng chọn hình thức thanh toán'
      },
      submitHandler: function(form) {
        // Xử lý thanh toán thành công ở đây (ví dụ: hiển thị thông báo)
        alert('Thanh toán thành công!');
        // Sau khi xử lý thành công, bạn có thể chuyển hướng người dùng đến trang khác hoặc thực hiện hành động khác tùy theo yêu cầu của bạn.
    },
});
});
    
  