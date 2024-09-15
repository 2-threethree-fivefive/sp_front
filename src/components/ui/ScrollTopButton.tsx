'use client';

import React, { useEffect } from 'react';
import TopIcon from '/public/assets/images/icons/topIcon.svg';

function ScrollTopButton() {
  const [isTop, setIsTop] = React.useState(true);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isTop ? null : (
        <div
          className="bg-white bg-opacity-90 fixed bottom-20 right-4 z-20 p-4 rounded-full"
          onClick={handleClick}
        >
          <TopIcon />
        </div>
      )}
    </>
  );
}

export default ScrollTopButton;
