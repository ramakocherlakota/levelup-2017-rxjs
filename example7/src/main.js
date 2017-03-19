import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
import storageDriver from '@cycle/storage';
const h = CycleDOM.h;

function main(sources) {
    const storedColor$ = sources.storage.local.getItem("color")

    return {
        DOM : sources.storage.local
            .getItem("color")
            .map(colorvalue =>
                 h('div',
                   [h('select',
                      {id : 'color-choice'},
                      [h('option',
                         {selected : 'red' === colorvalue},
                         'red'),
                       h('option',
                         {selected : 'green' === colorvalue},
                         'green'),
                       h('option',
                         {selected : 'blue' === colorvalue},
                         'blue')]),
                    h('text', colorvalue)])),
        storage : sources.DOM
            .select('#color-choice')
            .events('change')
            .map(ev => ev.target.value)
            .map(c => {return {key : "color", value : c}})
    }
}

const drivers = {
    DOM : CycleDOM.makeDOMDriver('#main'),
    storage : storageDriver
}

Cycle.run(main, drivers);
