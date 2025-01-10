// Select elements from the DOM
const inputField = document.getElementById('inputfield');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');

// Event listener for the add button
addToDoButton.addEventListener('click', () => {
    const taskText = inputField.value.trim(); // Get the value and trim extra spaces

    if (taskText === '') {
        alert('Please enter a task.'); // Alert if input is empty
        return;
    }

    // Create a new div to hold the task and delete button
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');

    // Create a new paragraph element for the task with numbering
    const taskNumber = toDoContainer.childElementCount + 1; // Get the task number
    const task = document.createElement('p');
    task.classList.add('paragraphStyling');
    task.textContent = `${taskNumber}. ${taskText}`;

    // Add a click event listener to strike through the task
    task.addEventListener('click', () => {
        task.style.textDecoration = task.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');

    // Add an event listener to the delete button to remove the task
    deleteButton.addEventListener('click', () => {
        toDoContainer.removeChild(taskContainer);
        updateTaskNumbers(); // Update numbering after deletion
    });

    // Append the task and delete button to the task container
    taskContainer.appendChild(task);
    taskContainer.appendChild(deleteButton);

    // Append the task container to the to-do container
    toDoContainer.appendChild(taskContainer);

    // Clear the input field
    inputField.value = '';
});

// Function to update task numbers after deletion
function updateTaskNumbers() {
    const tasks = toDoContainer.getElementsByClassName('paragraphStyling');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].textContent = `${i + 1}. ${tasks[i].textContent.split('. ')[1]}`;
    }
}
