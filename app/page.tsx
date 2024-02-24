import Image from "next/image";
import styles from "./page.module.css";
import MyComponent from "@/components/MyComponent/MyComponent";
import Clock from "@/components/clock/clock";
import Counter from "@/components/counter/counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <MyComponent />
      <Clock />
      <Counter />
    </div>
  );
}
