import axios from "axios";
import { SearchResponse, ArticleResponse, GetUserResponse } from "./interfaces";

const baseUrl = "https://www.ricardo.ch/api/frontend/recruitment/";
const token = "cf503e4cffb1efa2a3d9b67a82821c1ae2925893";

export const getSearchResult = async (searchText: string) => {
  try {
    const response: SearchResponse = await axios.get(`${baseUrl}search`, {
      params: {
        searchText: searchText,
        apiToken: token,
      },
    });
    return response;
  } catch (error) {}
};

export const getArticleDetails = async (articleId: string) => {
  // try {
  const articleData: ArticleResponse = await axios.get(
    `${baseUrl}article-details`,
    {
      params: {
        articleId: articleId,
        apiToken: token,
      },
    }
  );
  const userData: GetUserResponse = await axios.get(`${baseUrl}user`, {
    params: {
      userId: articleData?.data.sellerId,
      apiToken: token,
    },
  });
  return { articleData, userData };
  // } catch (error) {
  //   console.error(error);
  // }
};
