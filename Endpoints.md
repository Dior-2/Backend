# Endpoints

## IMPORTANT
For deconstructing correctly on both front and back-end, all parameter names should be lowercase. Reference schema.sql for data types, but don't copy their capitalization

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
server side key-value pairs deconstruct under req.body

---
### OFFERS: GET AND POST

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

limit and category optional

---
POST api/listings/offers
```
{
  email
  title
  body
  category
};
```
---

### REQUESTS: GET AND POST

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
sorted by most recent

limit and category optional

---

POST api/listings/requests
```
{
  email
  title
  body
  category
}
```

---
### COMMENTS: GET AND POST

GET api/comments/:post_id/:thread_id
```
[
  [{ id, username, body, post_id, thread_id, timestamp }, {...}],
  [{...}, {...}]
]
```
grouped by thread_id

post_id mandatory

if no thread_id is passed, comment is assumed to be on original post, and one will be assigned

---
POST api/listings/requests/comments
```
{
  post_id
  thread_id
  email
  body
}
```
---

### PROFILE: GET, POST, AND PUT

GET api/profile/:email
```
[{
  id
  firebase_id
  firstname
  lastname
  username
  email
  homephone
  mobile
  preferredcontact
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
  "ogemail": even if it's not changing and therefor in the object twice
  .
  .
  .
  same as above
}
```
