# Ex03 To-Do List using JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```
index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pinterest · Task Mood</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>
<body>

<div class="pinterest-board">

  <div class="header-pin">
    <h1>Good Morning, Maleni ✨</h1>
    <div class="badge-pin">
      <i class="fa-regular fa-star"></i> 
      <span id="taskCount">0</span> tasks this month 🎉
    </div>
  </div>

  <div class="search-pin">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" placeholder="Search a task..." id="searchInput">
  </div>

  <div class="filter-pills">
    <span class="pill active" data-filter="all">All</span>
    <span class="pill" data-filter="todo">To-Do</span>
    <span class="pill" data-filter="done">Done</span>
  </div>

  <div class="task-list" id="taskList"></div>

  <button class="add-task-btn" id="openModal">
    <i class="fa-solid fa-plus"></i>
  </button>

  <!-- Dark Mode Toggle Bottom -->
  <div class="bottom-toggle">
    <label class="switch">
      <input type="checkbox" id="darkToggle">
      <span class="slider"></span>
    </label>
  </div>

</div>

<!-- ADD TASK MODAL -->
<div class="modal" id="taskModal">
  <div class="modal-content">
    <h3>Add Task</h3>
    <input type="text" id="taskTitle" placeholder="Task title">
    <input type="datetime-local" id="taskTime">
    <button id="saveTask">Save</button>
  </div>
</div>

<!-- Notification -->
<div class="notification" id="notification">
  <p id="notifyText"></p>
  <div class="notify-actions">
    <button id="stopBtn">Stop</button>
    <button id="snoozeBtn">Snooze</button>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
```
```
script.js
const taskList = document.getElementById("taskList");
const openModal = document.getElementById("openModal");
const modal = document.getElementById("taskModal");
const saveTask = document.getElementById("saveTask");
const taskTitle = document.getElementById("taskTitle");
const taskTime = document.getElementById("taskTime");
const searchInput = document.getElementById("searchInput");
const pills = document.querySelectorAll(".pill");
const darkToggle = document.getElementById("darkToggle");
const taskCount = document.getElementById("taskCount");

const notification = document.getElementById("notification");
const notifyText = document.getElementById("notifyText");
const stopBtn = document.getElementById("stopBtn");
const snoozeBtn = document.getElementById("snoozeBtn");

let tasks = [];
let currentFilter = "all";

openModal.onclick = () => modal.style.display="flex";

saveTask.onclick = ()=>{
  if(!taskTitle.value) return;

  const task = {
    id:Date.now(),
    title:taskTitle.value,
    time:taskTime.value,
    done:false
  };

  tasks.push(task);
  render();
  modal.style.display="none";
  scheduleAlarm(task);
};

function render(){
  taskList.innerHTML="";

  let filtered = tasks.filter(task=>{
    if(currentFilter==="done") return task.done;
    if(currentFilter==="todo") return !task.done;
    return true;
  });

  filtered.forEach(task=>{
    const div = document.createElement("div");
    div.className="task";
    if(task.done) div.classList.add("done");

    div.draggable=true;

    div.innerHTML=`
      <div>
        <strong>${task.title}</strong><br>
        <small>${formatTime(task.time)}</small>
      </div>
      <input type="checkbox" ${task.done?"checked":""}>
    `;

    div.querySelector("input").onchange=()=>{
      task.done=!task.done;
      render();
    };

    taskList.appendChild(div);
  });

  taskCount.innerText = tasks.length;
}

function formatTime(time){
  if(!time) return "";
  const d = new Date(time);
  return d.toLocaleString();
}

pills.forEach(pill=>{
  pill.onclick=()=>{
    document.querySelector(".pill.active").classList.remove("active");
    pill.classList.add("active");
    currentFilter = pill.dataset.filter;
    render();
  };
});

searchInput.oninput=()=>{
  const val = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".task");
  cards.forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(val) ? "flex":"none";
  });
};

darkToggle.onchange=()=>{
  document.body.classList.toggle("dark");
};

function scheduleAlarm(task){
  if(!task.time) return;

  const diff = new Date(task.time) - Date.now();
  if(diff>0){
    setTimeout(()=> showNotification(task), diff);
  }
}

function showNotification(task){
  notifyText.innerText = `Reminder: ${task.title}`;
  notification.style.display="block";

  stopBtn.onclick=()=>{
    notification.style.display="none";
  };

  snoozeBtn.onclick=()=>{
    notification.style.display="none";
    setTimeout(()=> showNotification(task), 180000);
  };
}

render();
```
```

```

## OUTPUT


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
