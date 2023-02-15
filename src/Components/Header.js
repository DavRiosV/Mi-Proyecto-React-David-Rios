import Navbar from './Navbar';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        </Link>
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/8/87/latest/20210226185630/Pok%C3%A9_Ball_%28Hisui%29_%28Ilustraci%C3%B3n%29.png" alt ="pokelogo" className='Logo'/>
        <h2><span>R&A</span> Ltda</h2>
        <Navbar />

      </div>
    </header>
  );
};

export default Header;