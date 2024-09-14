import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import BasicNav from "../../atom/nav/BasicNav";
import AccountAuth from "../../molecules/account/AccountAuth";
import Basicheader from "./header/Basicheader";
import SecurePaymentCard from "../../molecules/cards/SecurePaymentCard";
import CheckoutCard from "../../molecules/cards/CheckoutCard";


function CheckOutLogin() {
  const navigate = useNavigate();

  const handleOnLogin = ({ data }) => {
    console.log("data: ", data);
    navigate("/checkout/details");
  };

  useEffect(() => {
    if (Cookies.get("isAuth") == "true") {
      navigate("/checkout/details");
    }

    document.body.classList.add("bg-[#f2f2f2]");
    return () => {
      document.body.classList.remove("bg-[#f2f2f2]");
    };
  }, []);
  return (
    <>
      <Basicheader num={1} title={"Login/Register"} />
      <div className="md:hidden">
        <section className="px-3 mt-20 flex flex-col gap-3">
          <AccountAuth handleOnLogin={handleOnLogin} />
          <SecurePaymentCard />
        </section>
      </div>
      <div className="hidden md:flex justify-center gap-4 items-start py-20 mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <CheckoutCard stepNumber={1}>
            <AccountAuth
              className="shadow-none border-none w-[23vw]"
              handleOnLogin={handleOnLogin}
            />
          </CheckoutCard>

          {/* Card 2 */}
          <CheckoutCard stepNumber={2} title="ORDER & DELIVERY DETAILS" />

          {/* Card 3 */}
          <CheckoutCard stepNumber={3} title="PAYMENT OPTIONS" />
        </div>
        <SecurePaymentCard />
      </div>
    </>
  );
}

export default CheckOutLogin;
