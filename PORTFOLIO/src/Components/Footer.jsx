import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-[30px]  lg:py-[60px] bg-white'>
      <div className="top-footer flex justify-center items-center flex-col gap-[30px] bg-[var(--body-test)] py-40px] ">
        <p className='text-2xl font-semibold text-violet-600'>Eric Miezan .</p>
      </div>
      <div className="middle-footer flex">
        <ul className="footer-menu flex">
          <li className="footer_menu_list list-none">
            <Link to="/home" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Accueil</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/home" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>BTS SIO</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/home" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Ecole & Entreprise</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/home" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Réalisations</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/about" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>À Propos</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/projects" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Projets</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/home" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Veille technologique</Link>
          </li>
          <li className="footer_menu_list list-none">
            <Link to="/contact" className='no-underline text-gray-600 font-medium mx-5 hover:text-violet-600'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bottom-footer text-sm mt-3">
        <p>Copyright &copy; <Link to="/home" style={{ textDecoration: 'none' }}>Eric Miezan</Link> - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
