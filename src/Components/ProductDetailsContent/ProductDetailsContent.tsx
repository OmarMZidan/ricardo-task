import { ArticleDetails } from "../../utils/interfaces";
// using DOMPurify to sanitize HTML and prevents XSS attacks
import DOMPurify from "dompurify";

interface IProps {
  productDetails: ArticleDetails;
  sellerName: string;
}

const ProductDetailsContent = ({ productDetails, sellerName }: IProps) => {
  const { title, subtitle, price, descriptionHtml } = productDetails;
  return (
    <div className="content">
      <h2>{title}</h2>
      {subtitle && <h4 className="content__subtitle">{subtitle}</h4>}
      <hr className="content__divider" />
      <p>
        <span className="content--span">Seller: </span>
        {sellerName}
      </p>
      <p>
        <span className="content--span">Price: </span>
        {price} CHF
      </p>
      <hr className="content__divider" />
      {/* using DOMPurify to sanitize HTML and prevents XSS attacks */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(descriptionHtml),
        }}
      ></div>
    </div>
  );
};

export default ProductDetailsContent;
