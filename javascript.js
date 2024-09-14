
document.getElementById('addPostButton').addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    if (title && content) {
        savePost(title, content);
        document.getElementById('titleInput').value = '';
        document.getElementById('contentInput').value = '';
        alert('Post added successfully!');
    } else {
        alert('Please enter both a title and content for your blog post.');
    }
});

function savePost(title, content) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
}
