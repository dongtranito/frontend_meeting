const API_URL = import.meta.env.VITE_API_URL;

export const fetchWithAuth = async (url, options = {}) => {
  let response = await fetch(url, {
    ...options,
    credentials: "include", 
  });

  if (response.status === 401) {
    const refreshResponse = await fetch(`${API_URL}/refresh-token`, {
      method: "POST",
      credentials: "include", 
    });


    if (refreshResponse.ok) {
      response = await fetch(url, {
        ...options,
        credentials: "include",
      });
    } else {
      throw new Error("Phiên đăng nhập đã hết. Vui lòng đăng nhập lại.");
    }
  }

  return response;
};
