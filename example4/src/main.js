const Rx = require(`rx-dom`);
const mouseDownUL$ = Rx.DOM.mousedown(document.getElementById("upperleft"))
    .map(event => "upper left")
const mouseDownLL$ = Rx.DOM.mousedown(document.getElementById("lowerleft"))
    .map(event => "lower left")
const mouseDownUR$ = Rx.DOM.mousedown(document.getElementById("upperright"))
    .map(event => "upper right")
const mouseDownLR$ = Rx.DOM.mousedown(document.getElementById("lowerright"))
    .map(event => "lower right")

const greenClick$ = mouseDownUL$.merge(mouseDownLR$)
    .startWith("not clicked")
const redClick$ = mouseDownUR$.merge(mouseDownLL$)
    .startWith("not clicked")

const allClick$ = Rx.Observable.combineLatest(greenClick$, redClick$,
                                              function(g, r) {
                                                  return {green : g,
                                                          red : r}
                                              })

allClick$.subscribe(t => console.log(t))
