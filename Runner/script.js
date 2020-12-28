const runner = {
  $$runnerId: null,

  $$tasks: [],

  setSpeed: function (speed, cb) {
      this.stop();
      this.start(speed, cb);
  },
  add: function (task) {
      this.$$tasks.push(task);
  },
  start: function (speed, cb) {
      var _this = this;
      this.$$runnerId = setTimeout(function callback() {
          _this.$$tasks.forEach(function (task) {
            cb(task);
          })
          _this.$$runnerId = setTimeout(callback, speed);
      }, speed);
  },
  stop: function () {
      clearTimeout(this.$$runnerId);
  }
};

runner.add('hello');
runner.add('world');
runner.setSpeed(2000, (task) => console.log(task));