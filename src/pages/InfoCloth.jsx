import { useLocation } from "react-router-dom";
import "../css/infoCloth.css"

export function InfoCloth() {
  const { state } = useLocation();
  const cloth = state.product;

  return (
    <div className="container-cloth">
      <div className="cloth">

        <div className="info-cloth">
          <h2 className="cloth-title" >{cloth.title} / {cloth.style}</h2>
          <p><strong>Style:</strong> {cloth.style}</p>
          <p><strong>Description:</strong> {cloth.description}</p>
          <p><strong>Installments:</strong> {cloth.installments}</p>
          <p>
            <strong>Price:</strong>{" "}
            {cloth.isFreeShipping
              ? `${cloth.price} + Free Shipping`
              : `${cloth.price} + Shipping Cost`}
          </p>

          <div>
            <p><strong>Sizes:</strong></p>
            {cloth.sizeList.map((size, index) => (
              <span key={index} className="size-badge">
                {size}
              </span>
            ))}
          </div>
        </div>

        <img src={cloth.img} alt={cloth.title} className="img-cloth" />

      </div>
    </div>
  );
}
