import { useEffect } from 'react';
import { Redirect } from 'react-router';

export const Protected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log('access secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth_token'));
    if (!token) {
      return <Redirect to="/auth" />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default Protected;
