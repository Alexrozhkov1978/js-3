(function() {
    let teslaX = {};
    teslaX.name = 'Tesla X';
    teslaX.color = 'red';
    teslaX.price = 100000;
    teslaX.beep = beep;
    teslaX.beep(teslaX);
    
    
    let teslaS = {};
    teslaS.name = 'Tesla S';
    teslaS.color = 'black';
    teslaS.price = 90000;
    teslaS.beep = beep;
    teslaS.beep(teslaS);
    
    
    function beep(){
        alert (this.name + '  beep-beep!');
    }
        
    let tesla3 = {
        name:  'Tesla 3',
        color: 'red',
        price: 100000,
        beep: beep,
    };
        
    tesla3.beep();
    
    function Car (name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
        return this;
    }
    
    Car.prototype.beep=beep;
    
    let teslaRoadster = new Car ('Tesla Roadster','black',200000)
    
    
    teslaRoadster.beep();
    
    class SuperCar { 
        constructor (name, color, price) {
            this.name = name;
            this.color = color;
            this.price = price;
        }
        beep(){
        alert (this.name + ' ' + this.color + ' beep-beep!');
        }
    }
    
    let ferari430 = new SuperCar ('Ferrary 430','red',300000);
    
    ferari430.beep();
    
    let farari430Black = Object.create(ferari430);
    farari430Black.color = 'black';
    farari430Black.beep();
    
    const carStr = `{
        "name": "Chevrolet Corvette",
        "color": "siver",
        "price": 90000
     }`
    
    let covette = JSON.parse(carStr); 
    covette.beep = beep;
    covette.beep();

    function counter() {
        let cntr=0;
        return function() {
            return ++cntr;
        }
    }
    let cntr = counter();
    alert (cntr());
    alert (cntr());
    
    //setInterval( () => console.log(cntr()), 1000);
    setInterval( () => document.body.innerHTML = (new Date().toLocaleTimeString ()), 1000);
    
})()



///let arrNum = [1,2,3]
///let newArr = new Map()
///for (let i=0;i<arrNum.length;i++) {
///newArr.set(2*arrNum[i]);
///}

/// let arrNum = [1,2,3];
/// let newArr = new Map()
/// for (let i=0;i<arrNum.length;i++) {
/// newArr.set(i, 2*arrNum[i]);}

const arrNum = [1,2,3];
const newArr = arrNum.map(x => x*2);







