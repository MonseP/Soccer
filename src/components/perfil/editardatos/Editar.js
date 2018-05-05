import React, { Component } from 'react';


class Editar extends React.Component {

  render() {
    return (




<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="first-name">Nombre:</label>
        <input type="text" placeholder="Nombre"/>
      </li>
      <li>
          <label for="email">Correo:</label>
        <input type="email"  placeholder="Email"/>
      </li>


    </ul>
  </form>
</div>


    );
  }
}

export default Editar;
