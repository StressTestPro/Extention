class MyExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'myextension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'say hello',
                    arguments: {}
                }
            ]
        };
    }

    sayHello() {
        alert('Hello from my extension!');
    }
}

Scratch.extensions.register(new MyExtension());
