window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").style.padding = "10px 0"; /* Thay đổi padding cho header khi cuộn trang */
  } else {
    document.getElementById("myHeader").style.padding = "20px 0"; /* Padding ban đầu của header */
  }
}
