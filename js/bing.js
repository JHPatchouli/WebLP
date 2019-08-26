var isMoving = false;
$(document).ready(function (e) {
    $(".bingitem").click(function () {
        if (isMoving == true)
            return;
        isMoving = true;
        var target = $(this);
        $(".item").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "375px" }, 300, function () { isMoving = false; });
        });
        $(".googleitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "375px" }, 300, function () { isMoving = false; });
        });
        $(".sogouitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "375px" }, 300, function () { isMoving = false; });
        });
    });
});