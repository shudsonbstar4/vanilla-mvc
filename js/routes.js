blog.view.listOfRoutes = {
	home: function(){
		var route = {
			url: '/home',
			templateUrl: 'partials/_posts-list.html',
			title: "Bloggy -- List Blogs",
			initFunction: blog.view.listPosts.setupUI
		}
		return route;
	},
	post: function(id){
		var route = {
			url: '/post/' + id,
			templateUrl: 'partials/_post.html',
			title: "Bloggy -- View Post " + id,
			initFunction: blog.view.viewPost.setupUI(id)
		}
		return route;
	}
};

//handler fn for the routes
blog.view.loadRoutes = {
	loadPartial: function(uri, params){

		var xhr = new XMLHttpRequest,
			routeMap = blog.view.listOfRoutes[uri](params);
			template = routeMap.templateUrl,
			containerElm = document.querySelector('#content'),
			pageTitle = document.querySelector('title');

		if(!template){
			template = blog.view.listOfRoutes['home']().templateUrl;
			pageTitle.innerHTML = blog.view.listOfRoutes['home']().title;
		} else {
			pageTitle.innerHTML = routeMap.title;
		};

		xhr.open('GET', template, true);
		xhr.onreadystatechange = function(){
			if(this.readyState === 4 && this.status === 200){
				containerElm.innerHTML = this.responseText;

				if(routeMap.initFunction){
					window.addEventListener("load", routeMap.initFunction);
				};

			} else {
				return;
			};
		};
		xhr.send();
	}
};