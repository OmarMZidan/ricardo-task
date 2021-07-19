import axios from "axios";

const baseUrl = "https://www.ricardo.ch/api/frontend/recruitment/";
const token = "cf503e4cffb1efa2a3d9b67a82821c1ae2925893";

interface ServerResponse {
  data: ServerData;
}
interface Article {
  id: string;
}
interface ServerData {
  totalCount: number;
  articles: Article[];
}

export const getSearchResult = async (searchText: string) => {
  try {
    const response: ServerResponse = await axios.get(`${baseUrl}search`, {
      params: {
        searchText: searchText,
        apiToken: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
