function photo() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(respose => respose.json())
        .then(data => imgAdd(data))
}
photo()

function imgAdd(imgs) {
    const photoId = document.getElementById('img');
    for (const img of imgs) {
        // console.log(img);
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `
        <h1>${img.title}</h1>
        <p>${img.url}</p>
        `
        photoId.appendChild(div);
    }
}