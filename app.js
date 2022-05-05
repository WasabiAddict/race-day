let raceNumber = Math.floor(Math.random()* 1000);

let early = true;

let runnerAge = 8;

if (early === true && runnerAge >=18){
    raceNumber += 1000;
};

if (early && runnerAge >18){ 
    console.log(`race will begin at 9:30, your number is: ${raceNumber}`);
} else if (!early && age >18){
    console.log(`Race will begin at 11, your number is: ${raceNumber}`)
} else if ( runnerAge < 18){
    console.log(`race will begin at 12:30 pm, your number is: ${raceNumber}`)
}else {
    console.log('please see the registration desk')
};