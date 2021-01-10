const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray = [];
const colors = [
    'white',
    'rbga(255,255,255,0.3)',
    'rbga(173,216,230,0.8)',
    'rbga(211,211,211,0.8)'
];

// average of animation
const maxSize = 40;
const minSize = 0;

// mouse position with eventlistener
let mouse = {
    x: null,
    y: null
    
};

window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y
        console.log(mouse);
    }
)


