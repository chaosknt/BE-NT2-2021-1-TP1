const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')

  let todos = [];

  let todoName = '';

  function addTodo() {
     todoName = prompt('Escriba el nombre de la tarea')
     
     if(todoName !==  null && todoName.trim().length > 0)
     {
       
      let checkitem = makeCheckItem(todoName);
      let listItem = makeListItem(todoName);

      listItem.prepend(checkitem);   
      addToList(listItem);

      updateItemCounts();

     }else{
       //if the user dont write any text the todo item dont create and show the following alert
       alert('Ingrese un texto')
     }
     
  }

  //Adds a todo item to the unordered list
  function addToList(listItem){
    list.appendChild(listItem);
  }

  //#region ipdate items check/uncheck counts on top page
  function updateItemCounts(){
    updateItemCount()
    updateUncheckedCount()
  }
  
  function updateUncheckedCount(){

    let items = document.getElementsByClassName(classNames.TODO_CHECKBOX);
    let count = 0;
    
    for(let i = 0; i < items.length; i++){
      if(items[i].checked){
        count++
      }
    }
    uncheckedCountSpan.innerText = count;
  }
  function updateItemCount(){

    let items = document.getElementsByClassName(classNames.TODO_CHECKBOX);
    let count = 0;
    
    for(let i = 0; i < items.length; i++){
      if(!items[i].checked){
        count++
      }
    }
    itemCountSpan.innerText = count;

  }
  
  //#endregion

  //#region Make CheckItem  
  function makeCheckItem(idItem){
    
    var erInput = document.createElement('INPUT');
    erInput.setAttribute("type","checkbox");
    erInput.setAttribute("value","valor_checkbox");
    erInput.setAttribute("id", idItem );
    erInput.className += classNames.TODO_CHECKBOX;    
    erInput.setAttribute("onclick", "updateItemCounts()");
      
    erInput.onchange = () => {alert("cambio!")} // Otra forma de agregar funciones a los elementos 
      
    return erInput    
  }  
  //#endregion

  //#region  Make list item

  function makeListItem(todoText){

    let li = document.createElement("li");
    li.innerText = todoText;
    return li;   
  }

  //#endregion

 
