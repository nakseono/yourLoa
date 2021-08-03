import React from "react";
import styled from "styled-components";

const CouponWrapper = styled.div`
  height: 5rem;
  border: solid 1px;
  width: 30%;
  margin-bottom: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CouponTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const CouponCode = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: purple;
`;

const Coupon = ({ title, date, code }) => {
  return (
    <CouponWrapper>
      <CouponTitle>{title}</CouponTitle>
      <div>{date}</div>
      <CouponCode>{code}</CouponCode>
    </CouponWrapper>
  );
};

export default Coupon;
