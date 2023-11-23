import React, { useState } from 'react';
import BgMango from "../../assets/images/Mango.png";
import BgA from "../../assets/images/qua-mit.png";
export const getRandomProducts = () => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 4);
};
export const products = [
    {
        id: 1,
        image: BgMango,
        category: "Tráix cây",
        name: "Xoài cát hòa lộc 1Kg",
        rating: 5,
        price: 50000,
        discountedPrice: 80000,
    },
    {
        id: 2,
        image: BgA,
        category: "Tráic Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 3,
        image: BgA,
        category: "Tcrái Cây",
        name: "Mcít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 5,
        image: BgA,
        category: "Trái Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 6,
        image: BgMango,
        category: "Trái cây",
        name: "Xoài cát hòa lộc 1Kg",
        rating: 5,
        price: 50000,
        discountedPrice: 80000,
    },
    {
        id: 7,
        image: BgA,
        category: "Trái Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 8,
        image: BgA,
        category: "Tráids Cây",
        name: "Mít thádi 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 9,
        image: BgA,
        category: "Trái Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 10,
        image: BgMango,
        category: "Trái cây",
        name: "Xoài cát hòa lộc 1Kg",
        rating: 5,
        price: 50000,
        discountedPrice: 80000,
    },
    {
        id: 11,
        image: BgA,
        category: "Trdái Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },
    {
        id: 12,
        image: BgA,
        category: "Trái Cây",
        name: "Mít thái 1Kg",
        rating: 4,
        price: 40000,
        discountedPrice: 60000,
    },

    // ... thêm các sản phẩm khác
];

export default function ProductItems({ products }) {



    return (
        <>
            <div className="grid  grid-cols-4 gap-4 w-full">
                {products.map((product) => (
                    <div key={product.id} className="px-3 py-3 bg-them-gray group hover:group">
                        <div className="mr-4 relative ">
                            <div className="flex justify-center items-center">
                                <img src={product.image} className="w-[200px] h-[150px] px-5 py-5 transition-transform transform scale-100 group-hover:scale-110" alt={product.name} />
                            </div>

                            <div>
                                <ul className="grid grid-cols-3 mt-2 absolute bg-white top-[60%] z-20 text-center px-[5px] py-[10px] w-full transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible -mb-[5px]">
                                    <li className="z-30 relative group">
                                        <i className="fa-regular fa-eye"></i>
                                    </li>
                                    <li className="z-30 relative group">
                                        <i className="fa-solid fa-code-compare group hover:group"></i>
                                    </li>
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Wishlist" className="z-30 relative group">
                                        <a className="notifi-wishlist"><i className="fa-regular fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="mb-2 text-[13px ]">{product.category}</span>
                            {/* Các thông tin khác về trái cây có thể được thêm vào đây */}
                            <h5 className="text-gray-700 overflow-hidden font-[600] text-[16px] mb-2 mt-1 ">{product.name}</h5>
                            <div className="w-full flex mb-2">
                                <div>
                                    {[...Array(product.rating)].map((_, index) => (
                                        <i key={index} className="fa-solid fa-star text-yellow-400 text-[14px] ml-0.5"></i>
                                    ))}
                                </div>
                                <span className="text-[16px] text-gray-400 ml-2 ">({product.rating})</span>
                            </div>
                            <h5>
                                <span className="text-[14px] text-theme-color">{product.price}đ</span>
                                <del className="ml-1">{product.discountedPrice}đ</del>
                            </h5>
                            <div className="flex justify-center items-center ">
                                <button className="text-[16px] mt-[10px] bg-white rounded-[50px] font-medium py-2 w-full relative">
                                    Thêm
                                    <span className="absolute top-1/2 transform translate-y-[-50%] right-1 flex items-center  justify-center  bg-them-gray rounded-full w-9 h-9">
                                        <i className="fa-duotone fa-plus text-theme-color   "></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}

