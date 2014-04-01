'use strict';

var app = angular.module('app', []);

app.controller('HelloController', function ($scope) {
    $scope.name = 'Xuan Xuan';
});

app.controller('ContactController', function ($scope) {
    $scope.contacts = [
        { name: '仕军', mobile: 15811057083 },
        { name: '敬威', mobile: 13888888888 },
    ];

    $scope.addContact = function () {

        var hasDuplicate = false;
        $scope.contacts.forEach(function (contact) {
            if (contact.name === $scope.name) {
                hasDuplicate = true;
            }
        });

        if (hasDuplicate) {
            alert('Duplicate contact name');
        } else {
            $scope.contacts.push({
                name: $scope.name,
                mobile: $scope.mobile,
            });
        }
    };

    $scope.deleteContact = function () {
        $scope.contacts.splice(this.$index, 1);
    };

});
