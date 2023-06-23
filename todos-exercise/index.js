const formEl = document.querySelector('#form');
const textInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');

const createToDoItemElement = (toDo) => {
  const div = document.createElement('div');
  div.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('checkbox');
  div.appendChild(checkbox);

  const toDoText = document.createElement('span');
  toDoText.classList.add('todo-text');
  toDoText.innerText = toDo;
  div.appendChild(toDoText);

  const deleteIcon = document.createElement('button');
  deleteIcon.innerText = 'X';
  deleteIcon.classList.add('delete-btn');
  div.appendChild(deleteIcon);

  return div;
}

// add to-do
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputValue = textInput.value;
  const newToDoEl = createToDoItemElement(inputValue);
  toDoList.appendChild(newToDoEl);
  textInput.value = '';
});
