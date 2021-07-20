import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  state = {
    title: "CRUD ReactJs",
    users: [
      {
        id: 1,
        nama: "tika",
        alamat: "jogja",
        umur: 23,
        nohp: "086735373783",
      },
      {
        id: 2,
        nama: "sulis",
        alamat: "pekan baru",
        umur: 20,
        nohp: "08653738899",
      },
      {
        id: 3,
        nama: "arya",
        alamat: "jakarta",
        umur: 23,
        nohp: "08765778899",
      },
      {
        id: 4,
        nama: "arka",
        alamat: "bandung",
        umur: 25,
        nohp: "086735373783",
      },
      {
        id: 5,
        nama: "sulis",
        alamat: "pekan baru",
        umur: 20,
        nohp: "08653738899",
      },
      {
        id: 6,
        nama: "arya",
        alamat: "jakarta",
        umur: 23,
        nohp: "08765778899",
      },
      {
        id: 7,
        nama: "tika",
        alamat: "jogja",
        umur: 23,
        nohp: "086735373783",
      },
      {
        id: 8,
        nama: "sulis",
        alamat: "pekan baru",
        umur: 20,
        nohp: "08653738899",
      },
      {
        id: 9,
        nama: "kinar",
        alamat: "surabaya",
        umur: 26,
        nohp: "08765789779",
      },
      {
        id: 10,
        nama: "regita",
        alamat: "semarang",
        umur: 23,
        nohp: "086735373783",
      },
      {
        id: 11,
        nama: "rama",
        alamat: "pontianak",
        umur: 20,
        nohp: "08653738899",
      },
      {
        id: 12,
        nama: "dinar",
        alamat: "banten",
        umur: 25,
        nohp: "08765789779",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
