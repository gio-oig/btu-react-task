export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    localStorage.setItem('auth_token', data.token);
    return data.token;
  } catch (err) {
    console.trace(err);
    return [];
  }
};
