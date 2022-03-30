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
// class SUV{
//     constructor(doors, engine, color){
//             this.doors=doors;
//             this.engine=engine;
//             this.color=color;
 
//     }
// }
// class SUVfactory{
//     createCar(type){
//         switch(type){
//             case 'cx5':
//                 return new Car(4, 'v3', 'cx5');
//             case 'santavu':
//                 return new Car(4, 'v8', 'santavu');

//         }
//     } 
// }

// const carFactory= new Carfactory ();
// const suvFactory= new SUVfactory ();


// const autoManuFacturer=(type,model)=>{
//     switch(type){
//         case 'car':
//             return carFactory.createCar(model);
//         case 'suv':
//             return suvFactory.createCar(model);

//     }
// }

// const cx5=autoManuFacturer('suv','cx5');
// console.log(cx5);


// 4 
// What are structural patterns? if the creational patterns are focused on the creation of new code, the structural pattern are focused on how to properly organize your code. 
// we'll explore the module pattern, mixins, the facade, flyweight, and decorator patterns. Then we'll spend some time on the MVC, MVP, and MVVM patterns. These are about how you organize the structure of the larger application. So without further ado, let's get started.

//4_1  Module pattern   Whenever you're encapsulating a block of code into a singular function or a pure function, as it is sometimes referred to, you're creating a module. The idea behind using modules is to organize your code in pure functions. So if you have your code to debug, it is much easier to find where the error is. We often use modules too, with the key word import or export. 

//4-2 Mixins pattern
// Mixins are a great way to mix functions and instances of classes after they have been created. In other words you could use mixins to add interesting functions to the car class we created earlier. 

// 4_3 Facade pattern
// What is a facade? It is basically the pattern of hiding complexity away by creating a facade for the complex code. So if you are thinking, wait, what? That's absolutely normal. If you're a React developer, or building components, you've been using facades every day. When you're building your component in any framework, you code the complexity of this component into a module, or file, and then leverage a simple line to render this component into your code. Well, this is what the facade pattern


// 4_4
// Flyweight pattern  The flyweight pattern is a method to minimize recreating the same items twice, and therefore minimize the memory impact in our systems. 
// your browsers uses the flyweight pattern to save images in memory so they don't load twice.   The flyweight pattern uses a similar approach to the singleton. 

// 4_5
// - The decorator pattern is very similar to mixins, where we decorate code with classes or code that came from another area. There is actual syntax in the most recent versions of JavaScript and has been used for a while in TypeScript and is heavily used in Angular code. So the purpose of a decorator pattern, like a mixin, is to to take, for example, a class and extended it with other code. 
// typescripeline.org/docs 

// 4_6 MVC
//  models, views, and controllers. The model is where your data resides, where you define your schemas and the models for your data. The views is where you have your views, or in most cases, the pure HTML of you application, where the visuals are. And finally, the controllers are where you have your logic of your application, the functions that makes your application run. 


// 4_7 MVP
// pattern is the Model-View-Presenter pattern, which is loosely based on MVC, and almost the same. Looking at both will help define the major differences in between the two, but they offer similar approaches, but architectured differently. In an MVC, or Model-View-Controller pattern, we have our application organized in models, views, and controllers. Typically the organization will have views, pull data from controllers or models directly, and if there are any other logic or functions needed for the view, the controllers will supply them. So in other words, their views have access to both the models and controllers. Where MVP differs is the view doesn't have to access the model. It has to get it from the presenter and the presenter serves as the logic, and supplier of data. In this pattern, the view passes through the presenter to get the data through functions, and the presenter pulls from the model. It is the major difference. The MVP pattern is seen in several frameworks, such as backbone, but it is quite popular in Android development.


// 4_8
// Model-View-ViewModel (MVVM) pattern
// - The model view view model pattern is similar than the other two we just explored, and is different only in implementation again. It is also sometimes referred to as MVVC, or model view view controller. But in both cases, it serves the same purpose. The first view is your view which doesn't have any data or logic. It is simply a dumb component, or component without any logic or data. Then you have the second view, model, which holds the logic in a state of the data, and this view model connects to a model. If you would like to see examples of this MVVM pattern, simply develop an architecture applications with React and Angler, and you will see this MVVM approach in action. For example, in React, your application is architectured in stateless components, which are views. Stateful components which hold data and logic, therefore the view model, and then finally the model, is where React typically connects to a back end to process data, where your models are defined.





// deep copy vs shallow copy
searchsecondLevel = {
  "EnName": "jasmin",
  "AvailabilityStatusId": 0,
  "paging": {
    "pageNumber": 0,
    "pageSize": 10,
    "sortingExpression": "",
    "sortingDirection": 1
  }
};
/* const cloneFood = Object.assign({}, searchsecondLevel);
searchsecondLevel.EnName="Ahmed";
searchsecondLevel.paging.pageNumber=6;
searchsecondLevel.paging.pageSize=100;
 */
const cloneFood = JSON.parse(JSON.stringify(searchsecondLevel));
searchsecondLevel.EnName="Ahmed";
searchsecondLevel.paging.pageNumber=6;
searchsecondLevel.paging.pageSize=100;


console.log(cloneFood)
