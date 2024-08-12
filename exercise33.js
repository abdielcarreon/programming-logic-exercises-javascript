// TIME REAL CLOCK

/* function clock() {
    
    let date =  new Date();
    let seconds = date.getSeconds(); 
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let result = '';
    //console.log(date.getDay());
    //console.log(date.getMonth());
    //console.log(date.getFullYear());


    for(i = 0; i <= seconds; i++) {

        result = `It's clock ${hours}hrs - ${minutes} minutes and ${seconds} seconds`;
        
        if(seconds === 0) {
            result = `It's clock ${hours}hrs - ${minutes} minutes and 00 seconds`;
        }
    }

    return result; 

}

function executioner() {
    setInterval(() => {
        console.log(clock());
    }, 1000);
}

executioner(); */

class Clock {

    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }    

    updating(seconds) {
        this.seconds += seconds;

        //Updated seconds
        if(this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        //Updated minutes
        if(this.minutes >= 60) {
            this.hours ++;
            this.minutes = 0
        }
        //Updated hours
        if(this.hours >= 24) {
            this.hours = 0;
        }
    }

    showing() {
        this.updating(1); //Sum of seconds in the actual hour
        console.log(`${this.hours}hrs - ${this.minutes}mins - ${this.seconds}sec`)
    }

    startClock() {
        setInterval(() => {
            this.showing();
        }, 1000);
    }

}


let start = new Clock();
//start.startClock();