(function(){
	var userModule = angular.module('userModule');
	
	userModule.factory('UserCrudService',['CRUDService', function(crudService){
			function UserCrud(){};
			UserCrud.prototype = crudService;
			return new UserCrud();
	}]);
})();