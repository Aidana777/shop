import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top__content">
          <div className="header-top__schedule">Mon-Thu: 9:00 AM - 5:30 PM</div>
          <p className="header-top__address">
            Visit our showroom in 1234 Street Adress City Address, 1234
            <a href="#">Contact Us</a>
          </p>
          <div className="header-top__contacts">
            <div className="header-top__phone">
              Call Us: <a href="tel:0012345678">(00) 1234 5678</a>
            </div>
            <a href="https://facebook.com">
              <img src="/img1/f.png" alt="F" />
            </a>
            <a href="https://instagram.com">
              <img src="/img1/I.png" alt="I" />
            </a>
          </div>
        </div>
      </div>
      <div className="container header-main">
        <div className="logo">
          <img src="/img1/logo.png" alt="" />
        </div>
        <nav className="links">
          <a href="#">Laptops</a>
          <a href="#">Desktop PCs</a>
          <a href="#">Networking Devices</a>
          <a href="#">Printers & Scanners</a>
          <a href="#">PC Parts</a>
          <a href="#">All Other Products</a>
          <a href="#"> Repairs</a>
        </nav>
        <div className="actions">
          <button className="btn">
            <img src="/Vector (1).png" alt="" />
          </button>
          <button className="btn">
            <img src="/Vector.png" alt="" />
          </button>
          <button className="avatar">
            <img src="/img1/avatar.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
