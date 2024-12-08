export default class Countdown {

  constructor(futereDate) {
    this.futereDate = futereDate;
  }

  get _futereDate() {
    return new Date(this._futereDate);
  }

  get _currentDate() {
    return new Date();
  }

  get _timeStampDiff() {
    return this._futereDate.getTime() - this._currentDate.getTime();
  }

  get _hours() {
    return new Date().getHours();
  }

  get _minutes() {
    return new Date().getMinutes();
  }

  get _seconds() {
    return new Date().getSeconds();
  }

}

