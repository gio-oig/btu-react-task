export const getPcparts = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_PC_PARTS_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.trace(err);
    return [];
  }
};
