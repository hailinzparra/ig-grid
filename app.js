var create_canvas = function (w, h) {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    return { canvas: canvas, ctx: ctx };
};
var download_canvas = function (filename, canvas) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL();
    link.click();
};
var split_3_by_width = function (name, img) {
    var size = img.width / 3;
    var _a = create_canvas(size, size), canvas = _a.canvas, ctx = _a.ctx;
    for (var i = 0; i < 3; i++) {
        ctx.drawImage(img, i * size, 0, size, size, 0, 0, size, size);
        download_canvas("".concat(i, "_").concat(name, ".png"), canvas);
    }
};
var split_image = function (name, src) {
    var img = new Image();
    img.onload = function () {
        split_3_by_width(name, img);
    };
    img.src = src;
};
/**
 * Split image with custom name
 */
var sin = function (src) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    var img = new Image();
    img.onload = function () {
        var size = img.width / 3;
        var _a = create_canvas(size, size), canvas = _a.canvas, ctx = _a.ctx;
        for (var i = 0; i < 3; i++) {
            ctx.drawImage(img, i * size, 0, size, size, 0, 0, size, size);
            download_canvas("".concat(name[i], ".png"), canvas);
        }
    };
    img.src = src;
};
