import React from "react";

export default function Listing() {
  const numbers = ['Abhinash', 'Manoj', 'Rakesh'];

  return (
    <>
      <div className="row container">
        <div className="col-3"></div>
        <div className="col-6 ">
          <div className="list-group">
            {numbers.map((num, index) => (
              <button key={index}
                type="button"
                className="list-group-item list-group-item-action"
              >
               {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
