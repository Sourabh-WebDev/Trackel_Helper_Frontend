import React, { useEffect, useState } from 'react'
import { Label, FormGroup, Input, Button } from "reactstrap";


import * as ALlIcon from "react-icons/fa"
import SelectBox from '../../../Elements/SelectBox';

const MasterAddService = () => {

    const [allIcons, setAllIcons] = useState([])


    useEffect(() => {
        const icons = Object.keys(ALlIcon);

        const iconOptions = icons.map((icon) => ({
            value: icon,
            label: icon,
        }));

        setAllIcons(iconOptions);
    }, []);




    return (
        <div>
            {console.log(ALlIcon)}
            <FormGroup>
                <Label for="department">Category Name</Label>
                <Input type="text" placeholder="Category Name" />
            </FormGroup>
            <FormGroup>
                <Label for="fa icon">Fa Icon Name</Label>
                <SelectBox options={allIcons} />
            </FormGroup>
            <FormGroup>
                <Label for="image">Fa Icon Name</Label>
                <Input type="file" />
            </FormGroup>
            <Button>Submit</Button>
        </div>
    )
}

export default MasterAddService