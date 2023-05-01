import React from 'react';
import Typed from 'react-typed';

const SwiperText = () => {
  const options = {
    strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  return (
    <p>
      I'm <Typed {...options} />
    </p>
  );
};

export default SwiperText;
