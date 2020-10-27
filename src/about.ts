const about = document.createElement('div');

// noImplicitAny
function noImplicitAnyTestFunc(arg: any) {
    console.log(arg);
}

function click(this: {a: number}) {
    this.a = 5
}

class Test {
    click(this: Test) {
        if (this.a === null)
    }
}