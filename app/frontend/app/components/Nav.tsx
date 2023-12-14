"use client"
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faHouse, faPaperPlane, faMoneyBill, faGavel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { CircleMenu, CircleMenuItem } from "react-circular-menu";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <CircleMenu
          startAngle={180}
          rotationAngle={230}
          itemSize={4}
          radius={9}
          rotationAngleInclusive={false}
          className="nav"
        >
          <CircleMenuItem className="nav-item" tooltip="Transaction History">
            <FontAwesomeIcon icon={faReceipt} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem className="nav-item" tooltip="Bills">
            <FontAwesomeIcon icon={faMoneyBill} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem className="nav-item" tooltip="Auction">
            <FontAwesomeIcon icon={faGavel} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem className="nav-item" tooltip="Properties">
            <FontAwesomeIcon icon={faHouse} className="menu-icons"/>
          </CircleMenuItem>
          <CircleMenuItem className="nav-item" tooltip="Send Money" tooltipPlacement="top">
            <FontAwesomeIcon icon={faPaperPlane} className="menu-icons"/>
          </CircleMenuItem>
        </CircleMenu>
      </div>
    </div>
  );
};

export default Nav;
