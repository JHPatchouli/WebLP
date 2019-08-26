var isMoving = false;
$(document).ready(function (e) {
    $(".googleitem").click(function () {
        if (isMoving == true)
            return;
        isMoving = true;
        var target = $(this);
        $(".item").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "270px" }, 300, function () { isMoving = false; });
        });
        $(".bingitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "270px" }, 300, function () { isMoving = false; });
        });
        $(".sogouitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "270px" }, 300, function () { isMoving = false; });
        });
    });
});