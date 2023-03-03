function add(x, y) {
    return x + y;
}

add(1, 1) // 2
add(1, "1")


function saveMyTodo(object) {
    //   SAVE to rest-api

    var xmlhttp = new XMLHttpRequest();
    // 

}

var object = {
    taskName: 'Learn Typescript',
    status: 'Not completed' // status: boolean
};
saveMyTodo(object);

//

<input type="text" id="inputText"></input>
<div id="inputText1"></div>

var inputTextContol = document.getElementById('inputText');
inputTextContol.value = 'Please enter text';

var inputTextContol = document.getElementById('inputText1');
inputTextContol.innerHTML = "Please enter text";
