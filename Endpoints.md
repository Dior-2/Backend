# Endpoints

## Structure of HTTP request
GET
```
axios.get('/endpoint', {
  params: {
    key: value,
    key: value,
  }
})
```
server side key-value pairs deconstruct under req.query

---

POST
```
axios.post('/endpoint', {
  body?
})
```
server side key-value pairs deconstruct under req.body?

---
### OFFERS

GET api/listings/offers/:limit/:category
```
[{
  id
  title
  body
  username
  timestamp
  category
}];
```
sorted by most recent

---

GET api/listings/offers/comments/:post_id
```
[{
  id
  username
  body
  post_id
  timestamp
}];
```
sorted by username, most recent

---
POST api/listings/offers/post
```
{
  username
  title
  body
  category
};
```
---

POST api/listings/offers/comment
```
{
  post_id
  username
  body
};
```
---

### REQUESTS

GET api/listings/requests/:limit/:category
```
[{
  id
  title
  body
  username
  timestamp
  category
}]
```
sort by most recent

---
GET api/listings/requests/comments/:post_id
```
[{
  id
  username
  body
  post_id
  timestamp
}]
```

sort by username and most recent

---
POST api/listings/requests/post
```
{
  username
  title
  body
  category
}
```

---
POST api/listings/requests/comment
```
{
  post_id
  username
  body
}
```
---

### PROFILE

GET api/profile/:username
```
[{
  id
  firstName
  lastName
  userName
  email
  homePhone
  mobile
  fax
  preferredContact
  city
  state
  zip
  address1
  address2
  role
  organization
}]
```

---

PUT api/profile/:username
```
{
  everything from above
}
```