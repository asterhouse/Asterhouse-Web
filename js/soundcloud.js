

function play() {
	$(document).ready(function() {
                var widgetIframe = document.getElementById('sc-widget'),
                widget = SC.Widget(widgetIframe);

                widget.bind(SC.Widget.Events.READY, function() {
                console.log('ready');
                widget.play();
                });
                // $('playButton').click(function() {
                    widget.play();

                // });
            });
}