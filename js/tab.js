$(document).ready(function () {

    $(".top-tab-ul li a").click(function () {
        $(".top-tab-ul li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-val").hide();
        $path = $(this).attr("href");
        $($path).show();

        return false;
    });

    $(".news-tab li a").click(function () {
        $(".news-tab li a").removeClass("active");
        $(this).addClass("active");
        $(".news-tab-txt").hide();
        $myPath = $(this).attr("href");
        $($myPath).show();
        console.log($myPath);

        return false;
    });

});