"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>I am parent</h1>
      {/* <button onClick={() => alert("Hello")}>Ok</button> */}
      <Link href="/home">Go to home page</Link>
    </>
  );
}
