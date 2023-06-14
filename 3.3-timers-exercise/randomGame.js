function randomGame() {
  let intervalId;
  let count = 0;

  function checkRandomNum() {
    const num = Math.random();
    count++;
    console.log(num, count);

    if (num > 0.75) {
      clearInterval(intervalId);
      console.log(`It took ${count} tries to find a number greater than 0.75.`);
    }
  }

  intervalId = setInterval(checkRandomNum, 1000);
}

randomGame();