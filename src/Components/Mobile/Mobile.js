import React from 'react'
import { useProductsContext } from "../Context/Context";

export const Data = [
  {
    id: 1,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 2,
    discount: 40,
    cover: "./images/flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./images/flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./images/flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./images/flash/flash-5.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 6,
    discount: 50,
    cover: "./images/slideCard/slide-3.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 7,
    cover: "./images/shops/shops-1.png",
    name: "Mapple Earphones",
    price: "180",
    discount: "25",
  },
  {
    id: 8,
    cover: "./images/shops/shops-2.png",
    name: "Vivo android one",
    price: "120",
    discount: "10",
  },
  {
    id: 9,
    cover: "./images/shops/shops-3.png",
    name: "Sony Light",
    price: "20",
    discount: "50 ",
  },
  {
    id: 10,
    cover: "./images/shops/shops-4.png",
    name: "Iphone",
    price: "999",
    discount: "10 ",
  },
  {
    id: 11,
    cover: "./images/shops/shops-5.png",
    name: "Ceats wireless earphone",
    price: "80",
    discount: "20 ",
  },
  {
    id: 12,
    cover: "./images/shops/shops-7.png",
    name: "Redimi Phone",
    price: "400",
    discount: "20 ",
  },
  {
    id: 13,
    cover: "./images/shops/shops-8.png",
    name: "Xeats Bluetooth earphones",
    price: "60",
    discount: "5 ",
  },
  {
    id: 14,
    cover: "./images/shops/shops-9.png",
    name: "Airpod",
    price: "120",
    discount: "10",
  },
  {
    id: 15,
    cover: "./images/shops/shops-10.png",
    name: "Silver Cap",
    price: "5",
    discount: "2",
  },
];


export default function Mobile() {

const { addToCart } = useProductsContext();


  return (
    <div className="mobile">
    <h1 className="cen">
    <i class="fa-solid fa-mobile-screen-button"></i> Mobile Phones
    </h1>
    <div className="container">
        {Data.slice(6, 15).map((box) => {
          return (
            <div className="slick" key={box.id}>
              <div className="pad">{box.discount}% off</div>
              <div className="img">
                <img src={box.cover} alt="" />
              </div>
              <p>{box.name}</p>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="flex">
                <p>{box.price}.00</p>
                <button className="btn" onClick={() => addToCart(box.id)}>
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  </div>
  )
}
