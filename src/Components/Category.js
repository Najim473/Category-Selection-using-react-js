import { useState } from "react";
import Products from "./Products.js";
import "./Category.css";
const Category = () => {
    const [data, setData] = useState(Products);
    const filterResult = (catItem) => {
        const result = Products.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    };
    return (
        <>
            <h1 className="text-center text-info">Let's Shop</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <div
                            className="btn btn-warning w-100 mb-4"
                            onClick={() => filterResult("Men")}
                        >
                            Men
                        </div>
                        <div
                            className="btn btn-warning w-100 mb-4"
                            onClick={() => filterResult("Women")}
                        >
                            Women
                        </div>
                        <div
                            className="btn btn-warning w-100 mb-4"
                            onClick={() => setData(Products)}
                        >
                            All
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values) => {
                                const { id, title, price, img, details } = values;
                                return (
                                    <>
                                        <div key={id} className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={img} className="card-img-top" alt="Shirt" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="text-primary">Price {price} TK</p>
                                                    <p className="card-text">{details}</p>
                                                    <button href="#" className="btn btn-dark">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
