const protocol = window.location.protocol;
const hostname = window.location.hostname;

// Replace only the frontend port with backend port
export const API_URL = `${protocol}//${hostname.replace("-4173.", "-8181.")}`;

console.log("API_URL:", API_URL);