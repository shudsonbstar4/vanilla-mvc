'use strict';

//ID: String
//firstName: String
//lastName: String
//userName: String
//password: Encrypted String
// emailAddress: String

function User(rows){
	this = {id: "", firstName: "", lastName: "", userName: "", password: "", emailAddress: ""};

	if(arguments.length > 0){
		this = {id: rows.id, firstName: rows.firstName, lastName: rows.lastName, userName: rows.userName, password: "****", emailAddress: rows.emailAddress};
	};
};

User.instances = [];