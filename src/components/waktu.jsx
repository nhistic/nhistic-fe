import React, { useState, useEffect } from "react";


function Waktu() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <span>{date.toLocaleTimeString("id-ID")}</span>;
}

export default Waktu;