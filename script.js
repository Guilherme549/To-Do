document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Por favor insira uma tarefa');
        return;
    }

    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskText} <button>Remove</button>`;

    newTask.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    newTask.querySelector('button').addEventListener('click', function(e) {
        e.stopPropagation();
        this.parentElement.remove();
    });

    taskList.appendChild(newTask);

    document.getElementById('new-task').value = '';
});
