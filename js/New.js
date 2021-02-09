"use strict";

const buildings = {
   wood : false,
   brik : 100,
   sayHello : function() {
       console.log("Hello");
   }

};

const house = {
    wood: true
};

house.__proto__ = buildings;

console.log(house.brik);