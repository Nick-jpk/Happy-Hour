```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to Happy Hour!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 6. **Running Your Server:**
In your terminal, go to the `server` folder and run:

```bash
node index.js
```
