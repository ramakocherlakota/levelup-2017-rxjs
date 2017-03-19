import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
const h = CycleDOM.h;

function main(sources) {
    return {
        DOM : sources.DOM
            .select('#color-choice')
            .events('change')
            .map(ev => ev.target.value)
            .startWith('red')
            .map(colorvalue =>
                 h('div',
                   [h('select',
                      {id : 'color-choice'},
                      [h('option', 'red'),
                       h('option', 'green'),
                       h('option', 'blue')]),
                    h('text', colorvalue)]))
    }
}

const drivers = {
    DOM : CycleDOM.makeDOMDriver('#main')
}

Cycle.run(main, drivers);
