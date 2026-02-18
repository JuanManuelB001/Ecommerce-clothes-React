import { Link } from "react-router-dom";
import "../css/card.css"
export function Card({ props }) {
  return (
    <div className="card-container">
      {props?.map((product) => (
        <div key={product.id}>
            <Link to={`info-clothes/${product.id}}`}>
            <h3>{product.title}</h3>

          <div>
            {product.sizeList?.map((size, index) => (
              <span key={index} className="size-list">{size }</span>
            ))}
          </div>
            </Link>
          

        </div>
      ))}
    </div>
  );
}
