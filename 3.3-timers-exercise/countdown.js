/* timers exercise */

function countdown(num) {

  let intervalId;

  intervalId = setInterval(function() {
    num--;
    if (num == 0) {
      clearInterval(intervalId);
      console.log("DONE!");
    } else {
      console.log(num);
    }
  }, 1000);
};

countdown(4);