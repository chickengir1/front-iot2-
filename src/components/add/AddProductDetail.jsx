import React from 'react';
import { ProductDetailLayOut} from "./styles/AddProductLayOut";
import { TitleStyled , StyledTextarea} from "./styles/Content"

const AddProductDetail = () => {
  return (
    <ProductDetailLayOut>
      <TitleStyled style={{marginBottom : "1.5rem"}}>제품 상세 설명</TitleStyled>
     <StyledTextarea style={{height : "78%" , fontSize : "16px"}}></StyledTextarea>
    </ProductDetailLayOut>
  );
};

export default AddProductDetail;