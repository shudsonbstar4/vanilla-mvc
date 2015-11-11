'use strict';

function Tag(rows){
	this = {id: "", title: ""};

	if(arguments.length > 0){
		this = {id: rows.id, title: rows.id};
	}
};

Tag.instances = [];