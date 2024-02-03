import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <header className={` z-50 font-sans size-28 fixed navbar w-full shadow-md `}>
      <div className=" w-2/5">
        <a className="text-5xl px-20  w-auto font-bold">Pomodoro method</a>
      </div>
      <div className='w-3/5  justify-end '>
        <div className='w-1/3'>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-outline  justify-end  text-2xl">My website</div>
            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
              <div className="card-body">
                <h3 className="card-title">My webresume</h3>
                <p>Is not done - ill update later</p>
              </div>
            </div>
          </div>
        </div>
      </div>

</header>
  );
};

export default Navbar;

