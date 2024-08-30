import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/SignIN";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import PaymentSuccessPopup from "./pages/PaymentPopup";
import { Addmoney } from "./pages/Addmoney";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/addmoney" element={<Addmoney />} />
        </Routes>
      </BrowserRouter>
      {/* <PaymentSuccessPopup></PaymentSuccessPopup> */}
    </>
  );
}

export default App;
