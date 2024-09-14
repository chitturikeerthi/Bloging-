document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const allPostsContainer = document.getElementById('allPostsContainer');

    function savePosts(updatedPosts) {
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }

    function deletePost(index) {
        posts.splice(index, 1);
        savePosts(posts);
        renderPosts(); // Re-render the posts after deletion
    }

    function renderPosts() {
        allPostsContainer.innerHTML = ''; // Clear the container before rendering
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';

            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;

            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', function() {
                deletePost(index);
            });

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postContent);
            postDiv.appendChild(deleteButton);

            allPostsContainer.appendChild(postDiv);
        });
    }

    renderPosts();
});
