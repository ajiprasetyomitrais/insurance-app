import React from 'react'
import { Form } from 'react-bootstrap'
import InputField from "./components/InputField/InputField";

const Search = () => {
  return (
    <div>
        <Form>
            <InputField name="searchInput" type="text" placeholder="Search insurance..." />
        </Form>
    </div>
  )
}

export default Search