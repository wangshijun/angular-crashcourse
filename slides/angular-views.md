##  views

```html
<p classs="alert alert-{{alert.type}}">{{alert.message}}</p>
<p classs="click-count">{{post.click + 1}}</p>
<p classs="comment-count">{{post.comment > 1 ? 'comments' : 'comment'}}</p>
```

```html
<ul>
    <li ng-repeat="contact in contacts">{{contact.name}}</li>
</ul>
```

projection of model states on page

