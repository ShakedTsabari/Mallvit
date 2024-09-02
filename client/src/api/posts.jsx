let baseUrl;

if (import.meta.env.MODE === 'development') {
  baseUrl = import.meta.env.VITE_DEV_BASE_URL;
} else if (import.meta.env.MODE === 'production') {
  baseUrl = `${import.meta.env.VITE_PROD_BASE_URL}/malls/`;
  console.log('baseurl of prod: '+ baseUrl);
}
export const fetchPosts = async (partialUrl) => {
    try {
      const url = baseUrl + partialUrl;
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
      }
      const posts = await response.json();
      return posts;
    } catch (error) {
    console.error('Error fetching posts:', error);
    }
};

export const addPost = async (partialUrl, newPost) => {
    try {
      const url = baseUrl + partialUrl;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting the post:', error);
    }
};

export const fetchPostById = async (partialUrl) => {
  try {
    const url = baseUrl + partialUrl;
    console.log('Fetching post from URL:', url);
    const response = await fetch(url);
    console.log(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched Post Data:', data); // For demonstration
    return data;
  } catch (err) {
    console.error(err);
  }
};