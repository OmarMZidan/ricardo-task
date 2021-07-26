import axios from "axios";
import { SearchResponse, ArticleResponse, GetUserResponse } from "./interfaces";

const baseUrl = "https://www.ricardo.ch/api/frontend/recruitment/";
const token = "cf503e4cffb1efa2a3d9b67a82821c1ae2925893";

//get search result based on the input (searchText)
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

// get article details based on article id when the user click single article then make another call to get the user info (seller name)
export const getArticleDetails = async (articleId: string) => {
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
};
