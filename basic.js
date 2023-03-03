var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var topic = 'Learning TypeScript';
// Primitive types: number, string, boolean, null, undefined
var age;
age = 30;
var userName;
userName = "John";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Music', 'Cooking'];
var marks;
marks = [1, 2, 3];
var person = {
    name: 'Max',
    age: 23,
    hobbies: ['Sports']
};
var course = 'Learning TypeScript';
course = 123;
course = true;
// Functions 
function add(x, y) {
    return x + y;
}
add(1, 2);
// add(1, '2');
function printValueInConsole(value) {
    console.log(value);
}
printValueInConsole('Hello World!');
printValueInConsole(1);
printValueInConsole(person);
// Generics
function insertAtBegining(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoNumberArray = [1, 2, 3];
var numberArray = insertAtBegining(demoNumberArray, 0); // [0, 1, 2, 3]
var stringArray = insertAtBegining(['a', 'b', 'c'], 'd'); // ['d', 'a', 'b', 'c']
var booleanArray = insertAtBegining([true, true], false); // false, true, true
function saveMyTodo1(object) {
    // //   SAVE to rest-api
    // var xmlhttp = new XMLHttpRequest();
    // // 
}
var object = {
    taskName: 'Learn Typescript',
    status: false // status: boolean
};
saveMyTodo1(object);
// Class
var MyTodo = /** @class */ (function () {
    function MyTodo(taskName, status) {
        this.taskName = taskName;
        this.status = status;
    }
    return MyTodo;
}());
