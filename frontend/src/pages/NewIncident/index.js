import React, { useState } from "react";

import "./styles.css";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    api
      .post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      })
      .then(() => {
        history.push("/profile");
      })
      .catch(error => alert(`Erro no cadastro: ${error}`));
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft height={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          >
            {description}
          </textarea>
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
