App = {};
App.Utils = App.Utils || {};
App.Utils.loadConfiguration = function (path) {
	var config;
	$.ajax({
		dataType: "json",
		url: path,
		async: false,
		success: function (data) {
			config = data;
		}
	});
	return config;
};
App.Utils.extend = function(child, parent){
	if(!(typeof(child)==='function' || typeof(child)==='object')){
		return;
	}
	if(typeof(child)==='function'){
		child.prototype = parent;
		return new child();
	}else{
		for (var i in parent) {
			if(!child[i]){
				child[i] = parent[i];
			}
		}
		return child;
	}
};