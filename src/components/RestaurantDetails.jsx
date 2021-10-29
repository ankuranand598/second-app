import React from "react";
import { useState } from "react";
import Hotels from "./Restaurant";
import { nanoid } from "nanoid";
function Details() {
  let [text, setText] = useState("");
  let [newobj, setNewObj] = useState({
    id: nanoid(),
    name: "",
    rating: "",
    votes: "",
    reviews: "",
    cost: "",
    categories: "",
    payment_methods: {
      card: false,
      cash: false,
      upi: false,
    },
    img: "",
  });
  let [obj1, setObj1] = useState([]);
  let obj = [
    {
      id: nanoid(),
      name: "Taj Hotel",
      rating: 5,
      votes: 654,
      reviews: 100,
      cost: 1000,
      categories: ["continential", "pizza", "italian", "indian"],
      payment_methods: {
        card: true,
        cash: true,
        upi: true,
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EzC4ynnbrz6syjKsm0QQTyDZR_mqpRCRiXUThtp_cl3MxTZtD_sOo1KNKezs2a9t_O0&usqp=CAU",
    },
    {
      id: nanoid(),
      name: "Oberoi Hotel",
      rating: 4.5,
      votes: 840,
      reviews: 1000,
      cost: 5000,
      categories: ["continential", "italian", "indian"],
      payment_methods: {
        card: true,
        cash: true,
        upi: false,
      },
      img: "https://cdn.theculturetrip.com/wp-content/uploads/2021/02/d9fc611f-650x366.jpg",
    },
    {
      id: nanoid(),
      name: "Sangam-Vihar Hotel",
      rating: 5,
      votes: 600,
      reviews: 700,
      cost: 600,
      categories: ["continential", "italian", "indian", "punjabi"],
      payment_methods: {
        card: false,
        cash: true,
        upi: false,
      },
      img: "https://holxo-web-s3.s3.amazonaws.com/media/blogs/coverimages/post_cvimg_1589194431_3692043__taj-falaknuma-palace.jpeg",
    },
    {
      id: nanoid(),
      name: "Nanda Hotel",
      rating: 3,
      votes: 400,
      reviews: 800,
      cost: 700,
      categories: ["continential", "italian", "indian", "punjabi"],
      payment_methods: {
        card: true,
        cash: false,
        upi: false,
      },
      img: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2018/06/Hotels-in-India.jpg",
    },
    {
      id: nanoid(),
      name: "Annapurna Hotel",
      rating: 3,
      votes: 440,
      reviews: 870,
      cost: 750,
      categories: ["italian", "indian", "punjabi"],
      payment_methods: {
        card: true,
        cash: false,
        upi: false,
      },
      img: "https://www.theasiacollective.com/wp-content/uploads/2020/03/Evolve-Back-Hampi-3.jpg",
    },
    {
      id: nanoid(),
      name: "c square",
      rating: 5,
      votes: 740,
      reviews: 670,
      cost: 550,
      categories: ["italian", "indian", "punjabi"],
      payment_methods: {
        card: true,
        cash: true,
        upi: true,
      },
      img: "https://content3.jdmagicbox.com/comp/durgapur/y3/9999px343.x343.190817033055.g8y3/catalogue/c-square-durgapur-restaurants-jwqeu8glv0.jpg",
    },
    {
      id: nanoid(),
      name: "Concerto square",
      rating: 4,
      votes: 540,
      reviews: 970,
      cost: 500,
      categories: ["italian", "indian", "punjabi", "pizza"],
      payment_methods: {
        card: false,
        cash: true,
        upi: false,
      },
      img: "https://static.toiimg.com/thumb/msid-59755409,width-1070,height-580,resizemode-75,imgsize-1154043,pt-32,y_pad-40/59755409.jpg",
    },
  ];
  let handleObj = (e) => {
    const { name, value } = e.target;
    setNewObj({ ...newobj, [name]: value });
  };
  let handleSubmit = () => {
    console.log(newobj);
    let x = newobj;
    obj1.push(newobj);
    setObj1(obj1);
    console.log(obj1);
  };
  return (
    <div>
      {/* <form> */}
      <p>
        Name:
        <span>
          <input
            type="text"
            // value={text}
            className="name"
            name="name"
            onChange={(e) => {
              newobj.name = e.target.value;
              setText(newobj.name);
            }}
          />
        </span>
      </p>
      <p>
        rating:
        <span>
          {" "}
          <input
            type="number"
            className="name"
            onChange={(e) => {
              newobj.rating = e.target.value;
              //setText(newobj.rating);
            }}
            name="rating"
          />
        </span>
      </p>
      <p>
        votes:
        <span>
          {" "}
          <input
            type="number"
            className="name"
            onChange={(e) => {
              newobj.votes = e.target.value;
              //setText(e.target.value);
            }}
            name="votes"
          />
        </span>
      </p>
      <p>
        reviews:
        <span>
          {" "}
          <input
            type="number"
            className="name"
            onChange={(e) => {
              newobj.reviews = e.target.value;
              // setText(e.target.value);
            }}
            name="reviews"
          />
        </span>
      </p>
      <p>
        cost:
        <span>
          {" "}
          <input
            type="number"
            className="name"
            onChange={(e) => {
              newobj.cost = e.target.value;
              //setText(e.target.value);
            }}
            name="cost"
          />
        </span>
      </p>
      <p>
        categories:
        <span>
          {" "}
          <input
            type="text"
            className="name"
            onChange={(e) => {
              newobj.categories = e.target.value;
              //setText(e.target.value);
            }}
            name="categories"
          />
        </span>
      </p>
      <p>
        payment_methods:
        <span>
          <input
            type="radio"
            className="name"
            name="card"
            onClick={(e) => {
              //console.log(e.target);
              newobj.payment_methods.card = e.bubbles;
              //setText(newobj.payment_methods.card);
            }}
          />
          <input
            type="radio"
            className="name"
            name="cash"
            onClick={(e) => {
              //console.log(e.target);
              newobj.payment_methods.cash = e.bubbles;
              setText(newobj.payment_methods.cash);
            }}
          />
          <input
            type="radio"
            className="name"
            name="upi"
            onClick={(e) => {
              //console.log(e.target);
              newobj.payment_methods.upi = e.bubbles;
              setText(newobj.payment_methods.upi);
            }}
          />
        </span>
      </p>
      <p>
        image:
        <span>
          {" "}
          <input
            type="text"
            className="name"
            placeholder="image url"
            name="image"
            onChange={(e) => {
              //console.log(e.target);
              newobj.img = e.target.value;
              // setText(newobj.payment_methods.cash);
            }}
          />
        </span>
      </p>
      <button onClick={handleSubmit}>add</button>
      {/* </form> */}
      <h1>Hello</h1>
      {obj1.map((el) => {
        //console.log(el.name);
        return (
          <div>
            <Hotels
              id={el.id}
              name={el.name}
              rating={el.rating}
              votes={el.votes}
              reviews={el.reviews}
              cost={el.cost}
              categories={el.categories}
              payment_methods={el.payment_methods}
              img={el.img}
            />
          </div>
        );
      })}

      {console.log("obj1", obj1)}
    </div>
  );
}
export default Details;
