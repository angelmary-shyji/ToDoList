# To-Do List Application

This is a simple To-Do List web application that allows users to add, strike through, and delete tasks. The user interface includes an input field to enter tasks, a button to add tasks, and dynamically generated task items that can be marked as completed or deleted. The tasks are numbered sequentially and automatically renumbered when tasks are deleted.

## Features
- **Add Tasks**: Users can type a task into the input field and click the "+" button to add it to the list.
- **Mark Tasks as Complete**: Tasks can be clicked to toggle a strikethrough effect, indicating they are completed.
- **Delete Tasks**: Each task has a "Delete" button that removes the task from the list.
- **Auto Numbering**: Tasks are automatically numbered, and when a task is deleted, the remaining tasks are renumbered.

## Structure

### HTML (`index.html`)
- The HTML file creates the structure of the to-do list application. It includes:
  - An input field to enter new tasks.
  - A button to add tasks to the list.
  - A container (`toDoContainer`) to hold the dynamically generated tasks.

### JavaScript (`script.js`)
- **DOM Elements**: The script grabs the DOM elements such as the input field, add button, and to-do container to interact with them.
- **Add Task Functionality**: When the "Add" button is clicked, the script grabs the task input, validates it, and adds it to the list with a number prefix.
- **Strike Through Task**: Each task is clickable, and clicking it toggles a strikethrough style, marking it as completed.
- **Delete Task**: Each task has a delete button. Clicking it removes the task from the DOM, and the remaining tasks are renumbered accordingly.

### CSS (`style.css`)
- **Layout Styling**: The CSS ensures the layout is centered, with the to-do list and input fields aligned and properly spaced.
- **Task Styling**: The tasks are styled with a font size of 20px, and the delete button is designed with a red color and padding.
- **Flexbox for Task Containers**: The tasks are contained in flex containers, allowing the task text and delete button to be aligned side by side.

## How it Works
1. **Input Task**: The user types a task into the input field.
2. **Add Task**: When the user clicks the "+" button, a new task is added to the list. The task is prefixed with a number based on the current number of tasks in the list.
3. **Mark as Complete**: Clicking on a task will toggle a strikethrough style, indicating that the task is complete.
4. **Delete Task**: Clicking the "Delete" button removes the task from the list and updates the task numbers to maintain a continuous sequence.

## Code Explanation

### HTML
- `inputfield`: The input field where users enter their task.
- `addToDo`: The button that triggers the adding of the task to the list.
- `toDoContainer`: The container element where tasks are dynamically added.
- `script.js`: The JavaScript file that handles the task addition, deletion, and marking of tasks as complete.
  
### JavaScript
- The script listens for a click event on the add button. If the input is empty, an alert is shown; otherwise, a new task is created.
- When a task is clicked, the script toggles the `textDecoration` property of the task between 'none' and 'line-through'.
- The delete button removes the task from the list and updates the task numbers.
  
### CSS
- The `taskContainer` uses `flexbox` to align the task text and delete button. The task text has a `cursor: pointer` style to indicate it's clickable.
- The delete button is styled with a red color (`rgb(223, 23, 23)`) and a small font size.

## How to Use
1. Open the `index.html` file in your browser.
2. Enter a task in the input field and click the "+" button to add it to the list.
3. Click a task to mark it as completed (it will be struck through).
4. Click the "Delete" button next to any task to remove it from the list.

