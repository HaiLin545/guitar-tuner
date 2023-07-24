export function drawBackground(canvas) {
    const ctx = canvas.getContext("2d");
    const h = canvas.height;
    const w = canvas.width;
    const setp = 24;
    const short = h * 0.6;
    const long = h * 0.4;
    let x = w / 2;
    let stepNum = 1;

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#7f9eb2";
    ctx.beginPath();
    ctx.moveTo(w / 2, h);
    ctx.lineTo(w / 2, 0);
    // right
    do {
        x += setp;
        ctx.moveTo(x, h);
        ctx.lineTo(x, stepNum % 5 == 0 ? long : short);
        stepNum++;
    } while (x < w);
    // left
    stepNum = 1;
    x = w / 2;
    do {
        x -= setp;
        ctx.moveTo(x, h);
        ctx.lineTo(x, stepNum % 5 == 0 ? long : short);
        stepNum++;
    } while (x > 0);

    ctx.stroke();
}
