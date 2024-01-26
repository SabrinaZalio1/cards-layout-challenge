// useHandleClickOutside.ts
import { useEffect, RefObject } from 'react';

type Callback = () => void;

const useHandleClickOutside = (ref: RefObject<HTMLElement>, callback: Callback) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    function stopPropagation(event: MouseEvent) {
      event.stopPropagation();
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('click', stopPropagation);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', stopPropagation);
    };
  }, [ref, callback]);
};

export default useHandleClickOutside;
