'use strict';

// Customers controller
angular.module('customers').controller('CustomersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Customers', '$modal', '$log',
    function($scope, $stateParams, $location, Authentication, Customers, $modal, $log) {
        $scope.authentication = Authentication;

        // Create new Customer
        $scope.create = function() {
            // Create new Customer object
            var customer = new Customers({
                firstName: this.firstName,
                lastName: this.lastName,
                suburb: this.suburb,
                industry: this.industry,
                email: this.email,
                phone: this.phone,
                referred: this.referred,
                channel: this.channel,
                updated: Date.now
            });

            // Redirect after save
            customer.$save(function(response) {
                $location.path('customers/' + response._id);

                // Clear form fields
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.suburb = '';
                $scope.industry = '';
                $scope.email = '';
                $scope.phone = '';
                $scope.referred = '';
                $scope.channel = '';
                $scope.updated = '';

            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Remove existing Customer
        $scope.remove = function(customer) {
            if (customer) {
                customer.$remove();

                for (var i in $scope.customers) {
                    if ($scope.customers [i] === customer) {
                        $scope.customers.splice(i, 1);
                    }
                }
            } else {
                $scope.customer.$remove(function() {
                    $location.path('customers');
                });
            }
        };

        // Update existing Customer
        $scope.update = function() {
            var customer = $scope.customer;

            customer.$update(function() {
                $location.path('customers/' + customer._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Customers
        $scope.find = function() {
            $scope.customers = Customers.query();
        };

        // Find existing Customer
        $scope.findOne = function() {
            $scope.customer = Customers.get({
                customerId: $stateParams.customerId
            });
        };
    }
]);