import { useLocation } from "react-router-dom";
import "../css/infoCloth.css";
import { Card } from "../components/Card";
import { UrlData } from "../data/UrlData";
import { useCartStore } from "../components/useCartStore";
import { CartNotification } from "../components/CartNotification";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
export function InfoCloth() {
  const { state } = useLocation();
  const addToCart = useCartStore((state) => state.updateCart);
  const cloth = state.product;
  const data = UrlData("");

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Evita acciones por defecto
    e.stopPropagation(); // Detiene la propagación hacia el Link padre
    addToCart(product);
    console.log(`Producto  agregado`);
    console.log(product);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <>
      <div className="index-page">
        <div>
          <NavBar />

          <div className="container">
            <div className="container-cloth">
              <div className="cloth">
                <div className="info-cloth">
                  <h2 className="cloth-title">
                    {cloth.title} / {cloth.style}
                  </h2>

                  {/* resto del contenido */}
                </div>

                <img src={cloth.img} alt={cloth.title} className="img-cloth" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="title-clothes">More Clothe's</h3>

        <div className="info-card">
          <Card props={data} />
        </div>
      </div>
    </>
  );
}
