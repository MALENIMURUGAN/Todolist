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

```
## OUTPUT


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
