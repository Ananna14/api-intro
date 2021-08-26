function dataComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))
}
dataComment()

function displayComment(comments) {
    const id = document.getElementById('comment');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h5>New Name: ${comment.name}</h5>
        <p>New Email: ${comment.email}</p>
        `
        id.appendChild(div);

        console.log(comment);
    }
}