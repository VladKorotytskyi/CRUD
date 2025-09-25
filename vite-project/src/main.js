// GET
const getAllPosts = function () {
  fetch("http://localhost:3000/posts")
    .then((response) => {
      return response.json();
    })
    .then(console.log);
};
getAllPosts();
// POST
const createNewPost = function (newPost) {
  const options = {
    method: "POST",
    body: JSON.stringify(newPost),
  };

  fetch("http://localhost:3000/posts", options)
    .then((response) => response.json())
    .then(console.log);
};
createNewPost({
  title: "another title",
  views: 200,
});

// DELETE
const deletePost = function (id) {
  const options = {
    method: "DELETE",
  };
  fetch(`http://localhost:3000/posts/${id}`, options)
    .then((response) => response.json())
    .then(console.log);
};
// deletePost("1");

//PATCH

function changeTitle(id, newtitle) {
  const options = {
    method: "PATCH",
    body: JSON.stringify(newtitle),
  };
  return fetch(`http://localhost:3000/posts/${id}`, options).then((response) =>
    response.json()
  );
}
changeTitle("cd0f", { title: "New Title" });

//-------------------------------------------------

//GET COMMENTS
const getAllComments = function () {
  fetch("http://localhost:3000/comments")
    .then((response) => {
      return response.json();
    })
    .then(console.log);
};
getAllComments();
//POST COMMENTS
const createNewComment = function (newComment) {
  const options = {
    method: "POST",
    body: JSON.stringify(newComment),
  };

  fetch("http://localhost:3000/comments", options)
    .then((response) => response.json())
    .then(console.log);
};
createNewComment({
  text: "another text",
  postId: null,
});
//DELETE COMMENTS
const deleteComment = function (id) {
  const options = {
    method: "DELETE",
  };
  fetch(`http://localhost:3000/comments/${id}`, options)
    .then((response) => response.json())
    .then(console.log);
};
// deletePost("1");
//PATCH COMMENTS
function changeText(id, newText) {
  const options = {
    method: "PATCH",
    body: JSON.stringify(newText),
  };
  return fetch(`http://localhost:3000/comments/${id}`, options).then(
    (response) => response.json()
  );
}
changeText("1", { text: "new comment" });
