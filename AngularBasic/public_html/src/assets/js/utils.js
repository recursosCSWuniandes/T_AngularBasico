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