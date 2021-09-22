;$(function() {
    // disable copy paste:
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select','none')
            .on('selectstart dragstart', false);
    }

    // mouse click alert:
    $('body').mousedown(function(event) {

        switch (event.which)
        {
            case 1:
                $('.alert-txt').text('');
                break;
            // case 2:
            //    $('.alert-txt').text('Middle mouse button clicked!');
            //    break;
            case 3:
                $('.alert-txt').text('No copy paste!');
                break;
        }

        // disable browser right click menu:
        $(document).bind("contextmenu", function(e) {
            return false;
        });
    });

    // nav hover:
    $('nav a').hover(
        // cursor over
        function() {
            $(this).removeClass('green-shadow').css({
                'cursor':'pointer',
                'transform':'translateY(-2px)',
                'transition':'0.35s linear',
                'color':'lightgrey'
            });
        },
        // cursor leave
        function() {
            $(this).addClass('green-shadow').css({
                'cursor':'pointer',
                'transform':'translateY(0)',
                'transition':'0.35s linear',
                'color':'black'
            });
        }
    );
    
    // nav click
    $('nav a').click(function() {
        $(this).css({
            'transform':'translateY(0)',
            'transition':'100ms linear'
        });

        var chapterOne = $('#chap-1').offset().top,
            chapterTwo = $('#chap-2').offset().top,
            chapterThree = $('#chap-3').offset().top
        ;

        switch ($(this).attr('href')) {
            case '#chap-1':
                $('html, body').animate({
                    'scrollTop':chapterOne
                }, 600);
                break;
            case '#chap-2':
                $('html, body').animate({
                    'scrollTop':chapterTwo
                }, 600);
                break;
            case '#chap-3':
                $('html, body').animate({
                    'scrollTop':chapterThree
                }, 600);
                break;
        }
    });

//    $('.chap-1-link').find('a').click(function() {
//        var chapterOne_One = $(this).attr('href','#chap-1.1');
//    });
});