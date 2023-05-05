// pages/dashboard.js
'use client'
import React from "react";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/searchbar";

const Dashboard = () => {
  const [time, setTime] = React.useState(new Date());
  const [greeting, setGreeting] = React.useState("Good morning");

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setTime(new Date());
    const hours = time.getHours();
    if (hours < 12) {
      setGreeting("Good morning");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  };

  return (
    <div className="flex h-screen bg-slate-300">
      <div className="flex-1 p-10 ">

        <h1 className="md:text-3xl font-bold mb-5">{greeting}, Nithub! 😎</h1>
        <p className="text-gray-700">Have a nice day</p>
      </div>
    </div>
  );
};

export default Dashboard;