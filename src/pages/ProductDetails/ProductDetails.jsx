import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return <div>ProductDetails = {params.postId}</div>;
};

export default ProductDetails;
