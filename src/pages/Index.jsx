import { useEffect, useState } from "react";
import { UrlData } from "../data/UrlData";
import { Card } from "../components/Card";
import "../css/index.css"
export function Index() {
  const [data, setData] = useState();

  const urlData = UrlData("");
  return (
    <div>
      <Card props={urlData} />
    </div>
  );
}
