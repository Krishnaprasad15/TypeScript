"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World!";
// console.log(message)
// VARIABLE DECLARATIONS :- LET AND CONST
var num = 20;
var title = "Krishna";
// console.log(num,title)
// VARIABLE TYPES :- BOOLEAN, STRINGS, NUMBERS
var n = 10;
var b = false;
var s = "kittu";
var sentence = "I am ".concat(s, "\nBeginner in Typescript");
// console.log(sentence)
// NULL AND UNDEFINED
var nn = null;
var uu = undefined;
// ARRAY OF VALUES USING ARRAY TYPES
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple type for diff type values in array
var person1 = ['Krishna', 10];
// ENUM TYPE
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
var c = color.green;
// console.log(c)
// ANY type: third party values/ User inputs /random values
var randVal = 10;
randVal = false;
randVal = 'Krishna';
// UNKNOWN TYPE(type casting) same as any type
var rand = 10;
// (rand as string).toUpperCase() //Type cast
// TYPE INFERENCE
var x = 10;
// UNION TYPE
var multitype;
multitype = 10;
multitype = false;
// FUNCTIONS IN TYPESCRIPT
// optional parameter(?) and default parameter(=)
var add = function (num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    if (num2)
        return num1 + num2;
    else
        return num1;
};
// let res:number=add(1,2)
var res = add(1);
console.log(res);
// function fullname(person: {fname:string,lname:string}){
function fullname(person) {
    console.log("".concat(person.fname, " ").concat(person.lname));
}
var p = {
    fname: 'Krishna',
    lname: 'Prasad'
};
// fullname(p)
// CLASS IN TYPESCRIPT
// ACCESS MODIFIERS : PUBLIC, PRIVATE, PROTECTED.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome ".concat(this.empName));
    };
    return Employee;
}());
var emp1 = new Employee('Krishna');
// console.log(emp1.empName)
// emp1.greet()
// INHERITENCE IN TYPESCRIPT
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegatework = function () {
        console.log('Manger delegating task');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Kittu');
// console.log(m1.empName)
// m1.greet()
// m1.delegatework()
