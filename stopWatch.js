

function StopWatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stop Watch is Alreasdy running');

        running = true;

        startTime = new Date();
        console.log('Started');
    }

    this.stop = function () {
        if (!running)
            throw new Error("Stop Watch is not started!");

        running = false;

        endTime = new Date();
        console.log('Stopped');

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: () => duration
    });
}

const sw = new StopWatch();

sw.start();
sw.stop();
console.log(sw.duration);