import accurateInterval from "accurate-interval";

export class Timer {
  constructor() {
    this.elapsed = 0;
  }

  onTick(callback) {
    this.tickCallback = callback;
  }

  onFinish(callback) {
    this.elapsed = 0;
    this.finishCallback = callback;
  }

  start(duration) {
    this.duration = Math.round(duration * 60) + 1;

    this.interval = accurateInterval(
      () => {
        this.elapsed += 1;
        this.tickCallback();

        if (this.elapsed === this.duration) {
          this.finishCallback();
          this.stop();
        }
      },
      1000,
      { immediate: true }
    );
  }

  stop() {
    this.interval.clear();
  }

  reset() {
    this.elapsed = 0;
  }

  getTime() {
    const seconds = this.duration - this.elapsed;

    const timerMinutes = Math.floor(seconds / 60);
    const timerSeconds = seconds % 60;

    return `${timerMinutes}:${
      timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds
    }`;
  }
}
