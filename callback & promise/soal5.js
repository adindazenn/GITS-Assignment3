/*Buatlah dua fungsi, fetchPosts dan fetchComments.Fungsi fetchPosts akan mengambil data posts dari 
https://jsonplaceholder.typicode.com/posts danfetchComments akan mengambil data comments dari 
https://jsonplaceholder.typicode.com/comments.Lakukan chaining promise untuk mengambil data posts, 
kemudian comments, dan cetak jumlah masing-masing kekonsol.*/

function fetchPosts(){
    return new Promise((resolve,reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => resolve(posts))
            .catch(error => reject(error));
    })
}

function fetchComments(){
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => resolve(comments))
            .catch(error => reject(error));
    })
}

fetchPosts()
    .then(posts => {
        console.log(`Jumlah post : ${posts.length}`);
        return fetchComments();
    })
    .then(comments => {
        console.log(`Jumlah comment : ${comments.length}`);
    })
    .catch(error => console.error(error));