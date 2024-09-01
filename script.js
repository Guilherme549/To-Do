document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Por favor insira uma tarefa');
        return;
    }

    const taskList = document.getElementById('task-list');

    
    const newTask = document.createElement('li');

   
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    
    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(removeButton);

    
    checkbox.addEventListener('click', function() {
        taskLabel.classList.toggle('completed');
    });

   
    removeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        this.parentElement.remove();
    });

    
    taskList.appendChild(newTask);

    
    document.getElementById('new-task').value = '';
});
