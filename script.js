
document.querySelectorAll('.container-item-tag').forEach(element => {
    element.onclick = function () {
        // element.addClass('active')
    }
});
$('.container-item-tag').click(function () {
    $('.container-item-tag').removeClass('active')
    $(this).addClass('active')
})