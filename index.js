// function is a first class citizien
// we can use function to store in a variable
// const calc=()=>{
//     return 4*5;
// }
// a variable that hold that functions

// 1_1
// let aNumber=calc();
// console.log(aNumber);

// 1_2
// callback function is a function that is called inside another function 
// const printCalc=(calc)=> console.log(calc());
// printCalc(calc);


// ch2  creational patterns
// - With all these terms you'll hear throughout the course, you might be wondering about what is a creational pattern in JavaScript? Simply put, they are patterns that control the creation process of an object. Although, in this course, we focus on JavaScript patterns, it is also true for any languages that use this pattern. In this chapter, we'll explore patterns that involve the creation of classes, the constructor pattern, the singleton, the factory, and the abstract factory patterns and how they allow us to efficiently create new objects in JavaScript.

// 2_1 prototype, blueprint, Class design pattern
// let instance=null;
// class Car{
//     constructor(doors, engine, color){
//         this.doors=doors;
//             this.engine=engine;
//             this.color=color;
//     }           
// }
// const civic=new Car(4, 'v3', 'grey');
// console.log(civic);



// 2_2 inhertance // Constructor pattern
//  So when you want to create multiple sub-categories of a class, the constructor pattern is a great way to do it.
// class Car{
//     constructor(doors, engine, color){
//             this.doors=doors;
//             this.engine=engine;
//             this.color=color; 
//     }
// }
// class SUV extends Car{
//     constructor(doors, engine, color){
//        super(doors,engine,color);
//        this.wheels=4
//     }
// }
// const civic=new Car(4, 'v3', 'grey');
// const Cx5=new SUV(4, 'v3', 'grey');
// console.log(civic);
// console.log(Cx5);




//2-3 Singleton pattern  that it's simply preventing our class from creating more than one instance of the blue print , we allow only one instance of the class to be created.
// let instance=null;
// class Car{
//     constructor(doors, engine, color){
//         if(! instance){
//             this.doors=doors;
//             this.engine=engine;
//             this.color=color;
//             instance=this;
//         }else{
//             return instance
//         }
//     }
// }
// const civic=new Car(4, 'v3', 'grey');
// const x=new Car(4, 'v8', 'red');


//2-4  The factory pattern is great when you want to create, say, a mechanism to create other objects. Good example would be a factory for creating cars.

// it's a design pattern that creates a lot of the objects according to the parameter that you'll send to it 
class Car{
    constructor(doors, engine, color){
            this.doors=doors;
            this.engine=engine;
            this.color=color;
 
    }
}
class Carfactory{
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'v3', 'grey');
            case 'honda':
                return new Car(4, 'v8', 'red');

        }
    } 
}

// const factory= new Carfactory ();
// const civic=factory.createCar('civic');
// const honda=factory.createCar('honda');

// console.log(civic);
// console.log(honda);


// 3-5  Abstract factory pattern ==here you abstract the factories and are able to create multiple factories,
class SUV{
    constructor(doors, engine, color){
            this.doors=doors;
            this.engine=engine;
            this.color=color;
 
    }
}
class SUVfactory{
    createCar(type){
        switch(type){
            case 'cx5':
                return new Car(4, 'v3', 'cx5');
            case 'santavu':
                return new Car(4, 'v8', 'santavu');

        }
    } 
}

const carFactory= new Carfactory ();
const suvFactory= new SUVfactory ();


const autoManuFacturer=(type,model)=>{
    switch(type){
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);

    }
}

const cx5=autoManuFacturer('suv','cx5');
console.log(cx5);
