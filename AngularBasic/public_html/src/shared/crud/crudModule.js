(function() {
	var crud = angular.module('CrudModule', ['ngResource']);
	crud.run(['CRUDService',function(crudService){
			crudService.fetchRecords();
	}]);
})();