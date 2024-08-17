let counter = 0;

function increase_counter() {
  setTimeout(function () {
    counter++;
    console.log(counter);
    increase_counter();
  }, 1000);
}

increase_counter();