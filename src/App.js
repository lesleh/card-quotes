import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
`;

// Need:
// size
// font-family
// font-weight
// color
// variant = "heading1"
const Typography = styled.div``;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
`;

const Image = styled.img`
  max-height: 50px;
`;

const Button = styled.button`
  background-color: #c0469b;
  color: #fff;
  border-radius: 99999px;
  min-width: 88px;
  padding: 10px 20px;
  border: 0;
  font-weight: 700;
  font-size: 18px;
  font-family: Quicksand;
`;

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <Card component="article">
        <Flex alignItems="center" justifyContent="space-between">
          <Image src={logo} />
          <Button>Buy</Button>
        </Flex>
        <Flex>
          <div style={{ flexBasis: "50%" }}>
            <Typography>Public Liability</Typography>
            <Typography>£1,000,000</Typography>
            <hr />
            <Typography>Public Liability</Typography>
            <Typography>£1,000,000</Typography>
            <hr />
            <Typography>Public Liability</Typography>
            <Typography>£1,000,000</Typography>
            <hr />
          </div>
          <div
            style={{
              flexBasis: "50%",
              backgroundColor: "#fcf6fa",
              padding: "10px",
            }}
          >
            <Typography
              style={{
                fontSize: "28px",
                color: "#6f557d",
                fontWeight: "bold",
                fontFamily: "Quicksand",
              }}
            >
              £32.99
            </Typography>
            <Typography>10x monthly</Typography>
            <Typography
              style={{
                fontSize: "22px",
                color: "#6f557d",
                fontWeight: "bold",
                fontFamily: "Quicksand",
              }}
            >
              £299.99
            </Typography>
            <Typography>annual</Typography>
          </div>
        </Flex>
      </Card>
    </div>
  );
}

export default App;
