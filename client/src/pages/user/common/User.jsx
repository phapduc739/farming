import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function User() {

    const [isUserHovered, setIsUserHovered] = useState(false);

    const handleUserMouseEnter = () => {
        setIsUserHovered(true);
    };

    const handleUserMouseLeave = () => {
        setIsUserHovered(false);
    };

    const subUserAnimate = {
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
                duration: 0.3,
                delay: 0.3
            },
            transitionEnd: {
                display: "none"
            }
        }
    };

    return (
        <>
            <motion.div
                className='z-20 relative h-full flex justify-center items-center'
                onMouseEnter={handleUserMouseEnter}
                onMouseLeave={handleUserMouseLeave}
                >
                <i className="fa-solid fa-user"></i>
                    <motion.div 
                        className='sub-menu bg-white shadow-4-canh absolute top-[50px] right-0 w-[150px] h-auto px-[12px] py-[24px] rounded-[5px] flex flex-col gap-[12px]'
                        initial='exit'
                        animate={isUserHovered ? 'enter' : 'exit'}
                        variants={subUserAnimate}
                        onMouseEnter={handleUserMouseEnter}
                        onMouseLeave={handleUserMouseLeave}
                    >
                    <ul className='flex flex-col gap-[12px] text-[14px] text-grayDark font-medium'>
                        <Link className='py-[2px] border-[2px] border-white hover:border-b-[2px] hover:border-b-greenPrimary transition hover:duration-500 ease-in-out'>
                        Đăng nhập
                        </Link>
                        <Link className='py-[2px] border-[2px] border-white hover:border-b-[2px] hover:border-b-greenPrimary transition hover:duration-500 ease-in-out'>
                        Đăng ký
                        </Link>
                        <Link className='py-[2px] border-[2px] border-white hover:border-b-[2px] hover:border-b-greenPrimary transition hover:duration-500 ease-in-out'>
                        Quên mật khẩu?
                        </Link>
                    </ul>
                    </motion.div>
                </motion.div>
        </>
    )
}
