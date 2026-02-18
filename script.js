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
