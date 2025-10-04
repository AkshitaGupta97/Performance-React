
// waitingForSomething -> this component is slow to render

const waitingForSomething = (ms) => {
    const start = Date.now();
    let now = start;

    while(now - start < ms){
        now = Date.now();
    }
}

export default function SlowComponent({time, custom}) {
    waitingForSomething(time[0]);
    if(custom) custom();
    return <div>Slow Component</div>
}

/* before memoizing
export default function SlowComponent() {
    waitingForSomething(1000);
    return <div>Slow Component</div>
}
 */