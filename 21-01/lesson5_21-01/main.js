const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButtons = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        divButtons.setAttribute('class', 'buttons_div')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        text.innerText = input.value.trim()
        deleteButton.innerText = 'delete'
        editButton.innerText = 'edit'

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            let editText = prompt(`Edit: ${text.innerText}`).trim()
            editText === '' ? text.innerText : text.innerText = editText
        }

        divButtons.append(deleteButton, editButton)
        div.append(text, divButtons)
        todoList.append(div)
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)





// createButton.onclick = () => {
//     if (input.value.trim() === '') return false
//     const div = document.createElement('div')
//     const text = document.createElement('h3')
//
//     div.setAttribute('class', 'block_text')
//     text.setAttribute('class','text')
//
//     text.innerText = input.value.trim()
//     div.append(text)
//     todoList.append(div)
//
//     input.value = ''
// }