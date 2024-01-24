import React from 'react'
import "./header.css"
import { Button } from '../button/button';

export const Header = () => {
  return (
    <div className="container1">
      <div className='header'>
        <img src="/Group6.svg" alt="icon" />
        <div>
          <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
