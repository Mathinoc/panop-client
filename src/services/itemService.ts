const baseURL = 'http://localhost:3001/topics';

export function getStock (supplierId: string) {
  return fetch(`${baseURL}/supplier/${supplierId}`, {
    method: 'GET',
  })
    .then(result => result.json())
    .catch(error => console.log(error))
}