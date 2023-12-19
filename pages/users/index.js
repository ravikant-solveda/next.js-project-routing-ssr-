import Layout from "@/components/Layout";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const index = ({ users }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <div className="container" style={{height:'494px', overflow:'auto'}} >
        <table className="table table-striped">
            <caption className="top">List of the Contact</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} >
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button type="button" className="btn btn-primary " onClick={()=> {router.push(`/users/${user.id}`)}}>See Detail</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{paddingBottom: '10px'}}>
        <button type="button" onClick={()=>{router.push('/')}}>Index</button>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.log("data did not fetched");
  }
}
