import React, { useState } from "react";
import "./App.css";
import Products from "./component/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return <>{showProducts && <Products />}</>;
}
