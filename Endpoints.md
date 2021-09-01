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

category optional

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

category is optional

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
  [{ id, username, body, post_id, timestamp }, {...}],
  [{...}, {...}]
]
```
grouped by username

if no thread_id is passed, comment is assumed to be on original post, and one will be assigned

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

### PROFILE: GET, POST, AND PUT

GET api/profile/:email
```
[{
  id
  firebase_id
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
