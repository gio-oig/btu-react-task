import { useState } from 'react';

const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (newState) => {
    try {
      console.log(newState);
      const newValue = typeof newState === 'function' ? newState(state) : newState;
      // newValue.push(3);
      console.log(newValue);
      setState(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Unable to store value');
    }
  };

  return [state, setLocalStorage];
};

export default useLocalStorage;
