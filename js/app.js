function playHadouken() {
    $('#hadouken-sound')[0] = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    });
    $('.ryu').mousedown(function(){
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();   
    });
    $('.ryu').mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        playHadouken();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    });
    $('body').bind('keypress' ,function(e) {
 		var code = e.keyCode || e.which;
 		if(code == 13) { 
    		$('.ryu-ready').hide()
    		$('.ryu-still').hide()
    		$('.ryu-cool').show()
    	}
    });
    $('body').keyup(function() {
    	$('.ryu-cool').hide()
    	$('.ryu-stilly').toggle()
    	$('.ryu-ready').show()
    })
});

