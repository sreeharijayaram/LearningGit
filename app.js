const n1 = {
    nam: 'sree'
}

function sayHi(){
    console.log(this.nam);
}


const hi = sayHi.bind(n1)
