const Rx = require(`rx-dom`);
const text$ = Rx.DOM.keyup(document.getElementById("text"))
    .map(e => e.target.value)
    .startWith("")

const click$ = Rx.DOM.click(document.getElementById("click"))
const logText$ = Rx.Observable
    .combineLatest(click$, text$, 
                   function(c, t){
                       return {click : c, msg : t}
                   })
    .distinctUntilChanged(e => e.click.timeStamp)
    .map(e => e.msg)

logText$.subscribe(t => console.log(t))
