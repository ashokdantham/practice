import React from "react";
const Todos = ({ todos }) => {
    const [name, setName] = React.useState("Lissa"); 
    console.log("child render");
    const style = {color: "red", backgroundColor: "lightblue"}
    return (
      <>
        <h2 style={style}>My Todos {name}</h2>
        <button onClick={() => setName("Ashok")}>Change Name</button>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };
  
  export default React.memo(Todos);