(function () {
	var app = angular.module('userModule');

	app.controller('userController', ['$scope', 'UserCrudService', function ($scope, userCrudService) {
			$scope.user = {};
			$scope.showForm = false;
			$scope.enableForm = function () {
				$scope.showForm = true;
			};
			for (var att in userCrudService) {
				$scope[att] = userCrudService[att];
			}
		}]);

	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();