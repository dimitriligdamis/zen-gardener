export default function authHeader() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }
  const headerToken = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return headerToken;
}
