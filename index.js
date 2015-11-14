/*
            _                   ____          _
           / \   _ __  _   _   / ___|___   __| | ___
          / _ \ | '_ \| | | | | |   / _ \ / _` |/ _ \
         / ___ \| | | | |_| | | |__| (_) | (_| |  __/
        /_/   \_\_| |_|\__, |  \____\___/ \__,_|\___|
                       |___/

        state-singleton
 */

var Observable = require('javascript-observable'),
    obj = require('javascript-object-paraphernalia'),
    State = (function () {
        function State() {
            Observable.call(this);
            this._entities = {};
        }

        State.prototype = Object.create(Observable.prototype);
        State.prototype.constructor = State;

        State.prototype.get = function (key) {
            return this._entities[key];
        }

        State.prototype.set = function (key, value) {
            var oldValue = this._entities[key];
            if (obj.is(this._entities[key], 'Object')) {
                oldValue = obj.clone(this._entities[key]);
            }
             
            this._entities[key] = value;
            this.publish(key, this._entities[key], oldValue);
        };

        State.prototype.on = Observable.prototype.subscribe;
        State.prototype.trigger = Observable.prototype.publish;

        return new State();
    })();

module.exports = State;
