export const USERS = [
  { id: 1, email: 'gomesr333@gmail.com', password: 'root' }
]

export function authenticate(email: string, password: string) {
  const user = Object.values(USERS).find(u => u.email === email);

  if (user && user.password == password)
    return user;
  else
    return undefined;
}