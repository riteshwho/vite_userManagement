import { useState } from "react";
import "./App.css";
import AddCard from "./Component/AddCard";
import Data from "./Component/Data";
import CardList from "./Component/CardList";



function App() {
  const [users, setUsers] = useState(Data);
  const [editableUser, setEditableUser] = useState(null);

  function addUsers(user) {
    setUsers([...users, { ...user, id: Data.length + 1 }]);
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function editUser(id) {
    setEditableUser(users.find((user) => user.id === id));
  }

  function updateUser(user) {
    const index = users.findIndex((u) => u.id === user.id);
    const newUsers = [...users];
    newUsers.splice(index, 1, user);
    setUsers(newUsers);
  }
  return (
    <>
      <AddCard
        addUsers={addUsers}
        editableUser={editableUser}
        updateUser={updateUser}
      />
      <CardList users={users} deleteUser={deleteUser} editUser={editUser} />

      
    </>
  );
}

export default App;
