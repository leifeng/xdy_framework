function onSetContentHeight() {
    var $BODY = $('body');
    var $RIGHT_COL = $('.right_col');
    var $LEFT_COL = $('.left_col');
    var $SIDEBAR_FOOTER = $('.sidebar-footer');
    var $NAV_MENU = $('.nav_menu');
    var $FOOTER = $('footer');
    $RIGHT_COL.css('min-height', $(window).height());
    var bodyHeight = $BODY.height(), leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(), contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
    contentHeight -= $NAV_MENU.height() + $FOOTER.height();
    $RIGHT_COL.css('min-height', contentHeight);
}
function onHeaderDidMount() {
    var $BODY = $('body'), $MENU_TOGGLE = $('#menu_toggle'), $SIDEBAR_MENU = $('#sidebar-menu');
    $MENU_TOGGLE.on('click', function () {
        if ($BODY.hasClass('nav-md')) {
            $BODY.removeClass('nav-md').addClass('nav-sm');

            if ($SIDEBAR_MENU.find('li').hasClass('active')) {
                $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            }
        } else {
            $BODY.removeClass('nav-sm').addClass('nav-md');

            if ($SIDEBAR_MENU.find('li').hasClass('active-sm')) {
                $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }
        }
        onSetContentHeight();
    });
}
function onSideDidMount() {
    var $SIDEBAR_MENU = $('#sidebar');
    var $lis = $SIDEBAR_MENU.children('li');
    var $link = $lis.children('ul').find('a');
    $lis.children('a').on('click', function () {
        var $li = $(this).parent();
        if ($li.is('.active')) {
            $li.removeClass('active');
            $li.children('ul').slideUp(function () {
                onSetContentHeight();
            });
        } else {
            $lis.removeClass('active');
            $lis.children('ul').slideUp(function () {
                onSetContentHeight();
            });

            $li.addClass('active');
            $li.children('ul').slideDown(function () {
                onSetContentHeight();
            });
        }

    });
    $link.on('click', function () {
        $link.parent('li').removeClass('current-page');
        $(this).parent('li').addClass('current-page')
    })
    if ($.fn.mCustomScrollbar) {
        $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel: { preventDefault: true }
        });
    }
}


(function ($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartresize 
    jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');

$(window).smartresize(function(){
    onSetContentHeight();
});