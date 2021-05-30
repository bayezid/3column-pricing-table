$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
});
function updateContainer() {
    var $containerHeight = $(window).width();
    if ($containerHeight <= 991) {
        $('#menu-button').click(function() {
            $('.main-menu').toggleClass('show-menu');
        });
    } else {
        $('.main-menu').removeClass('show-menu');
    }
}
