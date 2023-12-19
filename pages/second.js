import Link from "next/link";
import React from "react";
import Random from "./random";

const second = () => {
  return (
    <>
      <button type="text"><Link href='/'>First</Link> </button>
      <button type="text"> <Link href='/users'>Users</Link></button>
      <Random />
    </>
  );
};

export default second;
