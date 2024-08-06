document.addEventListener('DOMContentLoaded', function() {
    fetch('posts/posts.json')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.date}</p>
                    <p>${post.content}</p>
                `;
                content.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});
