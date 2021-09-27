
$('.container-item-tag').click(function () {
    $('.container-item-tag').removeClass('active')
    $('.container-menu').removeClass('active')
    $(this).addClass('active')
    $('.container-menu').eq([$(this).index()]-1).addClass('active')
    // console.log($(this).index(), $('.container-menu')[$(this).index()].addClass('active'))

})

function showContainer(index){
    $('.container-menu').removeClass('active')
    switch(index){
        case 1:{
            
        }
    }
}
