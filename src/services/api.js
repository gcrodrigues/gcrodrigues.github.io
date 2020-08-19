import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer b015824201eaffcb7060ff53a6ca2c744f9340b4",
  },
});

export const GET_PINNED_REPOS = `
  {
    user(login: "gcrodrigues") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            homepageUrl
            url
          }
        }
      }
    }
  }
`;

export default api;
