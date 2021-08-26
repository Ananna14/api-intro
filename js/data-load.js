function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => loadData(data))
}

function loadData(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}