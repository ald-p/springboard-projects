const formEl = document.querySelector('#form');
const textInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');
let toDoArr = [];

const createToDoItemElement = (toDo, id) => {
  const div = document.createElement('div');
  div.classList.add('todo-item');
  div.id = id;

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

if (localStorage.getItem('toDoList')) {
  toDoArr = JSON.parse(localStorage.getItem('toDoList'));
  for (const toDo of toDoArr) {
    const toDoEl = createToDoItemElement(toDo.text, toDo.id);
    toDoList.appendChild(toDoEl);
    if (toDo.isCompleted) {
      toDoEl.classList.add('completed');
      toDoEl.firstElementChild.checked = true;
    }
  }
};

// add to-do
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputValue = textInput.value;
  const newToDoEl = createToDoItemElement(inputValue, Date.now());
  toDoList.appendChild(newToDoEl);

  toDoArr.push({
    id: newToDoEl.id, 
    isCompleted: false, 
    text: inputValue});
  localStorage.setItem('toDoList', JSON.stringify(toDoArr));

  textInput.value = '';
});

// complete to-do
toDoList.addEventListener('change', function(e) {
  const currentToDoItem = e.target.parentElement;
  currentToDoItem.classList.toggle('completed');

  const idx = toDoArr.findIndex( toDo => currentToDoItem.id === toDo.id);

  if (toDoArr[idx].isCompleted) {
    toDoArr[idx].isCompleted = false;
  } else {
    toDoArr[idx].isCompleted = true;
  }

  localStorage.setItem('toDoList', JSON.stringify(toDoArr));
});

// delete to-do
toDoList.addEventListener('click', function(e) {
  if (e.target.className === 'delete-btn') {
    const toDoItemEl = e.target.parentElement;
    toDoItemEl.remove();

    toDoArr = toDoArr.filter( toDo => toDoItemEl.id !== toDo.id);

    localStorage.setItem('toDoList', JSON.stringify(toDoArr));
  }
});