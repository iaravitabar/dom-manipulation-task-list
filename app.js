let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const item = document.createElement("li");
  item.classList.add("task");
  item.dataset.taskId = task.id;

  const owner = document.createElement("p");
  owner.textContent = `Owner: ${task.owner}`;
  const name = document.createElement("h3");
  name.textContent = task.name;
  const description = document.createElement("p");
  description.textContent = task.description;

  const img = document.createElement("img");
  img.src = task.imgUrl;
  img.alt = task.name;


  item.appendChild(owner);
  item.appendChild(name);
  item.appendChild(description);
  item.appendChild(img);

  item.addEventListener('click', function() {
    deleteTaskHandler(item);
  });

  return item;
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  tasks.forEach((task)=> {
    const taskComponent = createTaskComponent(task);
    taskList.appendChild(taskComponent);
  });
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  const mensaje= `Valores del form:
    Id: ${newTask.id}
    Name: ${newTask.name}
    Owner: ${newTask.owner}
    Description: ${newTask.description}
    ImgUrl: ${newTask.imgUrl}`

    alert(mensaje);
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {
  const nameInput = document.getElementById('nameInput').value;
  const ownerInput = document.getElementById('ownerInput').value;
  const descriptionInput = document.getElementById('descriptionInput').value;
  const imgUrlInput = document.getElementById('imgUrlInput').value;

  const newTask = {
    id: currentIdNumber,
    owner: ownerInput,
    name: nameInput,
    description: descriptionInput,
    imgUrl: imgUrlInput,
  };
  tasks.push(newTask);
  currentIdNumber++;
  const taskComponent = createTaskComponent(newTask);
  document.getElementById('taskList').appendChild(taskComponent);

  addTaskAlert(newTask);
  document.getElementById('nameInput').value = '';
  document.getElementById('ownerInput').value = '';
  document.getElementById('descriptionInput').value = '';
  document.getElementById('imgUrlInput').value = '';

  document.querySelector('.main__form').addEventListener('submit', addTaskHandler);
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  const taskId = parseInt(taskElement.dataset.taskId,10);
  const taskIndex = tasks.findIndex((task)=> task.id=== taskId);
  if (taskIndex!== -1){
    tasks.splice(taskIndex, 1);
    taskElement.remove();
  }
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  const taskContainer = document.querySelector('#taskList'); //<ul id="taskList"></ul> en HTML
  if (taskContainer){
    taskContainer.innerHTML= '';
    redirectWhenNoTask();
  }
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  const taskContainer = document.querySelector('#taskList');
  if (taskContainer && taskContainer.children.length === 0){
    window.location.href = 'https://www.youtube.com';
  }
}
