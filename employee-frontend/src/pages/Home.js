import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  return (
    <div className="container-fluid">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Vehicle Number</th>
              <th scope="col">Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.number}</td>
                <td>{user.time}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    <FaEye />
                  </Link>

                  <Link
                    className="btn btn-success mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    <FiEdit />
                  </Link>

                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    <RiDeleteBin3Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEye } from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin3Fill } from "react-icons/ri";
// import { Link, useParams } from "react-router-dom";
// export default function Home() {
//   const [users, setUsers] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/employees");
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/employee/${id}`);
//     loadUsers();
//   };
//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">S.NO</th>
//               <th scope="col">Product</th>
//               <th scope="col">Base Price</th>
//               <th scope="col">MRP</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr>
//                 <th scope="row" key={index}>
//                   {index + 1}
//                 </th>
//                 <td>{user.productname}</td>
//                 <td>{user.price}</td>
//                 <td>{user.bookmrp}</td>
//                 <td>{user.description}</td>
//                 <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${user.id}`}
//                   >
//                     <FaEye />
//                   </Link>

//                   <Link
//                     className="btn btn-success mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     <FiEdit />
//                   </Link>

//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     <RiDeleteBin3Fill />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
