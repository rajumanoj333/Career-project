import React from 'react';
import { Link } from 'react-router-dom';

interface Navbar1Props {
  logo: { url: string; src: string; alt: string; title: string; };
  menu: Array<{ title: string; url: string; items?: Array<{ title: string; description: string; icon: React.ReactNode; url: string; }>; }>;
  auth: { login: { text: string; url: string; }; signup: { text: string; url: string; }; };
}

// This is a placeholder component. The actual implementation for Navbar1 is missing.
// Please provide the correct implementation for this component.
const Navbar1: React.FC<Navbar1Props> = ({ logo, menu, auth }) => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to={logo.url} style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
        <img src={logo.src} alt={logo.alt} style={{ height: '30px', marginRight: '10px' }} />
        <span>{logo.title}</span>
      </Link>
      <div>
        {menu.map((item, index) => (
          <Link key={index} to={item.url} style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <Link to={auth.login.url} style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
          {auth.login.text}
        </Link>
        <Link to={auth.signup.url} style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
          {auth.signup.text}
        </Link>
      </div>
    </nav>
  );
};

export { Navbar1 };
