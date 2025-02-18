```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error if the request body is empty
  const { name } = req.body;
  res.status(200).json({ name: name });
}
```