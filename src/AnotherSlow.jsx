
// waitingForSomething -> this component is slow to render

const waitingForSomething = (ms) => {
    const start = Date.now();
    let now = start;

    while(now - start < ms){
        now = Date.now();
    }
}

export default function AnotherSlow({children}) {
    waitingForSomething(1000);
    
    return <div>Another Slow : {children}</div>
}