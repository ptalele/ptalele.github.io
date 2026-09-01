import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} Prashant Talele. All rights reserved.</span>
        <span>Made with care. Anyone, anywhere can make a positive difference.</span>
      </div>
    </footer>
  );
}
