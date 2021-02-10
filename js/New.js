"use strict";

const buildings = {
   wood : false,
   brik : 100,
   sayHello : function() {
       console.log("Hello");
   }

};

const house = Object.create(buildings);



house.sayHello();
console.log(house.brik);