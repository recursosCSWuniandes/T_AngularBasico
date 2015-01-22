(function () {
	var app = angular.module('userModule', []);

	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			$scope.buttonText = 'Mostrar Formulario';
			this.toggleForm = function () {
				$scope.showForm = !$scope.showForm;
				$scope.buttonText = $scope.showForm && 'Esconder Formulario' || 'Mostrar Formulario';
			};
			this.save = function () {
				alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName);
			};
		}]);

	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/view/userTemplates.html'
			};
		}]);
})();