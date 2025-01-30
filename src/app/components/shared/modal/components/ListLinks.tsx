import { type User } from "@supabase/supabase-js";
import Image from "next/image";

import mail from "@/app/assets/mail.svg";

interface ListLinks {
  activeTab: string | null;
  selectActiveTab: (tab: string) => void;
  user: User | null;
}

const ListLinks = ({ selectActiveTab, activeTab, user }: ListLinks) => {
  const handleLogout = async () => {
    await fetch("/api/signout", { method: "POST" });
  };

  return (
    <div className='flex flex-col justify-between gap-y-10'>
      {!user ? ( // Если нет сессии, показываем кнопки логина и регистрации
        <div>
          <button
            className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "login" ? "" : "opacity-30"}`}
            onClick={() => selectActiveTab("login")}
          >
            <span>1</span> <span>Логин</span>
          </button>
          <button
            className={`flex items-center gap-x-2.5 text-left text-xl text-lightGray ${activeTab === "register" ? "" : "opacity-30"}`}
            onClick={() => selectActiveTab("register")}
          >
            <span>2</span> <span>Регистрация</span>
          </button>
        </div>
      ) : (
        <>
          <div>
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

          <div>
            <p className='text-sm text-lightGray'>Компания многопрофильной печати со своим производством и доставкой</p>
            <form
              className='mt-5'
              //  action='/auth/signout'  передаем на какой путь нас перевести req
              method='post'
            >
              <button className='text-sm text-lightGray' onClick={handleLogout}>
                Выйти из профиля
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ListLinks;
