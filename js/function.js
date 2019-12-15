var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todo')) || []
function addTodo(){

    todos.push(inputElement.value)
    inputElement.value = ''
    render()
    saveToStorage()
}
function removeTodo(pos){
    todos.splice(pos, 1)
    
    render()
    saveToStorage()
}
function saveToStorage(){
    localStorage.setItem('list_todo', JSON.stringify(todos))
}
function render(){
    listElement.innerHTML = '' //define como vazio a ul antes de renderizar
    for(i in todos){
        todoElement = document.createElement('li')
        node = document.createTextNode(todos[i])
        todoElement.appendChild(node)
        todoElement.setAttribute('class', 'todo')

        linkElement = document.createElement('a')
        linkText = document.createTextNode('excluir')
        linkElement.appendChild(linkText)
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('class', 'links')
    
        linkElement.setAttribute('onclick', 'removeTodo('+i+')')
        
        listElement.appendChild(todoElement)
        todoElement.appendChild(linkElement)
    }
}

buttonElement.onclick = addTodo
render()