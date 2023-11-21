import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Cart() {

    const [isCartHovered, setIsCartHovered] = useState(false);

    const handleCartMouseEnter = () => {
        setIsCartHovered(true);
    };

    const handleCartMouseLeave = () => {
        setIsCartHovered(false);
    };

    const subCartAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.6
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.6,
                delay: 0.5
            },
            transitionEnd: {
                display: "none"
            }
        }
    };

    const productCartList = [
        {
        id: '1',
        name: 'Cà chua An Giang xuất khẩu',
        quantity: '1',
        price: 'đ14.000',
        imageUrl: 'src/assets/images/cachua.png',
        },

        {
        id: '2',
        name: 'Cà chua An Giang xuất khẩu',
        quantity: '1',
        price: 'đ14.000',
        imageUrl: 'src/assets/images/cachua.png',
        },
        
        {
        id: '3',
        name: 'Cà chua An Giang xuất khẩu',
        quantity: '1',
        price: 'đ14.000',
        imageUrl: 'src/assets/images/cachua.png',
        },
    ];

    return (
        <>
            <motion.div
                className='z-20 relative h-full flex justify-center items-center'
                onMouseEnter={handleCartMouseEnter}
                onMouseLeave={handleCartMouseLeave}
                >
                <div className='absolute top-0 right-[-10px] bg-redDark w-[21px] h-[21px] pt-[2px] pr-[1px] rounded-[3px] flex justify-center items-center'>
                    <p className='text-[10px] text-white font-semibold'>0</p>
                </div>
                <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
                    <motion.div
                        className='sub-menu bg-white shadow-4-canh absolute top-[50px] right-0 w-[300px] h-auto px-[18px] py-[24px] rounded-[5px]'
                        initial='exit'
                        animate={isCartHovered ? 'enter' : 'exit'}
                        variants={subCartAnimate}
                        onMouseEnter={handleCartMouseEnter}
                        onMouseLeave={handleCartMouseLeave}
                    >
                        {productCartList.map((product) => (
                            <Link key={product.id} className='flex justify-center items-start mb-[12px]'>
                            <div className='w-[100px] h-[70px] bg-grayLight2 rounded-[3px]'>
                                <img className='w-full h-full object-fill ' src={product.imageUrl} alt="Ca chua" />
                            </div>
                            <div className='flex-1 overflow-hidden'>
                                <div className='flex justify-end text-[14px] text-grayDark font-regular'>
                                <i className="fa-solid fa-xmark"></i>
                                </div>
                                <div className='pl-[12px] w-full'>
                                <h3 className='text-[16px] text-greenPrimary font-semibold truncate'>{product.name}</h3>
                                <p className='text-[14px] text-grayDark font-regular'>{product.quantity} x {product.price}</p>
                                </div>
                            </div>
                            </Link>
                        ))}

                        <div className='totals w-full h-auto pt-[12px] border-t-[2px] border-grayLight2 mb-[12px]'>
                            <div className='flex justify-between items-center'>
                            <h3 className='text-[16px] text-grayDark font-regular'>Tổng cộng:</h3>
                            <h4 className='text-[18px] text-greenPrimary font-semibold'>đ42.000</h4>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <Link className='text-[14px] text-greenPrimary font-medium px-[15px] py-[8px] border-[2px] border-greenPrimary rounded-[3px] hover:bg-greenPrimary hover:text-white transition duration-300 ease-in'>
                            Chi tiết
                            </Link>
                            <Link className='text-[14px] text-white font-medium bg-greenPrimary px-[15px] py-[8px] border-[2px] border-greenPrimary rounded-[3px] hover:bg-greenDark transition duration-300 ease-in'>
                            Thanh toán
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
        </>
    )
}
