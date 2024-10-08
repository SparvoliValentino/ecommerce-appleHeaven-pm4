"use client";
// Importación de imágenes y hooks
import Image from 'next/image';
import logo from '@/app/Img/logo.jpeg'; // Asegúrate de ajustar la ruta si es necesario
import { useEffect, useState } from 'react';
import { IUserData } from '@/app/interfaces/ILogin';
import { useAuth } from '@/app/context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/app/context/CartContext';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userData } = useAuth();
  const { cartCount } = useCart();

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='w-full h-[100px] my-6'>
      <div className='max-w-[1000px] mx-auto flex items-center justify-between rounded-full bg-white shadow-custom-inset p-4'>
        {/* Logo */}
        <div className='flex items-center max-sm:w-full justify-center'>
          <a href='/Home'>
            <Image src={logo} alt='Logo' className='w-20 h-20 justify-center rounded-full' />
          </a>
          <h2 className='hidden md:block font-bold text-lg ml-4'>Apple Heaven</h2>
        </div>

        {/* Botón para abrir el menú en pantallas pequeñas */}
        {!menuOpen && (
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-black focus:outline-none z-50 relative'
            >
              ☰
            </button>
          </div>
        )}

        {/* Navegación para pantallas grandes */}
        <nav className='hidden md:flex w-1/2 justify-evenly'>
          <ul className='flex justify-evenly items-center w-full text-black'>
            <a href='/Home'><li className='header-links'>Home</li></a>
            <a href='/product'><li className='header-links'>Products</li></a>
            {userData?.token ? (
              <a href='/dashboard'><li className='header-links'>Account settings</li></a>
            ) : (
              <a href='/register'><li className='header-links'>Register</li></a>
            )}
            <a href='/order/cart'>
              <li className='header-links flex items-center'>
                {
                  cartCount === 0 ? (
                    <FontAwesomeIcon icon={faCartShopping} />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCartShopping} bounce />
                      {cartCount > 0 && <span className="ml-2 text-sm font-semibold text-black">{cartCount}</span>}
                    </>
                  )
                }
              </li>
            </a>
          </ul>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col justify-center items-center'>
          {/* Botón para cerrar el menú */}
          <button
            onClick={toggleMenu}
            className='absolute top-5 right-5 text-white text-3xl z-50'
          >
            ✖
          </button>
          <ul className='text-white text-center space-y-6 h-[400px] flex flex-col justify-evenly'>
            <a href='/Home' onClick={toggleMenu}><li className='bg-gray-100 text-black shadow-custom-inset rounded-full p-2 text-2xl'>Home</li></a>
            <a href='/product' onClick={toggleMenu}><li className='bg-gray-100 text-black shadow-custom-inset rounded-full p-2 text-2xl'>Products</li></a>
            <a href='/order/cart' onClick={toggleMenu}><li className='bg-gray-100 text-black shadow-custom-inset rounded-full p-2 text-2xl'>Cart</li></a>
            {userData?.token ? (
              <a href='/dashboard' onClick={toggleMenu}><li className='bg-gray-100 text-black shadow-custom-inset rounded-full p-2 text-2xl'>Account settings</li></a>
            ) : (
              <a href='/register' onClick={toggleMenu}><li className='bg-gray-100 text-black shadow-custom-inset rounded-full p-2 text-2xl'>Register</li></a>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
