import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductType } from "~/Types";
import { CgSearch } from "react-icons/cg";

const ProductCard: FC<{ shoe: ProductType }> = ({ shoe }) => {
  console.log(shoe.image);
  // console.log(shoe.images);
  return (
    <Image
      className="transition-all duration-500 hover:scale-110"
      width={500}
      height={500}
      src={'https://dev-a3dfbw6r.usewafra.com/storage/343/youssef.jpg'}
      alt={shoe.alt}
      // priority
    />
    // <div className="card h-96 w-96 bg-base-300 shadow-xl md:w-80">
    //   <figure>
    //     <Link href={`product/${shoe._id}`}>
    //       <Image
    //         className="transition-all duration-500 hover:scale-110"
    //         width={500}
    //         height={500}
    //         src={shoe.image}
    //         alt={shoe.alt}
    //         // priority
    //       />
    //     </Link>
    //   </figure>
    //   <div className="card-body">
    //     <div className="flex justify-between">
    //       <div className="flex w-full items-center justify-between">
    //         <h2 className="card-title">{shoe.title}</h2>
    //         <Link
    //           href={`product/${shoe._id}`}
    //           className="bade rounded-full bg-base-100 p-2 hover:bg-black hover:text-white "
    //         >
    //           <CgSearch />
    //         </Link>
    //       </div>
    //     </div>
    //     <p> {shoe.price}$ </p>
    //   </div>
    // </div>
  );
};

export default ProductCard;
