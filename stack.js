
const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        if (_items.get(this).length === 0)
            throw new Error("Stack is Empty!!");

        return _items.get(this).pop();

    }
    peek() {
        const items = _items.get(this);
        if (_items.get(this).length === 0)
            throw new Error('Stack is empty');

        return items[items.length - 1];
    }

    count() {
        return _items.get(this).length;
    }






}


