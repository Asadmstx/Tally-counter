let x = 0
$('.counter__btn').on('click', function() {
    if(x < 99999) {
        x++
        $('.num').html(x)
    }
})

$('.counter__reset').on('click', function() {
    x = 0
    $('.num').html(x)
})

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return `rgba( ${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)}, ${r().toFixed(1)})`;
    // return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

$('.counter__color').on('click', function() {
    let randomColor = random_rgba();
    $('.counter__btn').css('background', randomColor);
    $('.counter__body').css('border', `15px solid ${randomColor}`);
    $('.little-btn').css('background', randomColor);
})