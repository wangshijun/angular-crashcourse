'use strict';

var app = angular.module('app', []);

app.controller('HelloController', function ($scope) {
    $scope.name = 'Xuan Xuan';
});

app.controller('ContactController', function ($scope) {
    $scope.contacts = [
        { name: 'Shijun', mobile: 15811057083 },
        { name: 'Jingwei', mobile: 13888888888 },
    ];

});
