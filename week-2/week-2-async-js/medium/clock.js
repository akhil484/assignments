
function increase_counter() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
    
  };

setInterval(increase_counter, 1000);