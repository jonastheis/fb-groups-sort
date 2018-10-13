// ==UserScript==
// @name         Facebook groups post sorting & highlighting
// @namespace    https://jonastheis.de/
// @version      0.1
// @description  Sorts posts in a Facebook group descending by date posted and applies some visual filters on each post.
// @match        https://facebook.com/groups*
// @match        https://www.facebook.com/groups*
// @match        http://facebook.com/groups*
// @match        http://www.facebook.com/groups*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @require      http://johannburkard.de/resources/Johann/jquery.highlight-5.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('.highlight { background-color: yellow; } ._3b-9 { display: none;}');

    console.log('Starting groups sorting script...');

    var scrolls = 0;
    // use interval because of loading issues with Facebook when scrolling too fast
    var interval = setInterval(scroll, 3000);

    // ***** adjust here for highlighted words *****
    var words = ['tijdelijk', 'temporary'];
    // ***** adjust here for highlighted words *****
    
    function scroll() {
        $(document).scrollTop($(document).height());

        if (scrolls >= 3) {
            clearInterval(interval);

            // scroll back to top
            $(document).scrollTop(0);

            sortElements();
        }

        scrolls++;
        console.log('Scrolled ' + scrolls);
    }

    function sortElements() {
        var $wrapper = $('._5pcb');
        var $elements = $wrapper.find('.mbm');
        console.log($elements);

        // colorize background of elements
        $elements
            .css({
            "background-color": "#f2fff4"
        });

        // highlight words
        words.forEach(function(word) {
            $elements.highlight(word);
        });

        // sort by post time
        $elements.sort(function(a, b) {
            return $(b).find('._5ptz').data('utime') - $(a).find('._5ptz').data('utime');
        })
        .appendTo($wrapper);

        // click "See more" link
        $elements.each(function() {
            $(this).find('.see_more_link').click();
        });

        alert("Sorted " + $elements.length + " room listings" );
    }
})();