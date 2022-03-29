import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setsearchResults } from '../Redux/actions';
export const Search = () => {
  const products = useSelector((state) => state.allProducts.products);
  const copyproducts = useSelector((state) => state.allProducts.copyproducts);
  const dispatch = useDispatch();

  const performSearch = (e) => {
    const key = e.target.value;
    console.log(products);

    const results = copyproducts.filter((product) =>
      product.title.includes(key)
    );

    dispatch(setsearchResults(results));
  };
  return (
    <div>
      <input type='text' onChange={performSearch}></input>
    </div>
  );
};
