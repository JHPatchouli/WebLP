var isMoving = false;
$(document).ready(function (e) {
    $(".sogouitem").click(function () {
        if (isMoving == true)
            return;
        isMoving = true;
        var target = $(this);
        $(".bingitem").find("div").animate({ height: "0px" }, 300, function () {
        });
        $(".item").find("div").animate({ height: "0px" }, 300, function () {
        });
        $(".googleitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "525px" }, 300, function () { isMoving = false; });
        });
    });
});