let isOpenMenuButtonRotated = false;

$('.btn-open-menu').click(function () {
    $('.mobile-menu-container').stop().slideToggle();
    let roatation = isOpenMenuButtonRotated ? 0 : 180;
    isOpenMenuButtonRotated = !isOpenMenuButtonRotated;
    $('.btn-open-menu').stop().animate({transform: 'rotateX(' + roatation + 'deg)'}, 300);
});