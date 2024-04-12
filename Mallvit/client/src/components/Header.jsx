export default function Header () {
    return (
      <>
      <header className="header">
        <img src="stock-vector-logo.png" alt="Logo" className="logo" />
        <h1>Kipod Operation</h1>
      </header>
        <div className="container">
          <h1>Welcome to Our Shopping Mall</h1>
          <p>Explore our malls and discover a world of shopping!</p>
          <div className="mall-list">
            <div className="mall-card">
              <h2>Ayalon Mall</h2>
              <p>Ayalon Mall is your one-stop destination for all your shopping needs.</p>
              {/* <Link to="/mall/ayalon" className="btn">Explore</Link> */}
            </div>
            <div className="mall-card">
              <h2>Mall 2</h2>
              <p>Mall 2 offers a wide variety of stores and dining options for you to enjoy.</p>
              {/* <Link to="/mall/mall2" className="btn">Explore</Link> */}
            </div>
            {/* Add more mall cards as needed */}
          </div>
        </div>
        </>
    )
}