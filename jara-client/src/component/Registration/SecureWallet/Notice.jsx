import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import para from "../../../constant/paraClient";

const Notice = ({ onClose, email }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    setIsLoading(true);
    try {
      const authUrl = await para.getSetUpBiometricsURL({
        authType: "email",
        isForNewDevice: false,
      });
      window.open(authUrl, "signUpPopup", "popup=true");

      console.log("para.wallets:", para.wallets);

      const { walletIds, recoverySecret } =
        await para.waitForPasskeyAndCreateWallet();
      console.log("walletIds:", walletIds, "recoverySecret:", recoverySecret);

      const fetchWallet = await para.findWallet(walletIds.EVM[0]);
      console.log(recoverySecret);
      console.log(fetchWallet.address);

      navigate("/wallet-showcase", {
        state: {
          wallet: fetchWallet.address,
          recoverySecret: recoverySecret,
        },
      }); 

      onClose();
    } catch (error) {
      console.error("Wallet generation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 min-h-screen p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 space-y-6 text-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-[22px] font-bold text-[#F21B1B]">Notice!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-[#F21B1B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>

          <p className="text-[16px] text-[#262526] ">
            Please make sure to securely store your secret phrase.
          </p>

          <button
            disabled={isLoading}
            onClick={handleContinue}
            className={`w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg bg-[#F2E205] text-sm font-medium text-gray-700 hover:bg-yellow-200 focus:outline-none ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>Continue</>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notice;
