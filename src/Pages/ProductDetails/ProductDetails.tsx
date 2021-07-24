import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleDetails } from "../../utils/api";
import { ArticleDetails } from "../../utils/interfaces";
import "./ProductDetails.style.scss";
import DOMPurify from "dompurify";

const ProductDetails = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [productDetails, setProductDetails] = useState<
    ArticleDetails | undefined
  >(undefined);
  const [sellerName, setSellerName] = useState<string | undefined>("");

  useEffect(() => {
    getArticleDetails(articleId).then(({ articleData, userData }) => {
      setProductDetails(articleData?.data);
      setSellerName(userData?.data.name);
      console.log(articleData?.data);
      console.log(userData?.data);
    });
  }, [articleId]);

  return (
    <div className="article">
      {productDetails ? (
        <>
          <div className="article__img">
            <img src={productDetails.imageUrl} alt={productDetails.title} />
          </div>
          <div className="article__content">
            <h2>{productDetails.title}</h2>
            <p>{productDetails.sellerId}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(productDetails.descriptionHtml),
              }}
            ></div>
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ProductDetails;
