const Rx = require(`rx-dom`);
const mouseDownUL$ = Rx.DOM.mousedown(document.getElementById("upperleft"))
      .map(event => "upper left")
const mouseDownLR$ = Rx.DOM.mousedown(document.getElementById("lowerright"))
      .map(event => "lower right")
const greenClick$ = mouseDownUL$.merge(mouseDownLR$)
greenClick$.subscribe(t => console.log(t));
