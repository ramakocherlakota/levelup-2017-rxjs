const Rx = require(`rx-dom`);
const mouseDown$ = Rx.DOM.mousedown(document)

function increment(x) {
    return x + 1;
}

const clickCounter$ = mouseDown$.scan(increment, 0)

clickCounter$.subscribe(console.log)
