const express = require('express');
const app = express();

// ตั้งค่าให้ใช้ EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
// ไฟล์ EJS จะอยู่ในโฟลเดอร์ชื่อ views
app.get('/', (req, res) => {
  res.render('index', { name: 'IT VIP' });
});

app.get('/index', (req, res) => {
  res.render('dashboard');
});

app.get('/room', (req, res) => {
  res.render('room');
});
app.get('/repair', (req, res) => {
  res.render('repair');
});
app.get('/meter', (req, res) => {
  res.render('meter/meter');
});
app.get('/bill', (req, res) => {
  res.render('bill/bill'); // โฟลเดอร์/ไฟล์ (ไม่ต้องใส่นามสกุล .ejs)
});
app.get('/bill/detail', (req, res) => {
  res.render('bill/bill_detail'); // โฟลเดอร์/ไฟล์ (ไม่ต้องใส่นามสกุล .ejs)
});
app.get('/payment', (req, res) => {
  res.render('payment');
});
app.get('/report', (req, res) => {
  res.render('report');
});
app.get('/user', (req, res) => {
  res.render('user');
});
app.listen(3123, () => {
  console.log('Server running at http://localhost:3123');
});