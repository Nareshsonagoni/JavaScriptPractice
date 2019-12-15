function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'running', {
        get: () => running
    });

    Object.defineProperty(this, 'startTime', {
        get: () => startTime
    });

    Object.defineProperty(this, 'endTime', {
        get: () => endTime
    });

    Object.defineProperty(this, 'duration', {
        get: () => duration
    });
}


StopWatch.prototype.start = function () {
    if (this.running)
        throw new Error("Already started!");

    this.running = true;

    this.startTime = new Date();
    console.log("Started");
}

StopWatch.prototype.stop = function () {
    if (this.running)
        throw new Error("Not Started yet!");

    this.running = false;

    this.endTime = new Date();
    console.log("Stopped");

    const seconds = (this.endTime - this.startTime) / 1000;
    this.duration += seconds;
}

StopWatch.prototype.reset = () => {
    this.startTime = null;
    this.endTime = null;
    duration = 0;
}

let st = new StopWatch();

st.start();
st.stop();
