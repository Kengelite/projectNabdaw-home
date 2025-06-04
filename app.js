const express = require("express");
const app = express();

// ตั้งค่าให้ใช้ EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
// ไฟล์ EJS จะอยู่ในโฟลเดอร์ชื่อ views
app.get("/", (req, res) => {
  res.render("index", { name: "IT VIP" });
});

app.get("/index", (req, res) => {
  res.render("dashboard");
});

app.get("/room", (req, res) => {
  res.render("room/room");
});
app.get("/room/detail", (req, res) => {
  res.render("room/detail_room");
});
app.get("/repair", (req, res) => {
  res.render("repair");
});
app.get("/meter", (req, res) => {
  res.render("meter/meter");
});
app.get("/bill", (req, res) => {
  res.render("bill/bill"); // โฟลเดอร์/ไฟล์ (ไม่ต้องใส่นามสกุล .ejs)
});
app.get("/bill/detail", (req, res) => {
  const roomId = req.query.room; // ดึงค่า ?room=101
  // ดึงข้อมูลตาม roomId จากฐานข้อมูลหรือ mock
  const billData = {
    room: roomId,
    name: "ชาติชาย คงดี",
    contract: "1 ปี",
    tel: "123456789",
    water: 200,
    electricity: 1000,
    rent: 4000,
    total: 5200,
    status: "paid",
  };
  res.render("bill/bill_detail", { bill: billData });
});
app.get("/payment", (req, res) => {
  res.render("payment");
});

app.get("/payment/detail", (req, res) => {
  const bill = {
    name: "ชาติชาย คงดี",
    tel: "0812345678",
    room: "101",
    months: [
      {
        name: "เม.ย. 2568",
        rent: 4000,
        water: 300,
        electricity: 800,
        total: 5100,
      },
      {
        name: "พ.ค. 2568",
        rent: 4000,
        water: 300,
        electricity: 850,
        total: 5150,
      },
    ],
  };
  res.render("bill/bill_payment",{ bill });
});

app.get("/user", (req, res) => {
  res.render("user");
});
app.get("/setting", (req, res) => {
  res.render("setting");
});
app.listen(3123, () => {
  console.log("Server running at http://localhost:3123");
});
