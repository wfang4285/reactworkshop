"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./clock.module.css";


export default function Clock() {
  const [times, setTime] = useState(new Date());

  //Making it return/ update return constantly to check time. 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}> 
    <h2> Current Date: {new Date().toLocaleDateString()} </h2>
    <h2> Current Time: {new Date().toLocaleTimeString()} </h2>
    </div>
  );
}
