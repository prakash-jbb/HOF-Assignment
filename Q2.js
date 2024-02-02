function Randomnumbergenerator() {
 let random = Math.floor(Math.random()*100)
 
 console.log(`Generate Random Number in 3 seconds`);
 let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;
       
        if (countdown === 0) {
            clearInterval(countdownInterval);
            console.log(`Random number is: ${random}`);
        }

},1000)}

Randomnumbergenerator()

