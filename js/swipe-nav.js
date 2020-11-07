var startX = null;
var deltaX = null;

document.querySelector('body').addEventListener('touchstart', function(e) {
    deltaX = e.targetTouches[0].pageX;

    this.addEventListener('touchmove', function(e) {
        // console.log(deltaX);

        deltaX = e.targetTouches[0].pageX - startX;

        if(Math.abs(deltaX)>=10){
            console.log('swiped');

            if(deltaX>0){
                console.log('right');
            }
            else{
                console.log('left');
            }
        }
        e.preventDefault();
        e.stopPropagation();
    },false);
    e.preventDefault();
    e.stopPropagation();
},false);
