const API_URL = 'http://localhost:3001/graphql';

export const fetchPosts = (query) => {
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

export const createComment = ({ query, author, comment }) => {
  // console.log(comment)
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    // body: JSON.stringify({ query: comment.loc.source.body })
    body: JSON.stringify({
      query,
      variables: {
        input: {
          author,
          comment
        }
      }
    })
  })
  .then(res => res.json());
}
