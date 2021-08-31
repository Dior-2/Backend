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
  data: {
    key: value,
    key: value
  }
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
POST api/listings/offers
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
POST api/listings/requests
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

GET api/profile/:email*
```
[{
  id
  firstName
  lastName
  userName
  email
  homePhone
  mobile
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
POST api/profile
```
{
  same as above, see database/schema.sql for data types
}
```


---

PUT api/profile/:email
```
{
  "ogEmail": even if it's not changing and therefor in the object twice
  .
  .
  .
  same as above
}
```
