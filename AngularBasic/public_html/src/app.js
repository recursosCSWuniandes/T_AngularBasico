(function () {
	var userModule = angular.module('userModule', ['MockModule','CrudModule']);
	
	var userConfig = App.Utils.loadConfiguration("./src/modules/user/config/userConfig.json");

	userModule.constant('myConfig', userConfig);
	
	userModule.config(['myConfig', 'apiUrlFactoryProvider', function (myConfig, apiUrlFactoryProvider) {
			apiUrlFactoryProvider.setUrlParameters(myConfig);
		}]);

	userModule.config(['myConfig', 'MockModule.urlValueProvider', function (myConfig, mockURLProvider) {
			mockURLProvider.setUrlParameters(myConfig);
		}]);
})();