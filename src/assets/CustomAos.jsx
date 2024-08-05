import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAos = (options = {}) => {
  useEffect(() => {
    AOS.init({
        duration: 700,
        offset: 40,
        
        easing: 'ease-in-out',
        once: false,
        mirror: false,
      ...options,
    });
  }, [options]);
};

export default useAos;
