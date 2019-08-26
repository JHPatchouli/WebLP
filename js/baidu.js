 var isMoving = false;
        $(document).ready(function () {
            $(".item").click(function () {
                if (isMoving == true)
                    return;
                isMoving = true;
                var target = $(this);
                $(".googleitem").find("div").animate({ height: "0px" }, 300, function () {
                    $(target).find("div").animate({ height: "315px" }, 300, function () { isMoving = false; });
                });
                $(".bingitem").find("div").animate({ height: "0px" }, 300, function () {
                    $(target).find("div").animate({ height: "315px" }, 300, function () { isMoving = false; });
                });
            });
        });