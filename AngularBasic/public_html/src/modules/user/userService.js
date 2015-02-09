(function(){
	var userModule = angular.module('userModule');
	
	userModule.factory('UserCrudService',['CRUDService', function(crudService){
			var userService = crudService.extend(function(){
				
			});
			return userService;
	}]);
})();