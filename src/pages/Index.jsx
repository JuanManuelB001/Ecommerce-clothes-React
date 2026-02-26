import { useEffect, useState } from "react";
import { UrlData } from "../data/UrlData";
import { Card } from "../components/Card";
import "../css/index.css"
import { NavBar } from "../components/NavBar";
export function Index() {
  const [data, setData] = useState();

  const urlData = UrlData("");
  return (
    <div>
      <NavBar/>
      <Card props={urlData} />
    </div>
  );
}
