import React from "react";
import { RiTokenSwapLine } from "react-icons/ri";
import {
  LuCreditCard,
  LuSettings2,
  LuWalletMinimal,
  LuArrowUpToLine,
} from "react-icons/lu";
import { BiScan } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: 1,
    first_name: "100.00 USDT",
    price: "$100.00",
    icon: "https://img.icons8.com/?size=100&id=DEDR1BLPBScO&format=png&color=000000",
  },
  {
    id: 2,
    first_name: "100.00 USDT",
    price: "$100.00",
    icon: "https://img.icons8.com/?size=100&id=DEDR1BLPBScO&format=png&color=000000",
  },
  {
    id: 3,
    first_name: "100.00 USDT",
    price: "$100.00",
    icon: "https://img.icons8.com/?size=100&id=DEDR1BLPBScO&format=png&color=000000",
  },
];

const HomePage = () => {
  return (
    <section className="bg-[#0F0140] h-screen w-full overflow-x-hidden">
      <p className="text-[12px] text-[#8A868A] text-center px-6 py-2">
        Finish setting up your account for maximum security!
      </p>

      <p className="text-[20px] md:text-[12px] text-[#fff] text-left md:text-right px-2">
        0xacmn.....234oop
      </p>

      <header className="h-[225px] bg-[#1D143E] my-4 md:my-10 flex items-center justify-center">
        <section className="flex flex-col justify-between w-full max-w-[1024px] px-4 md:p-6">
          <section className="flex justify-between items-center">
            <p className="text-[#F2EDE4] text-[16px]">Wallet Balance</p>
            <div className="flex gap-4">
              <BiScan color="#B0AFB1" size={25} />
              <IoIosNotificationsOutline color="#B0AFB1" size={25} />
            </div>
          </section>

          <section className="mt-4">
            <p className="text-[#F2EDE4] text-[32px]">$0.00</p>
          </section>

          <section className="flex justify-between mt-4">
            {[
              {
                label: "Send",
                icon: <LuArrowUpToLine size={25} color="#0F0140" />,
              },
              {
                label: "Receive",
                icon: <LuArrowUpToLine size={25} color="#0F0140" />,
                rotate: true,
              },
              {
                label: "Swap",
                icon: <RiTokenSwapLine size={25} color="#0F0140" />,
              },
            ].map(({ label, icon, rotate }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-white text-[14px]"
              >
                <button
                  className={`bg-[#F2E205] rounded-lg h-[60px] w-[60px] flex items-center justify-center cursor-pointer ${rotate ? "rotate-180" : ""
                    }`}
                >
                  {icon}
                </button>
                {label}
              </div>
            ))}
          </section>
        </section>
      </header>

      <main className="h-[575px] md:h-[562px] bg-white overflow-hidden">
        <div className="h-full border">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b text-[#464446] text-[14px] font-[400]">
                  Token
                </th>
                <th className="p-4 border-b text-[#464446] text-[14px] font-[400]">
                  Available
                </th>
              </tr>
            </thead>
          </table>
          <div className="overflow-y-auto h-full">
            <table className="w-full text-center border-collapse">
              <tbody>
                {mockData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <Link
                      to={`/token-details/${item.id}`}
                      className=" border-b w-full flex justify-between"
                    >
                      <td className="p-4 text-[#3D3C3D] text-[14px] font-[400] text-left flex gap-1">
                        <img src={item.icon} className="w-[20px] h-[20px] " /> USDT
                      </td>
                      <td className="p-4 text-[#3D3C3D] text-[14px] font-[400] text-right flex gap-1 flex-col ">
                        {item.first_name} <br />
                        {item.price}
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 bg-white p-6 w-full h-[90px] flex items-center justify-evenly border-t-[1px] border-[#B0AFB1]">
        <Link to="/dashboard">

          <LuWalletMinimal size={25} color="#B0AFB1" />
        </Link>
        <Link to="/p2p" >

          <RiTokenSwapLine size={25} color="#B0AFB1" />
        </Link>
        <LuCreditCard size={25} color="#B0AFB1" />
        <LuSettings2 size={25} color="#B0AFB1" />
      </footer>
    </section>
  );
};

export default HomePage;
