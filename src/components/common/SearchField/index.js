import React from 'react'
import { SearchOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { TextField } from "../../common";

const SearchField = ({ url, callback }) => (
    <Form onValuesChange={values => callback(values?.search || null)}>
        <TextField
            name="search"
            placeholder="Search"
            icon={<SearchOutlined />}
        />
    </Form >
)

export default SearchField