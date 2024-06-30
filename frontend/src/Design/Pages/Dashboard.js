import React from "react";
import ItemList from "../Layouts/ItemList";
import Contnent from "../Layouts/Contnent";

export default function Dashboard() {
  return (
    <div className="bg-light p-5 h-full">
      <div className="container border mainBack p-5">
        <div className="row">
          <div className="col-md-3">
            <div className="p-3 ">
              <ItemList />
            </div>
          </div>
          <div className="col-md-9">
            <div className="p-3 ">
              <Contnent />
            </div>
          </div>
        </div>
      </div>
      <p className="pt-5 text-center fs-7">asd</p>
    </div>
  );
}
