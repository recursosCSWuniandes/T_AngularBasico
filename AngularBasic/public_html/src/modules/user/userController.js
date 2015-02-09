(function () {
	var app = angular.module('userModule');

	app.controller('userController', ['$scope', 'UserCrudService', function ($scope, userCrudService) {
			$scope.user = {};
			$scope.showForm = false;
			$scope.enableForm = function () {
				$scope.showForm = true;
			};
			App.Utils.extend($scope, userCrudService);
		}]);

	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();