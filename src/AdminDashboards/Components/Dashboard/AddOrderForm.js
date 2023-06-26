import React, { Fragment, useState } from 'react'
import { mockDataContacts } from '../../data/mockData'
import { Button, Input } from 'reactstrap'
import { UseStateManager } from '../../../Context/StateManageContext'

const AddOrderForm = () => {


  const { rows, setRows, Show, setShow } = UseStateManager()
  // modal handler 

  let fields = Object.keys(mockDataContacts[0])
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setFormData({ ...formData, id: rows.length + 1, [fieldName]: e.target.value });
  };

  return (
    <Fragment>
      <div className='TheAddOrderForm'>
        {fields.filter(x => x !== "id").map((item, index) => (
          <div>
            <Input onChange={(e) => handleChange(e)} name={item} placeholder={item} />
          </div>
        ))}
        <Button onClick={() => { setRows([...rows, formData]); setShow(false) }} className='w-100 bg-primary text-blue'>Submit</Button>
      </div>

    </Fragment>
  )
}

export default AddOrderForm