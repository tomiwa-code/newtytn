import Product from "@/components/general/Product";
import * as React from "react";

interface IFavoritesProps {}

const Favorites: React.FunctionComponent<IFavoritesProps> = (props) => {
  const products = [
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877393/tytn/products/b2e46750418af48a83c279462267dd0d_ftbfbn.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877396/tytn/products/pullover_pyehgj.jpg",
    },
  ];

  return (
    <div className="w-[80%] left-[20%] pt-12 relative flex flex-col">
      <div className="w-full flex gap-x-10 flex-wrap gap-y-12">
        {products.map(({ link }, index) => (
          <Product key={index} link={link} text={null} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
