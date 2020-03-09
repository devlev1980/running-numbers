const time = 5000; //milliseconds
let step = 1; //increment by step

function outNumbersByTime(number,element) {
    let outputElement = document.querySelector('#'+ element);
    let startNumber = 0;
    // step = 0 ? step = 1 : step === step; // if step is 0 (not divide by 0);
    let t = Math.round(time/(number/step));

    let internal = setInterval(()=>{
        startNumber  = startNumber + step;
        if(startNumber === number){
           clearInterval(internal)
        }
        outputElement.innerText = 'My followers:' + ' '+startNumber
    },t)

}

outNumbersByTime(1000,'output');
