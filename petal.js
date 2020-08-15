// SVG Path - Scalable Vector Graphics
// DOM element, drawing and filling pixels
// Canvas is like photoship, SVG is like illustrator

// <//extracomment//path d = "...." />
// Commands you can use
// Move to - Mx,y, need to start with M
// Line to - Lx,y straight line to the point
// Curve to - Cpx1,py1 px2,py2 x2,y2 (endpoint)
// Ex M0,0 C20,20 80,20 100,0 -- anchor points to curve at
//   Start, Curve point, Curve point, end point

// Petal could have two different curves

petalPath = 'M0,0 C-10,-10 -10,-40 0,-50 C10,-40, 10,-10 0,0';
petalSize = 50;
// translate it down
//html`<svg><path transform="translate(50,50)" d="${petalPath}"></svg>`

// d3 scales translates one into another