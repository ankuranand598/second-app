import React from "react";
import { useState, useEffect } from "react";

function Hotels({
  id,
  name,
  rating,
  votes,
  reviews,
  cost,
  categories,
  payment_methods,
  img,
}) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log("count");
  });

  return (
    <div>
      <p key={id}>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Hotels;
