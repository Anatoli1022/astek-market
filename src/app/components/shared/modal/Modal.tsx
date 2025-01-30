"use client";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";

import plus from "@/app/assets/plus.svg";
import userImage from "@/app/assets/user.svg";

import Delivery from "./components/Delivery";
import HistoryOrder from "./components/HistoryOrder";
import ListLinks from "./components/ListLinks";
import LoginForm from "./components/login/LoginForm";
import OrderStatus from "./components/OrderStatus";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import RegisterForm from "./components/registration/RegisterForm";
import Support from "./components/Support";
interface ModalProps {
  user: User | null;
}
const Modal = ({ user }: ModalProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggle = () => (setActiveTab(null), setOpenModal((prevState) => !prevState));
  const selectActiveTab = (string: string) => setActiveTab(string);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile user={user} />;

      case "Order status":
        return <OrderStatus />;

      case "Order history":
        return <HistoryOrder />;

      case "payment":
        return <Payment />;

      case "delivery":
        return <Delivery />;

      case "support":
        return <Support />;

      case "login":
        return <LoginForm />; // Компонент для логина
      case "register":
        return <RegisterForm />; // Компонент для регистрации

      // default:
      //   <div className='opacity-0'>f</div>;
    }
  };

  return (
    <div
      className={`flex flex-col rounded-md bg-white p-2.5 shadow-md ${openModal && "absolute right-0 top-0 w-full p-5"} ${!activeTab ? "max-w-[300px]" : "max-w-[820px]"} `}
    >
      <div className='flex w-full justify-between'>
        {openModal && <Image src={userImage} alt='' loading='eager' aria-hidden='true' />}
        <button type='button' onClick={toggle}>
          {!openModal ? (
            <Image src={userImage} alt='' loading='eager' aria-hidden='true' />
          ) : (
            <Image src={plus} className='rotate-45' alt='' loading='eager' aria-hidden='true' />
          )}
        </button>
      </div>

      {openModal && (
        <div className={`mt-7 flex w-full ${activeTab && "gap-x-24"}`}>
          <ListLinks user={user} selectActiveTab={selectActiveTab} activeTab={activeTab} />
          <div className={`max-w-[470px] ${activeTab && "w-full"}`}> {renderContent()}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
