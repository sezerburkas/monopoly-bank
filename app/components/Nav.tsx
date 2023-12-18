"use client"
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faHouse, faPaperPlane, faMoneyBill, faGavel, faHotel } from "@fortawesome/free-solid-svg-icons";

import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { useRouter } from 'next/navigation';

const Nav = () => {
  const router = useRouter();
  const [openMenu, toggleMenu] = useState(false);

  const openMenuSlide = () => {
    toggleMenu(!openMenu)
  }

  return (
    <div className={"navigation"+((openMenu)?" open":"")}>
      <div className="navigation-container">
        <CircleMenu
          onMenuToggle={openMenuSlide}
          startAngle={90}
          rotationAngle={217}
          itemSize={4}
          radius={9}
          rotationAngleInclusive={false}
          className="nav"
        >
          <CircleMenuItem onClick={() => router.push('/transaction-history')} className="nav-item" tooltip="Transaction History">
            <FontAwesomeIcon icon={faReceipt} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem onClick={() => router.push('/bills')}  className="nav-item" tooltip="Bills">
            <FontAwesomeIcon icon={faMoneyBill} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem onClick={() => router.push('/')}  className="nav-item" tooltip="Home">
            <FontAwesomeIcon icon={faHouse} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem onClick={() => router.push('/auction')} className="nav-item" tooltip="Auction">
            <FontAwesomeIcon icon={faGavel} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem onClick={() => router.push('/properties')}  className="nav-item" tooltip="Properties">
            <FontAwesomeIcon icon={faHotel} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem onClick={() => router.push('/send-money')} className="nav-item" tooltip="Send Money" tooltipPlacement="top">
            <FontAwesomeIcon icon={faPaperPlane} className="menu-icons"/>
          </CircleMenuItem>
        </CircleMenu>
      </div>
    </div>
  );
};

export default Nav;
