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
    this.duration = Math.round(duration * 60);

    this.interval = window.setInterval(() => {
      this.elapsed += 1;
      this.tickCallback();

      if (this.elapsed === this.duration) {
        this.finishCallback();
        this.stop();
      }
    }, 1000);
  }

  stop() {
    window.clearInterval(this.interval);
  }

  reset() {
    this.elapsed = 0;
    window.clearInterval(this.interval);
  }

  getTime() {
    const seconds = this.duration - this.elapsed;
    return `${Math.floor(seconds / 60)}:${this.padSeconds(seconds % 60)}`;
  }

  padSeconds(seconds) {
    return seconds < 10 ? `0${seconds}` : seconds;
  }
}
