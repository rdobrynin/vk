(function() {
    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    function init(container, width, height, fillColor) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function(x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();
        };
        ctx.clearTo = function(fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");
// CLEAR CANVAS
        $('.btn-trash').click(function () {
            ctx.clearRect(0, 0, 700, 500);
        });

//        CHANGE COLOR AND BRUSH DIAMETER

        var fillColor = '#FF0000';
        var radius = 8; // or whatever

        $('.color-form-3').click(function () {
                fillColor = '#ff0000';
        });

        $('.color-form-2').click(function () {
                fillColor = '#ffffff';
        });

        $('.color-form-1').click(function () {
                fillColor = '#000000';
        });
        $('.color-form-4').click(function () {
            fillColor = '#FF6000';
        });

        $('.color-form-5').click(function () {
            fillColor = '#FFBA00';
        });

        $('.color-form-6').click(function () {
            fillColor = '#75E200';
        });

        $('.color-form-7').click(function () {
            fillColor = '#0028A9';
        });

        $('.color-form-8').click(function () {
            fillColor = '#B400FF';
        });

//        BRUSH RADIUS
        $('.brush-dim-1').click(function () {
            radius = 21;
        });

        $('.brush-dim-2').click(function () {
            radius = 15;
        });

        $('.brush-dim-3').click(function () {
            radius = 13;
        });

        $('.brush-dim-4').click(function () {
            radius = 11;
        });

        $('.brush-dim-5').click(function () {
            radius = 8;
        });

        $('.brush-dim-6').click(function () {
            radius = 5;
        });

        $('.btn-pencil').click(function () {
            radius = 1;
            $('canvas').css( 'cursor', 'url(../images/cursor_pencil.png), auto' );
        });

        $('.btn-painter').click(function () {
            radius = 8;
            $('canvas').css( 'cursor', 'url(../images/cursor_paint.png), auto' );
        });


        // bind mouse events
        canvas.node.onmousemove = function(e) {
            if (!canvas.isDrawing) {
                return;
            }
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;


            ctx.fillCircle(x, y, radius, fillColor);
        };
        canvas.node.onmousedown = function(e) {
            canvas.isDrawing = true;
        };
        canvas.node.onmouseup = function(e) {
            canvas.isDrawing = false;
        };
    }

    var container = document.getElementById('canvas');
    init(container, 560, 336, 'transparent');


})();

