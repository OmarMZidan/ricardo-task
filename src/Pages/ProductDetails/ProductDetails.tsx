import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleDetails } from "../../utils/api";
import { ArticleDetails } from "../../utils/interfaces";
import "./ProductDetails.style.scss";
import ProductDetailsContent from "../../Components/ProductDetailsContent/ProductDetailsContent";

const ProductDetails = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [productDetails, setProductDetails] = useState<
    ArticleDetails | undefined
  >(undefined);
  const [sellerName, setSellerName] = useState<string>("");

  useEffect(() => {
    getArticleDetails(articleId).then(({ articleData, userData }) => {
      setProductDetails(articleData?.data);
      setSellerName(userData?.data.name);
    });
  }, [articleId]);

  return (
    <div className="article">
      {productDetails ? (
        <>
          <div className="img">
            <img src={productDetails.imageUrl} alt={productDetails.title} />
          </div>
          <ProductDetailsContent
            productDetails={productDetails}
            sellerName={sellerName}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ProductDetails;
