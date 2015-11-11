//Define the Post class for creating objs

//Id: STRING
//Title: STRING
//dateCreated ISO to STRING
//tags: ARRAY of OBJS
//blog: OBJ (contains user obj inside; so you'd do Post.blog.user.name to access the owner)

function Post(rows){
	this.id = "";
	this.title = "";
	this.dateCreated = "";
	this.tags = [];
	this.blog = {};
	this.postContent = "";

	if(arguments.length > 0){
		this.id = rows.id;
		this.title = rows.title;
		this.dateCreated = rows.dateCreated;
		this.tags = rows.tags;
		this.blog = rows.blog;
		this.postContent = rows.postContent;
	};
};

Post.instances = []; //Save all the posts in an array; each indice will be an object

//Data integrity and constraint validations

//DOM manipulation methods

//CRUD methods
Post.loadAll = function(){
	return $http.get(endpoints.getBlogPosts());
};

Post.loadSinglePost = function(id){
	return $http.get(endpoints.getSinglePost(id));
};