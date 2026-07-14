const mongoose = require('mongoose');
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dvikas254202:vikas2006@cluster0.irtwbpd.mongodb.net/vikas?appName=Cluster0'); 
    console.log('MongoDB Connected to studentDB');
  } catch (err) {
    console.error("MongoDB Error: ", err);
    process.exit(1);
  }
}

module.exports = connectDB;
