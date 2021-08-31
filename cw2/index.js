window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".stop").addEventListener("click", stop);
    document.querySelector(".start").addEventListener("click", start); 
    document.querySelector(".reset").addEventListener("click", reset);

    ss = document.querySelector(".ss")
    mm = document.querySelector(".mm")
    hh = document.querySelector(".hh")
});

let hh,ss,mm,counter = false,intervalHandler;

let sec = 0;
let min = 0;
let hour = 0;


function start() {
    counter = true;
    if(counter){
        document.querySelector(".start").removeEventListener("click", start); 
    }
    intervalHandler = setInterval(function(){
        sec++;

        if(sec >= 60){
            sec = 0;
            min++;
        }else{
            if(sec < 10){
                ss.innerHTML = `0${sec}`;
            }else{
                ss.innerHTML = sec;
            }
        }

        if(min >= 60){
            min = 0;
            hour++;
        }else{
            if(min < 10){
                mm.innerHTML = `0${min}`;
            }else{
                mm.innerHTML = min;
            }
        }

        if(hour >= 24){
            hour = 0;
        }else{
            if(hour < 10){
                hh.innerHTML = `0${hour}`;
            }else{
                hh.innerHTML = hour;
            }
        }

    },1000)

}
function stop() { 
    clearInterval(intervalHandler);
    document.querySelector(".start").addEventListener("click", start);
    counter = false;
}
function reset() {
    clearInterval(intervalHandler);
    document.querySelector(".start").addEventListener("click", start);
    counter = false;
    sec = 0;
    min = 0;
    hour = 0;
    ss.innerHTML = `0${sec}`;
    mm.innerHTML = `0${min}`;
    hh.innerHTML = `0${hour}`;
}