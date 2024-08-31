const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3000/malls/";

export const fetchMallObject = async (partialUrl) => {

    try {
      const url = baseUrl + partialUrl;
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