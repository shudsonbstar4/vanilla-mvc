blog.view.listPosts = {
	setupUI: function(){
		var row = {},
			tableBodyElm,
			i,
			postsLength,
			currentPost,
			actionsCell,
			colLength = document.querySelectorAll("table#posts>thead>tr>th").length;

		Post.loadAll().then(function(response){
			posts = JSON.parse(response);
			Post.instances = posts;
			blog.view.listPosts.buildTable();
		}, function(error){
			console.log("Error ", error);
		});

	},
	buildTable: function(){
		var deleteBtns;

		postsLength = Post.instances.length;
		i = 0;
		tableBodyElm = document.querySelector("table#posts>tbody");

		if(postsLength > 0){
			for(i; i < postsLength; i++){
				currentPost = Post.instances[i];

				row = tableBodyElm.insertRow();
				row.insertCell(-1).innerHTML = "<input type='checkbox' class='selectPost'>";
				row.insertCell(-1).textContent = currentPost.title;
				row.insertCell(-1).textContent = currentPost.dateCreated;
				row.insertCell(-1).textContent = currentPost.blog.title;
				row.insertCell(-1).textContent = currentPost.blog.user.userName;
				actionsCell = row.insertCell(-1);
      			actionsCell.innerHTML = "<button onclick='blog.view.loadRoutes.loadPartial(\"post\", \"1\")'>View Blog</button>&nbsp; <button class='delete'>X Delete</button>";
      			deleteBtn = actionsCell.querySelector(".delete");
      			deleteBtn.addEventListener("click", blog.view.listPosts.deletePost(event));
			}
		} else {
			row = tableBodyElm.insertRow();
			row.className += "info-msg";
			actionsCell = row.insertCell(-1);
			actionsCell.colSpan = colLength;
			actionsCell.innerHTML = "<span>There are no posts at this time. <a href>Why don't you add one?</a></span>"
		};
	},
	deletePost: function(event){
		console.log("$event " + event);
	}
}