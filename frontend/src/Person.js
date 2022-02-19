import React from "react";

function Person(props) {
  return (
    <div>{`${props.person.name}, ${props.person.age} , ${props.person.children}`}</div>
  );
}

export default Person;
