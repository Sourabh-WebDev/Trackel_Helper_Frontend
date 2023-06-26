import React, { useEffect, useState } from 'react'
import { Label, FormGroup, Input, Button } from "reactstrap";
import * as ALlIcon from "react-icons/fa"
import SelectBox from '../../../Elements/SelectBox';
import { useDispatch, useSelector } from 'react-redux';
import SeviceAddReducer from '../../../../Store/Reducers/Dashboard/ServiceAddReducer';
import axios from 'axios';
import { API_URL } from '../../../../config';
import { AddService } from '../../../../Store/Actions/Dashboard/servicesAction';
import Swal from 'sweetalert2';
import { GetAllServices } from '../../../../Store/Actions/Dashboard/servicesAction';
import { async } from 'q';



const MasterAddService = ({ ToggleMasterAddService }) => {

    // data 
    const [cateName, setCateName] = useState("")
    const [selectedIcon, setSelectedIcon] = useState({})
    const [selectedImage, setSelectedImage] = useState(null)

    const dispatch = useDispatch()

    // data from redux store
    const serviceResult = useSelector(pre => pre.SeviceAddReducer)

    const [allIcons, setAllIcons] = useState([])

    // make the wraper of the icon 
    const IconWrapper = ({ icon }) => {
        const IconComponent = ALlIcon[icon];
        return IconComponent ? <IconComponent /> : null;
    };

    // fa icon listing 
    useEffect(() => {
        const icons = Object.keys(ALlIcon);

        const iconOptions = icons.map((icon) => ({
            value: icon,
            label: <IconWrapper icon={icon} />,
        }));

        setAllIcons(iconOptions);
    }, []);



    // service Form 
    const ServiceFormData = {
        serviceName: cateName,
        icon: selectedIcon.value !== null ? selectedIcon.value : "",
        image: selectedImage,
    }

    // submit the services 
    const HandleSubmit = () => {
        // check the data is null or filled
        let response = null;

        if (cateName === null || cateName.trim() === "") {
            response = { cate: "Please Write The Category Name" };
        } else if (selectedIcon === null) {
            response = { icon: "Please Select the Icon First" };
        } else if (selectedImage === null) {
            response = { image: "Please Select the Image" };
        } else {
            dispatch(AddService(ServiceFormData));
        }

        return response;
    };

    useEffect(() => {
        if (serviceResult.isSuccess === true) {
            Swal.fire(
                'Successfully Added',
                `new Service added ${serviceResult.data.data.serviceName}`,
                'success'
            )

            ToggleMasterAddService()
            dispatch(GetAllServices())
        }
    }, [serviceResult.isSuccess])

    const ImageUpload = async (e) => {

        const file = e.target.files[0];

        const fd = new FormData();
        fd.append("myfile", file);

        try {
            const response = await axios.post(API_URL + "/util/uploadfile", fd, { method: "POST" })
            if (response.status === 200) {
                setSelectedImage(response.data.fileName)
                Swal.fire({
                    title: 'Sweet!',
                    text: 'Image Successfully Uploaded',
                    imageUrl: `${API_URL}/static/uploads/${response.data.fileName}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })
            } else {
                console.log("File Not Uploaded")
            }

        } catch (error) {
            console.log(error)
        }
    };





    return (
        <div>
            <FormGroup>
                <Label for="department">Category Name</Label>
                <Input onChange={(e) => setCateName(e.target.value)} value={cateName} type="text" placeholder="Category Name" />
            </FormGroup>
            <FormGroup>
                <Label for="fa icon">Fa Icon Name</Label>
                <SelectBox options={allIcons} setSelcted={setSelectedIcon} />
            </FormGroup>
            <FormGroup>
                <Label for="image" >Choose Image</Label>
                <Input type="file" onChange={ImageUpload} />
            </FormGroup>
            <Button type='submit' onClick={HandleSubmit}>Submit</Button>
        </div>
    )
}

export default MasterAddService