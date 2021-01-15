import React from "react";
import { Result } from "antd";
import { CommonBtn } from "../../common";
import { useHistory } from "react-router-dom";
export const ErrorPage = () => {
  let history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <CommonBtn block={false} onClick={() => history.goBack()}>
          Go Back
        </CommonBtn>
      }
    />
  );
};
