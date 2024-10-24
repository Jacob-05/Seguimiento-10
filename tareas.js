document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName) {
        addTask(taskName, 'pending');
        taskInput.value = ''; // Limpiar el input
    }
});

function addTask(name, column) {
    const taskContainer = document.querySelector(`#${column} .task-container`);
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = name;

    task.addEventListener('click', function() {
        if (column === 'pending') {
            moveTask(name, 'doing');
        } else if (column === 'doing') {
            moveTask(name, 'completed');
        } else {
            removeTask(task);
        }
    });

    taskContainer.appendChild(task);
}

function moveTask(name, newColumn) {
    removeTask(name);
    addTask(name, newColumn);
}

function removeTask(taskName) {
    const taskElements = document.querySelectorAll('.task');
    taskElements.forEach(task => {
        if (task.textContent === taskName) {
            task.remove();
        }
    });
}