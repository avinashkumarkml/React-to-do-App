import React from "react";
import styles from "./MainContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, edit, editUser } from "../../Redux/action";

const MainContainer = () => {
  let editornot = useSelector((store) => store?.editornot);
  let editindex = useSelector((store) => store?.userindex);
  const users = useSelector((store) => store?.users);
  const dispatch = useDispatch();
  let data = {};

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };
  const handleEdit = (index, info) => {
    data = info;
    console.log("hi", info, data);
    dispatch(edit(index));
  };

  const saveEdit = (e, info) => {
    data = {
      ...info,
      [e.target.name]: e.target.value,
    };
  };

  const saveChange = (index) => {
    dispatch(editUser({ index: index, data: data }));
  };
  console.log(data);
  return (
    <div className={styles.container}>
      <table border={2} cellPadding={10} textalign="center">
        <tbody>
          <tr>
            <td>Name</td>
            <td>City</td>
            <td>Country</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>

          {users.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>
                  {editornot && editindex === ind ? (
                    <form onSubmit={() => saveChange(ind)}>
                      <input
                        name="name"
                        type="text"
                        defaultValue={info?.name}
                        onChange={(e) => saveEdit(e, info)}
                      />
                    </form>
                  ) : (
                    info?.name
                  )}
                </td>
                <td>
                  {editornot && editindex === ind ? (
                    <form onSubmit={() => saveChange(ind)}>
                      <input
                        type="text"
                        defaultValue={info?.city}
                        name="city"
                        onChange={(e) => saveEdit(e, info)}
                      />
                    </form>
                  ) : (
                    info?.city
                  )}
                </td>
                <td>
                  {editornot && editindex === ind ? (
                    <form onSubmit={() => saveChange(ind)}>
                      <input
                        type="text"
                        defaultValue={info?.country}
                        name="country"
                        onChange={(e) => saveEdit(e, info)}
                      />
                    </form>
                  ) : (
                    info?.country
                  )}
                </td>
                <td
                  onClick={() => handleEdit(ind, info)}
                  style={{ cursor: "pointer" }}
                >
                  Edit
                </td>
                <td
                  onClick={() => handleDelete(ind)}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainContainer;
