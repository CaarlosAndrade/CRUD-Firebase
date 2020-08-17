import React from "react";

//importando o css
import "./login.css";

export default (props) => (
  <>
    <section className="login-page">
      <div className="login-container">
        <h1>Faça seu Login</h1>
        <div className="formulario">
          <form action="/teste">
            <label htmlFor="username">Email</label>
            <input type="text" name="email" id="email" autoComplete="off" />
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              autoComplete="off"
            />
          </form>
          <section className="login-buttons">
            <p>Esqueci a senha</p>
            <button>Entrar</button>
          </section>
        </div>
      </div>
    </section>
  </>
);
