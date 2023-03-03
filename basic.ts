var topic = 'Learning TypeScript';

// Primitive types: number, string, boolean, null, undefined

let age: number;
age = 30;

let userName: string;
userName = "John";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Music', 'Cooking']

let marks: number[];
marks = [1, 2, 3];

type Person = {
    name: string;
    age: number;
    hobbies: string[]
}


let person: Person = {
    name: 'Max',
    age: 23,
    hobbies: ['Sports']
};

let course: string | number | boolean = 'Learning TypeScript';
course = 123;
course = true;

// Functions 

function add(x: number, y: number): number {
    return x + y;
}

add(1, 2);
// add(1, '2');

function printValueInConsole(value: any) {
    console.log(value);
}

printValueInConsole('Hello World!');
printValueInConsole(1);
printValueInConsole(person);

// Generics

function insertAtBegining<A>(array: A[], value: A) {
    const newArray = [value, ...array];
    return newArray;
}

const demoNumberArray = [1, 2, 3];
const numberArray = insertAtBegining(demoNumberArray, 0)    // [0, 1, 2, 3]
const stringArray = insertAtBegining<string>(['a', 'b', 'c'], 'd')  // ['d', 'a', 'b', 'c']
const booleanArray = insertAtBegining<boolean>([true, true], false)  // false, true, true



function saveMyTodo1(object: Todo) {
    // //   SAVE to rest-api

    // var xmlhttp = new XMLHttpRequest();
    // // 

}

var object = {
    taskName: 'Learn Typescript',
    status: false // status: boolean
};

saveMyTodo1(object)



// Interface:

interface ITodo {
    taskName: string;
    status: boolean;
}

class Todo {
    taskName: string;
    status: boolean;

    constructor(taskName: string, status: boolean = false) {
        this.taskName = taskName;
        this.status = status;
    }

    getTask() {
        return new Todo(this.taskName, this.status);
    }
}

// Class
class MyTodo {
    todoList: Todo[] = []

    constructor(public taskName: string, public status: boolean) {
        this.todoList.push(new Todo('Learning TypeScript'));
        // this.todoList.push({ taskName: 'Learning React Js', status: true });
        // this.todoList.push({ taskName: 'Learning Express JS', status: false });
    }

    getCompletedTask(): ITodo[] {
        const compeletedTodoList = this.todoList.filter(todo => {
            return todo.status == true;
        });

        return compeletedTodoList;
    }
}