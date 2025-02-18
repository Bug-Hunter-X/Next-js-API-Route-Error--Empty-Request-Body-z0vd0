```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Check if req.body exists and contains the name property
  const name = req.body && req.body.name ? req.body.name : 'World';
  res.status(200).json({ name: name });
}
```