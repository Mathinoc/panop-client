const baseURL = 'http://localhost:3001/topics';

export function getAllItems () {
  const options = {
    method: 'GET',
  }
  return fetch(`${baseURL}/items`, options)
    .then(result => result.json())
    .catch(error => console.error(error))
}
export function getItem (itemId: string) {
  const options = {
    method: 'GET',
  }
  return fetch(`${baseURL}/item/${itemId}`, options)
    .then(result => result.json())
    .catch(error => console.error(error))
}