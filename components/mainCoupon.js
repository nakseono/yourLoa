import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Paragraph } = Typography;

const TextCopy = styled(Paragraph)`
  margin-bottom: 0 !important;
  font-size: 19px;
  font-weight: bold;
  color: #d3687f;
`;

const CouponWrapper = styled.div`
  height: 6rem;
  border: solid 1px;
  width: 30%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const CouponTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const Coupon = ({ title, date, code }) => {
  return (
    <CouponWrapper>
      <CouponTitle>{title}</CouponTitle>
      <div>{date}</div>
      <TextCopy copyable>{code}</TextCopy>
    </CouponWrapper>
  );
};

export default Coupon;
