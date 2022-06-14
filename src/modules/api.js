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

const apiGetMissions = async () => {
  try {
    const res = await fetch(`${API_URL}/missions`);
    return res.json();
  } catch (error) {
    return error;
  }
};

export { apiGetRockets, apiGetMissions };
