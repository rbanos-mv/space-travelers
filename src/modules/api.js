import API_URL from './environment';

const apiGetRockets = () => fetch(`${API_URL}/rockets`)
  .then((response) => {
    const responseLength = Number(response.headers.get('content-length'));
    if (responseLength > 0) {
      return response.json();
    }
    return [];
  })
  .catch((error) => {
    throw error;
  });

export default apiGetRockets;
