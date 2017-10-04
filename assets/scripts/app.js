$(document).ready(function () {
    $('.scroll-nav').click(function (e) {
        const linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
        e.preventDefault()
    })
})