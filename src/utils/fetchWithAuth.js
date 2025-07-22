export const fetchWithAuth = async (url, options = {}) => {
  let response = await fetch(url, {
    ...options,
    credentials: "include", 
  });

  if (response.status === 401) {
    const refreshResponse = await fetch("http://localhost:3001/refresh-token", {
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
