### HTML
```html
<div ng-controller="HelloController">
    <input class="form-control input-lg" ng-model="name" />
    <div class="bg-primary">Hello {{name}}</div>
</div>
```

### Javascript
```javascript
var app = angular.module('roundtable', []);

app.controller('HelloController', function ($scope) {
    $scope.name = 'Xuan Xuan';
});
```
