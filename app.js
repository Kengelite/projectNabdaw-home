const express = require('express');
const app = express();

// ตั้งค่าให้ใช้ EJS
app.set('view engine', 'ejs');

// ไฟล์ EJS จะอยู่ในโฟลเดอร์ชื่อ views
app.get('/', (req, res) => {
  res.render('index', { name: 'IT VIP' });
});

app.listen(3123, () => {
  console.log('Server running at http://localhost:3123');
});