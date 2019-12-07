function playVideo(a, b) {
    return this, a, b;
}

let val = playVideo.call({ name: 'Naresh' }, 1, 2);
console.log(val);
playVideo.apply({ name: 'kuppu' }, [3, 4]);
playVideo.bind({ name: "isha" }, 5, 6)();
playVideo.call({ name: 'Tarun' }, 9, 10);
// play(7, 9);




