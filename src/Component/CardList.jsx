import Card from "./Card";

const CardList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="component">
      {users.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          email={item.email}
          phone={item.phone}
          id={item.id}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default CardList;
