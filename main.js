class DigitalClock{
    constructor(element){
        this.element = element; 
       // console.log(this.element);
    }
    start() {
        setInterval(()=>{
        this.update();
        } ,500);
    }
    update(){
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minutes.toString().padStart(2,"0");
        const timeFormatted =`${parts.hour}:${minuteFormatted}`;
        const amPM =parts.isAm ? "AM":"PM"
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPM;

        

    }
    getTimeParts(){
        const now = new Date();
        return {
            hour: now.getHours()% 12 || 12,
            minutes: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}
const clockElement = document.querySelector(".clock");
const clockObject = new  DigitalClock(clockElement)
clockObject.start();
//console.log(clockObject.getTimeParts());