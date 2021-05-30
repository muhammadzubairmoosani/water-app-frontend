import React, { useState, useEffect } from 'react'
import { SearchOutlined } from "@ant-design/icons";
import { Form } from "antd";
import useAxios from "axios-hooks";
import {
    WallCard,
    TextField,
    TextAreaField,
    CommonBtn,
    Notification,
} from "../../common";

const SearchField = ({ url, callback }) => {
    const [searchKey, setSearchKey] = useState('')

    const [{ loading }, getItemByKey] = useAxios(
        { url: `/${url}/${searchKey}`, method: "GET" }, { manual: true }
    );

    useEffect(() => {
        if (searchKey) {
            getItemByKey()
                .then(({ data }) => callback(data))
                .catch(({ message }) => Notification.error({ message }))

        }
        else {
            callback([])
        }

    }, [searchKey, getItemByKey])


    useEffect(() => {
        console.log(searchKey)
    }, [searchKey])

    return (

        <Form
            onValuesChange={values => {
                const { search } = values;
                setSearchKey(search)
                // getItemByKey({
                //     data: { search },
                // })
                // .then(() => {
                //     Notification.success({
                //         message: "Your message has been received.",
                //     });
                //     form.resetFields();
                // })
                // .catch(({ message }) => Notification.error({ message: message }));
            }}
        >
            <TextField
                name="search"
                placeholder="Search"
                // onChange={e => setSearchKey(e.target.value)}
                icon={<SearchOutlined />}
            />
        </Form >

    )
}


export default SearchField