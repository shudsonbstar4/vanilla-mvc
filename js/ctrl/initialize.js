'use strict';

//First declare the namespace
var blog = {view: {}, ctrl: {}, model: {}};

//Endpoints stored here, so can change out in one place; perhaps these should be stored in each model, though?
var endpoints = {
	getBlogPosts: function(){
		return 'data/posts.json'
	},
	getSinglePost: function(id){
		return 'data/posts-' + id + '.json';
	}
};