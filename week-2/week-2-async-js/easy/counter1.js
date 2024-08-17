let counter = 0;

function increase_counter(interval){
    let myVar = setInterval(() => {
        counter++;
        console.log(counter);
        if (counter > 15) {
            clearInterval(myVar);
          }
    }, interval);
}

increase_counter(1000);