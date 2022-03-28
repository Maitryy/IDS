import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './ShowPosts.css'
const ShowPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/route/getAllPosts");
      var data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((post) => {
        return (
          <div className="show">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <h1>{post.title}</h1>
                  <p>{post.description} </p>
                  <hr />
                  <p>Keywords : {post.keyword}</p>
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default ShowPosts;
