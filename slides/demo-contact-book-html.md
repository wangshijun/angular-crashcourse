### HTML
```html
<div ng-controller="ContactController" class="demo demo-contact-book">

    <form class="form-inline" ng-submit="addContact()">
        <div class="form-group">
            <input class="form-control input-lg" ng-model="name" placeholder="Contact Name">
        </div>
        <div class="form-group">
            <input class="form-control input-lg" ng-model="mobile" placeholder="Contact Mobile">
        </div>
        <button type="submit" class="btn btn-lg btn-success">Add Contact</button>
    </form>

    <br/>

    <table class="table table-bordered">
        <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Actions</th>
        </tr>
        <tr ng-repeat="contact in contacts">
            <td>{{contact.name}}</td>
            <td>{{contact.mobile}}</td>
            <td><a href="javascript:void(0)" ng-click="deleteContact()">删除</a></td>
        </tr>
    </table>

</div>
```
