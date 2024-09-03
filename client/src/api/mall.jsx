let baseUrl;

if (import.meta.env.MODE === 'development') {
  baseUrl = import.meta.env.VITE_DEV_BASE_URL;
  console.log('baseurl of development: '+ baseUrl);
} else if (import.meta.env.MODE === 'production') {
  baseUrl = `${import.meta.env.VITE_PROD_BASE_URL}/malls/`;
  console.log('baseurl of prod: '+ baseUrl);
}
export const fetchMallObject = async (partialUrl) => {

    try {
      const url = `${baseUrl}${partialUrl}`;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch mall: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch mall:', error);
    }
  };

export const fetchMalls = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch malls:', error);
    }
};