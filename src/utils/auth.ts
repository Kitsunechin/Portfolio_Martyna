
const PASSWORD = "Kitsune25";

export const checkPassword = (password: string) => {
  return password === PASSWORD;
};

export const storeAuthState = () => {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 12); // Password valid for 12 hours
  
  localStorage.setItem("portfolio_auth", JSON.stringify({
    authenticated: true,
    expires: expiry.toISOString()
  }));
};

export const checkAuthState = () => {
  const authState = localStorage.getItem("portfolio_auth");
  
  if (!authState) {
    return false;
  }
  
  try {
    const { authenticated, expires } = JSON.parse(authState);
    
    if (authenticated && new Date(expires) > new Date()) {
      return true;
    }
    
    // Clear expired auth
    localStorage.removeItem("portfolio_auth");
    return false;
  } catch (error) {
    localStorage.removeItem("portfolio_auth");
    return false;
  }
};
