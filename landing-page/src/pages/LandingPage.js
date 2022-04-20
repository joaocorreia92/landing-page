import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import aircraft from "../assets/aircraft.jpg";
import axios from "axios";
import Select from "react-select";

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => {
        const states = res.data
        const response = states.map((state) => ({
          value: state.nome,
          label: state.nome
        }))
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <div className="side-image">
        <img src={aircraft} alt="Planing aircraft." className="image" />
      </div>
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Landing Page</h3>
          </div>
          <div className="item-menu">
            <a href="#" className="">
              Login
            </a>
          </div>
        </div>

        <div>
          <h2>Entre em contato!</h2>
          <form className="form">
            <div className="items-form">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Rua"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Número"
              ></input>
              <Select options={data} />
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
