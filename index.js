let TodoList = [
// {
//     item:"milk",
//     DueDate:"4/3/24"

// }
];
// callingFunction();

if(localStorage.getItem('todos')){
   TodoList = JSON.parse(localStorage.getItem('todos'))
   callingFunction();
}

function Additem(){
    
    let input = document.querySelector('#display');
    let Date = document.querySelector('#Date');
    let inputItem = input.value;
    let inputDate = Date.value;

    TodoList.push({item: inputItem, DueDate:inputDate});
    input.value ='';
    Date.value = '';
    console.log(TodoList);

    localStorage.setItem('todos',JSON.stringify(TodoList));

    callingFunction();
    
    
}

function deleteItem(index){
    TodoList.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(TodoList));
    callingFunction();

}
function editItem(index){
    let newitem = prompt('edit todo', TodoList[index].item);
    TodoList[index].item = newitem.trim();
    localStorage.setItem('todos',JSON.stringify(TodoList));
    callingFunction();
}


function callingFunction(){
    let displayItem = document.querySelector('.todo-item');
    let newHtMl = ''; 
    for (let index = 0; index < TodoList.length; index++) {
        
        let {item, DueDate} = TodoList[index];
        newHtMl += `

        <span>${item} </span>
        <span>${DueDate} </span>
        <button onClick = "
        deleteItem(${index})" class = "btn-Dlt">
        Delete</button>
        <button onClick = "editItem(${index})"   class = "btn-Edit">
        Edit</button>
        ` 
    }
    displayItem.innerHTML = newHtMl;

}
