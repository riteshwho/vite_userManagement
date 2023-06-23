import "./Card.css";
const Card = ({ name, email, phone, deleteUser, id, editUser }) => {
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteUser(id)}>
          Delete
        </button>
        <button className="edit" onClick={() => editUser(id)}>
          Edit
        </button>
        <h2>
          Name: <span style={{backgroundColor: "white"}}>{name}</span>
        </h2>
        <h2>
          Email: <span style={{backgroundColor: "white"}}>{email}</span>
        </h2>
        <h2>
          Phn No: <span style={{backgroundColor: "white"}}>{phone}</span>
        </h2>
      </div>

    </>
  );
};

export default Card;
