export const baseURL = 'https://lottery-server3174.herokuapp.com/';

export const getApi = async (apiName, params) => {
  let response = await fetch(baseURL + apiName + '?' + params, {
    method: 'GET',
    headers: {
      Connection: 'close',
    },
  });
  return response;
};

export const postApi = async (
  apiName,
  data,
) => {
  let response = await fetch(baseURL + apiName , {
    method: 'POST',
    body: data,
  });
  return response;
};