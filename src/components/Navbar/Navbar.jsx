

import React, { useState, useEffect } from 'react';
import { useShopping } from '../../context/ShoppingContext';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { cart, toggleCart } = useShopping();
  const [menu, setMenu] = useState("shop");
  const location = useLocation();
  useEffect(() => {
    const category = location.pathname.split('/')[1];
    setMenu(category || "shop");
  }, [location]);
  return (
    <div>
      <header>
        <nav>
          <h2>Q</h2>
          <ul>
            <li>
              <button onClick={() => setMenu("shop")} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Link to='/'>Home</Link> {menu === "shop" ? <hr /> : <></>}
              </button>
            </li>
            <li>
              <button onClick={() => setMenu("mens")} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Link to='/men'>Men</Link> {menu === "mens" ? <hr /> : <></>}
              </button>
            </li>
            <li>
              <button onClick={() => setMenu("jewelery")} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Link to='/jewelry'>Jewelry</Link> {menu === "jewelery" ? <hr /> : <></>}
              </button>
            </li>
            <li>
              <button onClick={() => setMenu("electronics")} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Link to='/electronics'>Electronics</Link> {menu === "electronics" ? <hr /> : <></>}
              </button>
            </li>
            <li>
              <button onClick={() => setMenu("women")} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
              <Link to='/women'>Women</Link> {menu === "women" ? <hr /> : <></>}
              </button>
            </li>
          </ul>
          <div className='cart-btn' onClick={toggleCart} style={{ cursor: 'pointer' }}>
            <i className="bi bi-cart4"></i>
            <small>
              {cart.reduce((totalItem, item) => totalItem + (item.quantity || 1), 0)}
            </small>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

