const API_URL = 'http://localhost:3001/graphql';

export const graphqlRequest = (query) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query: query.loc.source.body })
  })
  .then(res => res.json());
}
