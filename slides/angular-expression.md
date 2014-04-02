##  angular expression {{}}

#### simple
```html
<p classs="alert alert-{{alert.type}}">{{alert.message}}</p>
```

#### arithmetic
```html
<p classs="click-count">{{post.click + 1}}</p>
```

#### compound
```html
<p classs="comment-count">{{post.comment > 1 ? 'comments' : 'comment'}}</p>
```
