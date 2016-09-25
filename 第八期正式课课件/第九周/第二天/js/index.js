/*HEADER*/
~function () {
    var $menu = $('.menu'),
        $nav = $('.nav');
    $menu.singleTap(function () {
        if ($nav.hasClass('show')) {
            $nav.removeClass('show').addClass('hide');
            return;
        }
        $nav.removeClass('hide').addClass('show');
    });
}();