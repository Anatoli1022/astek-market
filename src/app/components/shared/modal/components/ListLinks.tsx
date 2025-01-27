import Image from "next/image";

import mail from "@/app/assets/mail.svg";

interface ListLinks {
  activeTab: string | null;
  selectActiveTab: (tab: string) => void;
}

const ListLinks = ({ selectActiveTab, activeTab }: ListLinks) => {
  return (
    <div className='flex flex-col'>
      <button
        className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "profile" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("profile")}
      >
        <span>1</span>
        <span> Данные профиля</span>
      </button>

      <button
        className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "Order status" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("Order status")}
      >
        <span>2</span>
        <span> Состояние заказа</span>
      </button>
      <button
        className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "Order history" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("Order history")}
      >
        <span>3</span>
        <span> История заказов </span>
      </button>
      <button
        className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "payment" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("payment")}
      >
        <span>4</span>
        <span>Форматы оплаты</span>
      </button>
      <button
        className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "delivery" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("delivery")}
      >
        <span>5</span> <span>Доставка</span>
      </button>

      <button
        className={`mt-8 flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "support" ? "" : "opacity-30"}`}
        onClick={() => selectActiveTab("support")}
      >
        <Image src={mail} alt='' loading='lazy' aria-hidden='true' /> <span>Тех. поддержка</span>
      </button>
    </div>
  );
};

export default ListLinks;
