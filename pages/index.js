import Link from "next/link";
import Layout from "./../components/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const clickHandler = () =>{
        router.push(`/second`)
  }
  return (
    <div>
      <div>
        <h1>Hello Ibna Batuta</h1>
        
        <button type="text" onClick={clickHandler}>Go to second</button>
      </div>
    </div>
  );
}
