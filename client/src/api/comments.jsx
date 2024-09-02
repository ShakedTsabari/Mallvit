
let baseUrl;

if (import.meta.env.MODE === 'development') {
  baseUrl = import.meta.env.VITE_DEV_BASE_URL;
} else if (import.meta.env.MODE === 'production') {
  baseUrl = `${import.meta.env.VITE_PROD_BASE_URL}/malls/`;
  console.log('baseurl of prod: '+ baseUrl);
}
export const addComment = async(newComment, partialUrl) => {

    try {
      const url = `${baseUrl}${partialUrl}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      console.log('New Comment Submitted:', newComment); // For demonstration
      return data;
    } catch (err) {
      console.error(err);
    }
  }