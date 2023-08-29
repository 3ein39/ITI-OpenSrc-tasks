let posts = document.getElementById('posts');

let addPostButton = document.getElementById('addPostButton');
// console.log(addPostButton);

addPostButton.addEventListener('click', function () {
  let post = document.createElement('div');
    post.classList.add('tweet');
    let tweetPost = document.createElement('div');
    tweetPost.classList.add('tweet-post');

    let tweetPostText = document.createElement('p');
    tweetPostText.innerText = document.getElementById('post').value;

    let commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Comment';

    let commentButton = document.createElement('button');
    commentButton.value = 'add_comment';
    commentButton.innerText = 'Add Comment';

    tweetPost.appendChild(tweetPostText);
    tweetPost.appendChild(commentInput);
    tweetPost.appendChild(commentButton);

    post.appendChild(tweetPost);
    posts.appendChild(post);
})