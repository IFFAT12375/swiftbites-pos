import React, { useState, useEffect } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import ItemList from "../components/ItemList";
const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [selecedCategory, setSelecedCategory] = useState("drinks");
  const categories = [
    {
      name: "Fast Food",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", // 🍔 Burger & Fries Icon
    },
    {
      name: "Main Course",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png", // 🍛 Plate with Cutlery
    },
    {
      name: "Beverages",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", // 🥤 Cold Drink Cup
    },
    {
      name: "Snacks",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/877/877951.png", // 🍿 Popcorn & Snack Icon
    },
    {
      name: "Desserts",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1684/1684381.png", // 🍰 Cake & Sweet Icon
    },
  ];
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    const getAllItems = async () => {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const { data } = await axios.get("/api/items/get-item");
        setItemsData(data);
        dispatch({ type: "HIDE_LOADING" });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, [dispatch]);
  return (
    <DefaultLayout>
      <div className="d-flex">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`d-flex category ${
              selecedCategory === category.name && "category-active"
            }`}
            onClick={() => setSelecedCategory(category.name)}
          >
            <h4>{category.name}</h4>
            <img
              src={category.imageUrl}
              alt={category.name}
              height="40"
              width="60"
            />
          </div>
        ))}
      </div>
      <Row>
        {itemsData
          .filter((i) => i.category === selecedCategory)
          .map((item) => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemList key={item.id} item={item} />
            </Col>
          ))}
      </Row>
    </DefaultLayout>
  );
};

export default Homepage;
