import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/Product.css";

const Product = () => {
	const { productsCategories, electronicProducts } = useSelector(
		(state) => state.reducers
	);
	const [cat, setCat] = useState("electronics");
	const [state] = useState({
		products: [...productsCategories],
		category: [...electronicProducts],
	});
	const fetchItem = (e) => {
		setCat(e);
	};
	return (
		<div className="products">
			{console.log("-->", state)}

			<div className="firstHalf">
				{state.category.map((e, id) => {
					return (
						<li onClick={() => fetchItem(e)} key={id}>
							{e}
						</li>
					);
				})}
			</div>
			<div className="secondHalf">
				{state.category.length > 0 &&
					state.products
						.filter((e) => e.category === cat)
						.map((e) => {
							return (
								<ul key={e.id}>
									<img src={e.image} width={30} alt="" />
									<Link to={`/product-details/${e.id}`}>
										{e.title}
									</Link>
								</ul>
							);
						})}
			</div>
		</div>
	);
};

export default Product;
