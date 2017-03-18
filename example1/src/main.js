const Rx = require(`rx-dom`);
const mouseDown$ = Rx.DOM.mousedown(document);
mouseDown$.subscribe(console.log);
