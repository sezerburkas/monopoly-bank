"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Cookies from "js-cookie";

const SendMoney = () => {
  const [options, setOptions] = useState([]);
  const [userMoney, setUserMoney] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedUser, setSelectedUser] = useState(0);

  const handleSelectedAmount = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    const value = event.target.value;
    if (value > userMoney) {
      setSelectedAmount(userMoney);
    } else {
      setSelectedAmount(value);
    }
  };

  const resetMoney = () => {
    setSelectedAmount(0);
  }

  const addMoney = (value) => {
    const newValue = parseInt(selectedAmount)+parseInt(value);
    if (newValue > userMoney) {
      setSelectedAmount(userMoney);
    } else {
      setSelectedAmount(newValue);
    }
  };

  const handleSelectedUser = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  const sendMoney = async (e) => {
    e.preventDefault();
    const username = Cookies.get("username");

    const formData = new FormData();
    formData.append("from-username", username);
    formData.append("target-username", selectedUser.value);
    formData.append("amount", selectedAmount);

    try {
      const response = await fetch("/api/send-money", {
        method: "POST",
        body: formData,
      });
      setSelectedAmount(0);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // Fetch user data by username from your API
    const fetchUserData = async () => {
      const username = Cookies.get("username");

      if (username) {
        const formData = new FormData();
        formData.append("username", username);

        try {
          const response = await fetch("/api/get-users", {
            method: "POST",
            body: formData,
          });

          const usersData = await response.json();
          const newOptions = [];

          usersData.forEach((user: { username: any }) => {
            // Assuming each user object has properties value and label
            if (user.username != username) {
              newOptions.push({
                value: user.username,
                label: user.username,
              });
            } else {
              setUserMoney(user.balance);
            }
          });

          setOptions(newOptions);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    // Set up interval to fetch data every 5 seconds (adjust as needed)
    const intervalId = setInterval(fetchUserData, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <form className="w-full absolute" onSubmit={sendMoney}>
      <div className="w-full justify-center flex gap-5 px-10 flex-col items-center">
        <div className="w-full sm:w-2/4">
          <Select
            required
            options={options}
            value={selectedUser}
            onChange={handleSelectedUser}
            isSearchable={false}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                background: "transparent",
                color: "#fff",
                height: "55px",
                fontSize: "1.2rem",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                background: "transparent",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
                border: "thin solid #fff",
                fontSize: "1.2rem",
                overflow: "hidden",
                "&:hover": {
                  background: "rgba(0, 0, 0, .3)",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                background: "transparent", // Background color on hover
                "&:hover": {
                  background: "rgba(255, 255, 255, .1)", // Background color on hover
                },
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "#fff", // Change the font color of the selected item
              }),
            }}
          />
        </div>
        <div className="w-full sm:w-2/4">
          <input
            required
            type="number"
            name="value"
            value={selectedAmount}
            min="1"
            max={userMoney}
            step="1"
            onChange={handleSelectedAmount}
            className="form-element"
          />
        </div>
        <div className="w-full sm:w-2/4 justify-center gap-2 flex flex-wrap">
            <span className="quick-select money-1" onClick={() => addMoney(1)}><span className="money-symbol">₩</span>1</span>
            <span className="quick-select money-5" onClick={() => addMoney(5)}><span className="money-symbol">₩</span>5</span>
            <span className="quick-select money-10" onClick={() => addMoney(10)}><span className="money-symbol">₩</span>10</span>
            <span className="quick-select money-20" onClick={() => addMoney(20)}><span className="money-symbol">₩</span>20</span>
            <span className="quick-select money-50" onClick={() => addMoney(50)}><span className="money-symbol">₩</span>50</span>
            <span className="quick-select money-100" onClick={() => addMoney(100)}><span className="money-symbol">₩</span>100</span>
            <span className="quick-select money-500" onClick={() => addMoney(500)}><span className="money-symbol">₩</span>500</span>
            <span className="quick-select money-reset" onClick={() => resetMoney()}>Reset</span>
        </div>
        <div className="w-full sm:w-2/4">
          <button className="btn">Send</button>
        </div>
      </div>
    </form>
  );
};

export default SendMoney;
