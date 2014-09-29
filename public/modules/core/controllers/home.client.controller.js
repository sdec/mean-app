'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Customers',
	function($scope, Authentication, Customers) {

        var query = Customers.query();
        query.$promise.then(function(result) {
           $scope.alerts[0].total = result.length;
        });

		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
		  {
		    "icon": 'glyphicon-user',
		    "color": 'btn-success',
		    "total": 0,
		    "description": 'TOTAL CUSTOMERS'
		  },
		  {
		    "icon": 'glyphicon-calendar',
		    "color": 'btn-primary',
		    "total": '10,808',
		    "description": 'UPCOMING EVENTS'
		  },
		  {
		    "icon": 'glyphicon-edit',
		    "color": 'btn-success',
		    "total": '4,419',
		    "description": 'NEW CUSTOMERS IN 24 HOURS'
		  },
		  {
		    "icon": 'glyphicon-record',
		    "color": 'btn-info',
		    "total": '17,155',
		    "description": 'EMAILS SENT'
		  },
		  {
		    "icon": 'glyphicon-eye-open',
		    "color": 'btn-warning',
		    "total": '4,830',
		    "description": 'FOLLOW-UPS REQUIRED'
		  },
		  {
		    "icon": 'glyphicon-flag',
		    "color": 'btn-danger',
		    "total": '19,286',
		    "description": 'REFERRALS TO MODERATE'
		  }
		];
	}
]);