import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const userId = ({ user }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log('asdflkaalsdfjlskajflksjflksdj',router.query);
  return (
    <>
      <div className="container p-4">
        <div className="text-center">
          <h4>Account Details {user.id}</h4>
        </div>
        
        <table className="table" style={{ width: "60%", margin: "auto"}}>
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">UserName</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th scope="row">Website</th>
              <td>{user.website}</td>
            </tr>
            <tr>
              <th scope="row">Comapany</th>
              <td>{user.company.name}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>
                {user.address.street} {user.address.suite} {user.address.city}{" "}
                {user.address.zipcode}
              </td>
            </tr>
            <tr>
              <th scope="row">Geography</th>
              <td>{`${user.address.geo.lat} ,${user.address.geo.lng}`} </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-md"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Back to Dashboard
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <div>

        <Link href='/users'>Go To index</Link>
      
      </div>
</>
  );
};

export default userId;

export async function getServerSideProps (context) {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${context.query.id}`
    );
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.log("error found", error);
  }
}
