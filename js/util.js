'use strict';

//This file contains the necessary functions for enabling basic behavior, such as utilizing the ES6 Promises API and wrapping it in usable methods

var $http = {
	get: function(url){
		return new Promise(function(resolve, reject){
			var req = new XMLHttpRequest();
			req.open('GET', url);

			req.onload = function(){
				//Called even on 404, so we have to check the status
				if(req.status === 200){
					//resolve the promise
					resolve(req.response);
				} else {
					//Otherwise we have to reject it
					reject(Error(req.statusText));
				};
			};

			//Handle network errors
			req.onerror = function(){
				reject(Error("Network Error"));
			};

			//Send the request to the browser
			req.send();
		});
	}
};