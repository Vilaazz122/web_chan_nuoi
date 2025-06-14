#!/bin/bash

echo "📁 Đang cài đặt module cho BACKEND..."
mkdir -p backend frontend
cd backend

# Khởi tạo package.json nếu chưa có
if [ ! -f "package.json" ]; then
  npm init -y
fi

# Cài các package cho server
npm install express cors body-parser --save-dev nodemon

echo "✅ Backend modules đã cài đặt."

echo "📁 Quay lại gốc và vào frontend..."
cd ../frontend

# Kiểm tra tồn tại package.json
if [ ! -f "package.json" ]; then
  echo "⚠️ Dự án CRA chưa được khởi tạo. Chạy create-react-app trước."
  npx create-react-app . || exit 1
fi

# Cài các module frontend cần thiết
echo "📦 Cài đặt React Router và các UI package..."
npm install react-router-dom classnames

echo "✅ Frontend modules đã cài đặt."

echo "🎉 HOÀN TẤT! Bạn có thể chạy frontend bằng 'npm start' và backend bằng 'node server.js'"
