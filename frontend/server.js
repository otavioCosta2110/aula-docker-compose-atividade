const express = require('express');
const path = require('path');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: process.env.BACKEND_URL || 'http://backend:3000',
  changeOrigin: true
}));

app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'index.html');
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    const backendUrl = '';
    const modifiedHtml = data.replace('{{BACKEND_URL}}', backendUrl);
    res.send(modifiedHtml);
  });
});

app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Frontend running on port ${port}`);
});