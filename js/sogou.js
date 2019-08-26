var isMoving = false;
$(document).ready(function (e) {
    $(".sogouitem").click(function () {
        if (isMoving == true)
            return;
        isMoving = true;
        var target = $(this);
        $(".sogouitem").find("div").animate({ height: "0px" }, 300, function () {
            $(target).find("div").animate({ height: "555px" }, 300, function () { isMoving = false; });
        });
    });
});