
// function play() {
//     $(document).ready(function() {
//                 var widgetIframe = document.getElementById('sc-widget'),
//                 widget = SC.Widget(widgetIframe);

//                 widget.bind(SC.Widget.Events.READY, function() {
//                 console.log('ready');
//                 widget.toggle()

//                 var playButton = document.getElementById('i.play_button');
//                 if (playButton.hasClass('fa-play-circle')) {
//                     playButton.removeClass('fa-play-circle');
//                     playButton.addClass('fa-pause');
//                 }
//                 else {
//                     playButton.removeClass('fa-pause');
//                     playButton.addClass('fa-play-circle');
//                 }

//             });
//         });
//     }

//     document.getElementById('play_button').onclick = play;

$('.play-button-link').click(function() {
    var playButton = $('.play-button');
    if (playButton.hasClass('fa-play-circle')) {
      console.log('Playing music');
      playButton.removeClass('fa-play-circle');
      playButton.addClass('fa-pause');
    } else {
      console.log('Stopping music');
      playButton.removeClass('fa-pause');
      playButton.addClass('fa-play-circle');
    }
});
