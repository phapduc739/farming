import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "react-feather";
import { Heart } from "react-feather";
import { ShoppingCart } from "react-feather";
import { User } from "react-feather";

export default function Navigation() {
  return (
    <>
      <div className="h-[50px] flex justify-end items-center gap-[12px] text-[20px] text-grayDark">
        <Link>
          <PhoneCall name="phone" size={24} color="black" />
        </Link>
        |
        <Link>
          <Heart name="heart" size={24} color="black" />
        </Link>
        |
        <Link>
          <ShoppingCart name="cart" size={24} color="black" />
        </Link>
        |
        <Link>
          <User name="user" size={24} color="black" />
        </Link>
      </div>
    </>
  );
}
