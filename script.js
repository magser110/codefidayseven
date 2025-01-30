document.querySelector('.js-toggle-theme').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.js-toggle-them');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.innerHTML = 'enable dark mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.innerHTML = 'enable light mode';
    }
}



const todoList = ["eat", "take shower", "study"];

//add new task
todoList.push("pay bill");
console.log(todoList);

//remove first task
todoList.shift();
console.log(todoList);

