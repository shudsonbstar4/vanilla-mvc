blog.view.viewPost = {
	setupUI: function(id){

		Post.loadSinglePost(id).then(function(response){
			var post = {},
				postContent = document.querySelector('#post_content'),
				title = document.querySelector('#post_title'),
				body = document.querySelector('#post');

			post = JSON.parse(response);
			body.innerHTML = post.postContent;
			title.innerHTML = post.title;
		}, function(error){
			console.log("ERROR  " + JSON.stringify(error, true, 2));
		});
	}
}