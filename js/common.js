$(document).ready(function () {
    $(".humburger-menu").click(function () {
        $(".header .nav").toggleClass("open-menu");
        $(".humburger-menu span").toggleClass("close-btn");
    })
})