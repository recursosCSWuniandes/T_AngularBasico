(function () {
	var crud = angular.module('CrudModule');

	crud.provider('apiUrlFactory', function () {
		var config = false;
		this.setUrlParameters = function (value) {
			config = value;
		};
		this.$get = ['$location', function ($location) {
				if (config.host === 'localhost') {
					config.host = $location.host();
				}
				return 'http://' + config.host + ':' + config.port + config.context;
			}];
	});

	crud.factory('APIClient', ['$resource', 'apiUrlFactory', function ($resource, apiUrlFactory) {
			return $resource(apiUrlFactory + '/:id', {id: "@id"}, {
				update: {method: 'PUT'},
				query: {method: 'GET', isArray: false}
			});
		}]);

	crud.service('CRUDService', ['APIClient', function CrudController(APIClient) {
		var self = this;
		this.currentRecord = {};
		this.editMode = false;
		this.records = [];
		this.fetchRecords = function () {
			APIClient.query(function (data) {
				self.records = data.records;
				console.log(data);
				self.currentRecord = {};
				self.editMode = false;
			});
		};
		this.createRecord = function () {
			self.editMode = true;
			self.currentRecord = {};
		};
		this.saveRecord = function () {
			if (this.currentRecord.id) {
				APIClient.update({id: this.currentRecord.id}, this.currentRecord, function () {
					self.fetchRecords();
				});
			} else {
				APIClient.save(this.currentRecord, function () {
					self.fetchRecords();
				});
			}
		};
		this.deleteRecord = function (id) {
			var record = new APIClient();
			record.id = id;
			record.$delete(function () {
				self.fetchRecords();
			});
		};
		this.editRecord = function (id) {
			APIClient.get({id: id}, function (data) {
				self.editMode = true;
				self.currentRecord = data;
			});
		};
	}]);
})();