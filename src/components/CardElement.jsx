import { useState } from "react";
import { useCartStore } from "./useCartStore";
import "../css/cardElement.css";
import { Link } from "react-router-dom";
import { GetImage } from "./GetImage";
import { ConfirmDelete } from "./ConfirmDelete";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export function CardElement() {
  const cart = useCartStore((state) => state.cart);
  const deleteElement = useCartStore((state) => state.removeItemCart);

  const [showConfirm, setShowConfirm] = useState(false);
  const [clothId, setClothId] = useState(null);

  const handleConfirmDelete = () => {
    deleteElement(clothId);
    console.log(`Producto ${clothId} Eliminado`);
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const deleteClothId = (id) => {
    setClothId(id);
    setShowConfirm(true);
  };

  return (
    <>
      <Swiper
        className="netflix-swiper"
        modules={[Navigation]}
        navigation
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
      >
        {cart.map((item) => (
          <SwiperSlide key={item.id} className="netflix-slide">
            <div className="netflix-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>

            <div className="button-cart">
              <button onClick={() => deleteClothId(item.id)}>Delete</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showConfirm && (
        <ConfirmDelete
          message="¿Seguro que quieres eliminar este producto?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}
