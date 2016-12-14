'use strict';

var App = {

    height: 0,
    weight: 0,

    selectors: {
        form: 'input-form',
        height: 'height',
        weight: 'weight',
        block: 'result-block',
        index: 'result-index',
        table: 'result-table'
    },

    init: function () {
        this.handleSubmit();
    },

    handleSubmit: function () {
        var form = document.getElementById(this.selectors.form),
            self = this;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            self.height = parseInt(document.getElementById(self.selectors.height).value) / 100;
            self.weight = parseInt(document.getElementById(self.selectors.weight).value);

            self.renderResult();
        });
    },

    renderResult: function () {
        var block = document.getElementById(this.selectors.block),
            index = document.getElementById(this.selectors.index),
            table = document.getElementById(this.selectors.table),
            indexVal = this.calcIMT();

        block.style.display = 'block';
        index.innerHTML = indexVal;

        for (var i = 1; i < table.rows.length; ++i) {
            let min = table.rows[i].dataset.min,
                max = table.rows[i].dataset.max;

            table.rows[i].className = '';

            if (min && indexVal < min) continue;
            if (max && indexVal > max) continue;

            table.rows[i].className = 'selected';
        }

    },

    calcIMT: function () {
        return Number((this.weight / Math.pow(this.height, 2)).toFixed(2));
    }

}