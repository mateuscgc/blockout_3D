const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;

// Position keyboard Control
var dx = 0;
var dz = 0;
document.addEventListener('keydown', function(event) {

        event = event || window.event;

        var key = event.keyCode || event.which;

        if(key == LEFT_KEY) dx--;
        else if(key == RIGHT_KEY) dx++;
        else if(key == DOWN_KEY) dz++;
        else if(key == UP_KEY) dz--;

}, false);
