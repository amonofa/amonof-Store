"use client";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateProps } from "../../type";
import { X } from "lucide-react";
import {deleteFavorite} from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Cart = () => {

  const {favoriteData} = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();

  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="mt-5 flex flex-col">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Unit Price
                  </th>
                </tr>
              </thead>
              {favoriteData.map((item: ProductType) => (
                <tbody key={item?._id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(deleteFavorite(item?._id)),
                            toast.success(
                              `${item.title} is removed from Wishlist!`
                            );
                        }}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                      <Image
                        src={item?.image}
                        alt="proudct image"
                        width={500}
                        height={500}
                        className="w-24 object-contain"
                      />
                  
                    </th>
                    <td>
                        <th>
                        <p className="text-base font-medium text-black">
                        {item?.title}
                      </p>
                        </th>
                    </td>
                    <td className="px-6 py-4">
                      <FormattedPrice amount={item?.price} />
                    </td>
    
               
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

         
        </div>
      ) : (
        <div className="py-10 flex flex-col gap-1 items-center justify-center">
          <p className="text-lg font-bold">Your Cart is Empty</p>
          <Link
            href={"/"}
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default Cart;
