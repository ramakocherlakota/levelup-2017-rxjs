const Rx = require(`rx-dom`);
const mouseDown$ = Rx.DOM.mousedown(document);
mouseDown$.subscribe(t => console.log(t));
