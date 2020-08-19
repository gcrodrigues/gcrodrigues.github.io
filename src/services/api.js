import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
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
