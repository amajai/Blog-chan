// Assigning variables
var postsDiv = document.getElementById("posts");
var button = document.getElementById("btn");
var title = document.getElementById("blog-title");
var content = document.getElementById("blog-content");

//Default example text
title.value = "TECH OF THE FUTURE";
content.value = "When we think about 2050 it seems like it is ages from now and we imagine a completely different world, but in reality, it is just 30 years from now and we can already know what will be possible to have by that time. We have a lot of environmental, social problems and let’s see how technology may solve them by 2050. Today’s article is about tech of the future! ";

function mybtn() {

  var newPost = document.createElement("div");
  var postTitle = document.createElement("h2");
  var postContent = document.createElement("p");

  postTitle.innerHTML = title.value;
  postContent.innerHTML = content.value;

  newPost.setAttribute("class", "card");

  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);

  postsDiv.prepend(newPost);

  title.value = "";
  content.value = "";

}