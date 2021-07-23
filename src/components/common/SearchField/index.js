import React, { useEffect, useState } from 'react'
import { SearchOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { TextField } from "../../common";

const SearchField = ({ callback }) => {
    const [typingTimeout, setTypingTimeout] = useState(0)
    const [key, setKey] = useState(null)

    const _onChangeKey = ({ key }) => {
        typingTimeout && clearTimeout(typingTimeout);
        setKey(key || null)
    }

    useEffect(() => {
        setTypingTimeout(
            setTimeout(() => {
                callback(key)
            }, 500)
        )
    }, [key])

    return (
        <Form onValuesChange={_onChangeKey}>
            <TextField
                name="key"
                placeholder="Search"
                icon={<SearchOutlined />}
            />
        </Form >
    )
}

export default SearchField