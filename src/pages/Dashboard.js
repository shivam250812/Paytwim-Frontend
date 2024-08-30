import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

import { Button } from "../src/components/Button.js";

import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  const [letter, setLetter] = useState("");
  const [userId, setUserId] = useState("");
  const nevigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://paytwin.onrender.com/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setLetter(response.data.name[0]);
        setAmount(response.data.balance);
        setUserId(response.data.userTd);
      });

  }, []);

  const submit = async () => {
    const response = await axios.post(
      "https://paytwin.onrender.com/api/v1/account/addmoney",
      {
        amount,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  };
  return (
    <div>
      <Appbar letter={letter} />
      <div className="m-8 flex justify-between ">
        <Balance value={amount} />

        <div className="flex flex-col justify-center h-ful">
          <Button onClick={(e)=>{
            nevigate("/addmoney?id="+{userId})
          }} label={"Add Money"} />
        </div>
      </div>
      <div className="m-8">
        <Users />
      </div>
    </div>
  );
};
