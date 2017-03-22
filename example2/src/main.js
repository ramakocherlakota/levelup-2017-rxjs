const Rx = require(`rx-dom`);
const mouseDown$ = Rx.DOM.mousedown(document);
mouseDown$
    .map(event => {return {x : event.clientX, y : event.clientY}})
    .filter(e => e.x < 200)
    .subscribe(t => console.log(t));
