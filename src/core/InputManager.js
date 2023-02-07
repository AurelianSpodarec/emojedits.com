import keys from '../config/Keys';

export default class InputManager {
    constructor(player) {
        this.keys = keys;
        this.pressedKeys = {};
 
        for (var k in keys) {
            this.pressedKeys[keys[k]] = false;
        }
 
        document.addEventListener("keydown", event => {
            event.preventDefault();
            this.pressedKeys[event.keyCode] = true;
        });  
 
        document.addEventListener("keyup", event => {
            this.pressedKeys[event.keyCode] = false;
        });  
 
    }

    keyDown(e) {
        this.pressedKeys[e.keyCode] = true;
    }
 
    keyUp(e) {
        this.pressedKeys[e.keyCode] = false;
    }

    isKeyDown(key) {
        return this.pressedKeys[key];
    }
    

}