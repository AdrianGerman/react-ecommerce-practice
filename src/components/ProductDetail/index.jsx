import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  // console.log(context.productToShow);

  return (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"}
        flex-col fixed right-0 border bg-[#242424] border-white rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalles</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-4">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          ${context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          ${context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
