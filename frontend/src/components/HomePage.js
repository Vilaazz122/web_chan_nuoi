import React from "react";
import '../css/HomePage.css';

export default function HomePage() {
  return (
    <div>
      <header className="header">
        <h1>Ba Đắc</h1>
        <p>Chuyên cung cấp thức ăn chăn nuôi chất lượng cao</p>
      </header>

      <nav className="nav">
        <a href="#home">Trang chủ</a>
        <a href="#about">Giới thiệu</a>
        <a href="#products">Sản phẩm</a>
        <a href="#contact">Liên hệ</a>
      </nav>

      <section id="home" className="section">
        <h2>Chào mừng đến với Ba Đắc</h2>
        <p>Chúng tôi cung cấp các loại thức ăn cho gia súc, gia cầm với chất lượng tốt nhất.</p>
      </section>

      <section id="about" className="section">
        <h2>Giới thiệu</h2>
        <p>Ba Đắc là đơn vị tiên phong trong lĩnh vực thức ăn chăn nuôi, luôn đặt chất lượng lên hàng đầu.</p>
      </section>

      <section id="products" className="section">
        <h2>Sản phẩm</h2>
        <div className="product">
          <h3>Thức ăn cho heo</h3>
          <p>Giàu dinh dưỡng, tăng trọng nhanh, an toàn cho vật nuôi.</p>
        </div>
        <div className="product">
          <h3>Thức ăn cho gà</h3>
          <p>Hỗn hợp hoàn chỉnh giúp gà phát triển khỏe mạnh.</p>
        </div>
        <div className="product">
          <h3>Thức ăn cho vịt</h3>
          <p>Giúp vịt lớn nhanh, tăng cường sức đề kháng.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Liên hệ</h2>
        <p>Địa chỉ: 123 Đường Trại Nuôi, Huyện Nông Nghiệp</p>
        <p>SĐT: 0901 234 567</p>
        <p>Email: lienhe@badac.vn</p>
        <form>
          <input type="text" placeholder="Tên của bạn" required style={{ marginBottom: '10px', width: '100%' }} /><br />
          <textarea placeholder="Nội dung liên hệ" required style={{ width: '100%', height: '100px' }}></textarea><br /><br />
          <button type="submit">Gửi</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Ba Đắc. All rights reserved.</p>
      </footer>
    </div>
  );
}