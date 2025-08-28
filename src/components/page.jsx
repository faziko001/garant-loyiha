import React, { useState, useEffect } from "react";
import "./style/globals.css";

const GarantApp = () => {
  // Dark mode uchun state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Dark mode o'zgarishini body class'ga va localStorage ga yozish
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <h1 className="store-title">Garant</h1>
          <p className="store-subtitle">Sizning ishonchli maishiy texnika do'koningiz</p>
          {/* Tun/Kun rejim toggle tugmasi */}
          <button
            className="toggle-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞 Kun rejimiga o'tish" : "🌙 Tun rejimiga o'tish"}
          </button>

          <div className="contact-info">
            <div>Tel: +998 90 123 45 67</div>
            <div>Email: info@garant.uz</div>
            <div>Manzil: Toshkent, Chilonzor</div>
          </div>
          
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h2>Biz bilan orzularingizdagi maishiy texnikaga ega bo'ling!</h2>
          <p>
            Katta tanlov, qulay to‘lov shartlari va ishonchli kafolatlar bilan
            maishiy texnika xarid qiling.
          </p>
          <button className="hero-button">Hozir bog'laning</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <main className="container">
        {/* Yangi maishiy texnikalar */}
        <section className="product-category">
          <h3 className="category-title">Yangi maishiy texnikalar</h3>
          <div className="product-grid">
            <ProductCard
              image="https://cdn.mohd.it/cache/image/width=800,format=webp/media/catalog/product/s/a/samsungserie8000.jpg"
              alt="Yangi Sovutgich"
              title="Samsung Sovutgich 2025"
              description="Katta sig‘imli, energiya tejamkor, zamonaviy dizayn."
              price="800 $"
              installment="To‘lov: 12 oyga bo‘lib"
            />
            <ProductCard
              image="https://api.idea.uz/storage/products/September2024/4oj5jkbyAJ0oXa6gGTSJ.png"
              alt="Yangi Kir yuvish mashinasi"
              title="LG Kir Yuvish Mashinasi"
              description="Energiya samaradorligi yuqori, katta sig‘im."
              price="650 $"
              installment="To‘lov: 10 oyga bo‘lib"
            />
          </div>
        </section>

        {/* Ishlatilgan maishiy texnikalar */}
        <section className="product-category">
          <h3 className="category-title">Ishlatilgan maishiy texnikalar</h3>
          <div className="product-grid">
            <ProductCard
              image="https://zeerawireless.com/cdn/shop/articles/iphone_17_pro_max_cd23ca24-97b2-4e60-a797-b3e3c285fc03.jpg?v=1750150073&width=1000"
              alt="istalgan Ayfon"
              title="Ayfon 17 pro max"
              description="Ishlatilgan, yaxshi holatda, kafolat bilan."
              price="1000 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
            <ProductCard
              image="https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2025/01/galaxy-s25-ultra-header-1.jpg"
              alt="Ishlatilgan Samsung"
              title="Samsung S24 ultra"
              description="Sifatli, yaxshi texnik holatda."
              price="1080 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
          </div>
        </section>

        {/* Uy rozg'or buyumlari 1 */}
        <section className="product-category">
          <h3 className="category-title">Uy rozg'or buyumlari</h3>
          <div className="product-grid">
            <ProductCard
              image="https://sodda.uz/storage/products/UyoJlsFKTaT9o8TzIDHIIIoJk31Ph97TfeZYm3CM.webp"
              alt="Gaz plita"
              title="Gaz plita"
              description="Sifatli, yaxshi texnik holatda."
              price="150 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
            <ProductCard
              image="https://avatars.mds.yandex.net/get-mpic/15285180/2a00000198a76b18c5aedaf277ffe3979793/optimize"
              alt="chang yutgich"
              title="Chang yutgich"
              description="Sifatli, yaxshi texnik holatda."
              price="100 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
          </div>
        </section>

        {/* Uy rozg'or buyumlari 2 */}
        <section className="product-category">
          <h3 className="category-title">Uy rozg'or buyumlari</h3>
          <div className="product-grid">
            <ProductCard
              image="https://assets.asaxiy.uz/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2023011911481891187gPghXjNXVP.jpg"
              alt="tilivizor"
              title="Tilivizor"
              description="Sifatli, yaxshi texnik holatda."
              price="250 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
            <ProductCard
              image="https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-04-02/ZBasl3q3SaLpHrFM9tOnzX4U5xXNiHDqPazHDGZvCWmQ9ZwdBS03PjSHZxeX.jpg"
              alt="mikro to'lqinli pech"
              title="Mikro to'lqinli pech"
              description="Sifatli, yaxshi texnik holatda."
              price="130 $"
              installment="To‘lov: 6 oyga bo‘lib"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <h3 className="section-title">Bizning xizmatlarimiz</h3>
          <div className="services-grid">
            <ServiceCard icon="🔧" title="Kafolatli xizmat" description="Har bir mahsulotga rasmiy kafolat beramiz." />
            <ServiceCard icon="💳" title="Qulay to‘lov" description="Bo‘lib to‘lash va kredit imkoniyatlari." />
            <ServiceCard icon="🚚" title="Tez yetkazib berish" description="Buyurtmalarni tez va ishonchli yetkazib beramiz." />
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h3 className="section-title">Bog‘lanish</h3>
          <div className="contact-wrapper">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <h4>Garant</h4>
            <p>Maishiy texnika bo‘yicha eng ishonchli do‘kon.</p>
          </div>
          <div className="footer-section">
            <h4>Kontaktlar</h4>
            <ul>
              <li>Tel: +998 90 123 45 67</li>
              <li>Email: info@garant.uz</li>
              <li>Manzil: Toshkent, Chilonzor</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ijtimoiy tarmoqlar</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Garant. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
};

// ProductCard komponenti
const ProductCard = ({ image, alt, title, description, price, installment }) => (
  <div className="product-card">
    <img className="product-image" src={image} alt={alt} />
    <div className="product-info">
      <h4>{title}</h4>
      <p className="product-description">{description}</p>
      <div className="price">{price}</div>
      <div className="installment">{installment}</div>
    </div>
  </div>
);

// ServiceCard komponenti
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// ContactInfo komponenti
const ContactInfo = () => (
  <div className="contact-info1">
    <h2>Biz bilan aloqa</h2>
    <div className="contact-item">
      <span className="contact-icon">📞</span>
      <p>+998 90 123 45 67</p>
    </div>
    <div className="contact-item">
      <span className="contact-icon">📧</span>
      <p>info@garant.uz</p>
    </div>
    <div className="contact-item">
      <span className="contact-icon">📍</span>
      <p>Toshkent, Chilonzor tumani</p>
    </div>
  </div>
);

// ContactForm komponenti
const ContactForm = () => (
  <form className="contact-form" onSubmit={e => e.preventDefault()}>
    <h3>Murojaat qoldiring</h3>
    <input className="form-input" type="text" placeholder="Ismingiz" required />
    <input className="form-input" type="email" placeholder="Email" required />
    <textarea className="form-textarea" placeholder="Xabar matni" required />
    <button className="form-button" type="submit">Yuborish</button>
  </form>
);

export default GarantApp;
