import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {

  const headerRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  const isProductPage = location.pathname === '/product' || location.pathname === '/cart'

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.length;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      scrollTop > lastScrollTop ? setIsHidden(true) : setIsHidden(false);

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    transform: isHidden ? 'translateY(-45%)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <>
      <header ref={headerRef} style={headerStyle} className='border-b font-[sans-serif] tracking-wide z-50 shadow-md top-0 sticky bg-white'>
        <section className='py-3 bg-[#153d38] text-white text-center px-10'>
          <p className='text-sm p-2'>Summer Sale: Save up to 40% on select items. <span className="text-red-500">Limited-time offer!</span></p>
        </section>
        <div className='container flex max-w-screen-xl px-6 py-3 md:px-12'>
          <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
            <Link to="/" className="max-sm:hidden flex items-center"><img src="/src/assets/logo.png" alt="logo" className='w-6' />
              <p className="text-2xl font-extrabold text-gray-800">RICH<span className="text-[#153d38] font-medium">FIELD</span></p>
            </Link>
            <Link to="/" className="hidden max-sm:block">
              <p className="text-2xl font-extrabold text-gray-800">RICH<span className="text-[#153d38] font-medium">FIELD</span></p>
            </Link>

            <div id="collapseMenu"
              className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
              <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </button>

              <ul
                className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                <li className='mb-6 hidden max-lg:block'>
                  <div className="flex items-center justify-between gap-4">
                    <Link to="/"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                    </Link>
                    <button
                      className='px-4 py-2 text-sm text-white rounded-sm border-2 border-[#dfe0df] bg-[#153d38] hover:bg-[#0b201e]'>Sign
                      In</button>
                  </div>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <NavLink to='/'
                  className={({isActive}) =>
                    `${isActive ? 'text-[#29746b] font-semibold' : 'text-gray-600' } hover:text-[#153d38] text-[15px] block`
                  }
                  >
                    Home
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/about'
                  className={({isActive}) =>
                    `${isActive ? 'text-[#29746b] font-semibold' : 'text-gray-600' } hover:text-[#153d38] text-[15px] block`
                  }
                  >
                    About
                  </NavLink>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <NavLink to='/product'
                  className={({isActive}) =>
                    `${isActive ? 'text-[#29746b] font-semibold' : 'text-gray-600' } hover:text-[#153d38] text-[15px] block`
                  }
                  >
                    Product
                  </NavLink></li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/contact'
                  className={({isActive}) =>
                    `${isActive ? 'text-[#29746b] font-semibold' : 'text-gray-600' } hover:text-[#153d38] text-[15px] block`
                  }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
              <div
                className='flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>
                <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                  className="cursor-pointer fill-gray-600">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              </div>

              <div className='flex items-center sm:space-x-8 space-x-6'>
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  { isProductPage ? (
                    <div className="flex gap-6">

                      <Link 
                      className="relative border border-gray-300 p-2 rounded-sm">
                        <svg
                          className="cursor-pointer inline"
                          width='30px' height='30px'
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                            stroke="#333"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
                        >
                          0
                        </span>
                      </Link>
                      {/* Cart Icon */}
                      <Link to='cart'
                      className="relative border border-gray-300 p-2 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" className="cursor-pointer fill-[#333] inline"
                          viewBox="0 0 512 512">
                          <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"></path>
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
                        >
                          { cartItemCount }
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <Link to='cart'
                    className="relative border border-gray-300 p-2 rounded-sm">
                      <svg
                          className="cursor-pointer inline"
                          width='30px' height='30px'
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                            stroke="#333"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
                      >
                        0
                      </span>
                    </Link>
                  ) }
               
                </div>

                <button
                  className='max-lg:hidden px-6 py-3 text-sm text-white rounded-sm border-2 border-[#dfe0df] bg-[#153d38] hover:bg-[#0c201e]'>Sign
                  In</button>

                <button id="toggleOpen" className='lg:hidden'>
                  <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header