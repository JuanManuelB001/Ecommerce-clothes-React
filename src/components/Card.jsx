import { Link } from "react-router-dom";
import "../css/card.css";
import { GetImage } from "./GetImage";
export function Card({ props }) {
  return (
    <div className="card-container">
      {props?.map((product) => (
        <div key={product.id} className="card-info">
          <Link className="card-img" to={`info-clothes/${product.id}`} state={{ product }}>
            <h3 className="title" >{product.title}</h3>
            <GetImage name = {product.id} png={product.img} />
            <div>
              {product.sizeList?.map((size, index) => (
                <span key={index} className="size-list">
                  {size}
                </span>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
