
import LoadingComp from "@/components/general/LoadingComp";
import ShopContent from "@/components/main/shop/ShopContent";
import * as React from "react";


interface IShopProps {}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
  return (
    <React.Suspense fallback={<LoadingComp />}>
      <ShopContent />
    </React.Suspense>
  );
};

export default Shop;
