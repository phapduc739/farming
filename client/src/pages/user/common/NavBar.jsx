import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function NavBar(props) {

    console.log(props.links);
    
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
                className='z-20 relative h-[44px] flex justify-center items-center'
                onMouseEnter={handleUserMouseEnter}
                onMouseLeave={handleUserMouseLeave}
                >
                <span className=''>{props.name}<i className="fa-solid fa-angle-down ml-[8px]"></i></span>
                    <motion.div
                        className='sub-menu bg-white shadow-4-canh absolute top-[45px] left-0 w-[200px] h-auto px-[12px] py-[24px] rounded-[5px] flex flex-col gap-[12px]'
                        initial='exit'
                        animate={isUserHovered ? 'enter' : 'exit'}
                        variants={subUserAnimate}
                        onMouseEnter={handleUserMouseEnter}
                        onMouseLeave={handleUserMouseLeave}
                    >
                    <ul className='flex flex-col gap-[12px] text-[14px] text-grayDark font-medium'>
                        {props.links.map((link, index) => (
                            <li key={index}>
                                <Link className='py-[2px] border-[2px] border-white hover:border-b-[2px] hover:border-b-greenPrimary transition hover:duration-500 ease-in-out'>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </motion.div>
                </motion.div>
        </>
    )
}

NavBar.propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string),
};
