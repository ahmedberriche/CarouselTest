import React from "react";

export function Card(props) {
  const { data: item } = props;
  return (
    <>
      <div className="parent">
        <img
          src={
            item?.url ||
            "https://static.pexels.com/photos/111788/pexels-photo-111788-large.jpeg"
          }
          alt={item?.alt || "img"}
        />
        <div className="addIcon-container">
          <img src={"/addIcon.svg"} alt="svg" />
        </div>
      </div>
      <div
        className="typography truncateText"
        style={{ marginTop: 13, width: "90%", color: "#fff" }}
      >
        {item?.alt || "myTitle"}
      </div>
    </>
  );
}

export default Card;
