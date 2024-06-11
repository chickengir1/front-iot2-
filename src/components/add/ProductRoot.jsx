import React from 'react';
import AddProduct from './AddProduct';
import AddProductDetail from './AddProductDetail';
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { AddProductLayOut } from "./styles/AddProductLayOut";
import useProductForm from '../../hook/useProductForm';

const ProductRoot = () => {
  const { handleProductChange, handleAddProduct } = useProductForm('http://localhost:8000/api/admin/products');

  return (
    <div style={{ padding: "50px", width: "100%", height: "auto", marginBottom: "5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem"  }}>
        <TitleStyled>제품</TitleStyled>
        <ButtonStyled onClick={handleAddProduct}>제품 추가</ButtonStyled>
      </div>
      <AddProductLayOut>
        <AddProduct onChange={handleProductChange} />
      </AddProductLayOut>
      <AddProductDetail onChange={handleProductChange} />
    </div>
  );
};

export default ProductRoot;
