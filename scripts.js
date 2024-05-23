document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const categorySelect = document.getElementById('categorySelect');
    const workList = document.getElementById('workList');
    const personalList = document.getElementById('personalList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        return li;
    }

    function addTask(taskText, category) {
        const taskElement = createTaskElement(taskText);
        if (category === 'work') {
            workList.appendChild(taskElement);
        } else if (category === 'personal') {
            personalList.appendChild(taskElement);
        }
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodoText = todoInput.value.trim();
        const category = categorySelect.value;
        if (newTodoText !== "") {
            addTask(newTodoText, category);
            todoInput.value = '';
        }
    });

    document.addEventListener('change', function(event) {
        const target = event.target;
        if (target.type === 'checkbox') {
            const taskElement = target.parentElement;
            taskElement.classList.toggle('completed', target.checked);
        }
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('delete-btn')) {
            const taskElement = target.parentElement;
            deleteTask(taskElement);
        }
    });
});
