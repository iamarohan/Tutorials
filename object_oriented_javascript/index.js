function Stopwatch() {
  let status = "stop";
  let clock = 0;
  let myvar = "";
  let incrementSeconds = function () {
    clock++;
  };

  this.start = function () {
    if (status == "start") throw new Error("Already started");
    status = "start";
    myvar = setInterval(incrementSeconds, 1000);
  };

  this.stop = function () {
    if (status == "stop") throw new Error("Stopwatch stopped");
    status = "stop";
    clearInterval(myvar);
  };

  this.reset = function () {
    clock = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return clock;
    },
  });
}
