// function dataPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => displayPost(data))
// }
// dataPosts()

// function displayPost(posts) {
//     // console.log(posts)
//     const postContainer = document.getElementById('post');
//     for (const post of posts) {
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//         <h1> ${post.title} </h1>
//         <p> ${post.body}</p>
//         `;
//         postContainer.appendChild(div);
//         // console.log(post.title);
//     }
// }
// // end 

// function addPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'My new Post',
//             body: 'This is my posts',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// }


