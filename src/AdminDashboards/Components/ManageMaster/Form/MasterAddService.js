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
import ImageUploadReducer from '../../../../Store/Reducers/ImageUploadReducers';
import { ImageUploadAction } from '../../../../Store/Actions/ImageUploadAction';
import { BounceLoader } from 'react-spinners';
import zIndex from '@mui/material/styles/zIndex';




const MasterAddService = ({ ToggleMasterAddService }) => {

    // data 
    const [cateName, setCateName] = useState("")
    const [selectedIcon, setSelectedIcon] = useState({})

    const dispatch = useDispatch()

    // to manage the loading 
    const [Loading, setLoading] = useState(false)

    // data from redux store
    const serviceResult = useSelector(pre => pre.SeviceAddReducer)
    // for image upload 
    const imgUpload = useSelector(pre => pre.ImageUploadReducer)

    const [allIcons, setAllIcons] = useState([])

    const [ImgUploaded, setImgUploaded] = useState(null)

    const [details, setDetails] = useState("")

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
        icon: ImgUploaded && ImgUploaded.icon ? ImgUploaded.icon : "",
        image: ImgUploaded && ImgUploaded.image ? ImgUploaded.image : "",
        details: details
    }

    // submit the services 
    // Define the HandleSubmit function
    const HandleSubmit = () => {
        setLoading(true)
        // Check the data is null or filled
        let response = null;

        if (cateName === null || cateName.trim() === "") {
            response = { cate: "Please Write The Category Name" };
        } else if (selectedIcon === null) {
            response = { icon: "Please Select the Icon First" };
        } else if (imgUpload.fileName === "") {
            response = { image: "Please Select the Image" };
        } else {
            dispatch(AddService(ServiceFormData))
                .then(() => {
                    setLoading(false)
                    ToggleMasterAddService()
                    Swal.fire(
                        'Successfully Added',
                        `new Service added ${serviceResult && serviceResult.data.data ? serviceResult.data.data.serviceName : "New Service"}`,
                        'success'
                    )
                    dispatch(GetAllServices())
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error);
                });
        }

        return response;
    };
    // useEffect(() => {
    //     if (imgUpload.isUploaded === true) {
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Image Uploaded Successfully',
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //     } else if (imgUpload.isUploaded === false) {
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'error',
    //             title: 'Failed Image Not Uploaded',
    //             showConfirmButton: false,
    //             timer: 2000
    //         })
    //     }
    // }, [imgUpload.isUploaded])

    const handleImageUpload = (e) => {
        setLoading(true)
        dispatch(ImageUploadAction(e))
            .then(() => {
                setLoading(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Image uploaded successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            }).catch((err) => {
                setLoading(false)
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: "Image Not Uploaded"
                })
            });
    }


    useEffect(() => {
        if (imgUpload.isField) {
            setImgUploaded({ ...ImgUploaded, ...imgUpload.isField })
        }
    }, [imgUpload])

    return (
        <div className='position-relative'>
            <div className={`${Loading ? "d-flex" : "d-none"} align-items-center justify-content-center`} style={{ zIndex: "10", background: "rgba(0,0,0,0.6)", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                <BounceLoader
                    color="#fff83f"
                    loading={Loading}
                />
            </div>
            <FormGroup>
                <Label for="department">Category Name</Label>
                <Input onChange={(e) => setCateName(e.target.value)} value={cateName} type="text" placeholder="Category Name" />
            </FormGroup>
            <FormGroup>
                <Label for="icon">Upload Icon</Label>
                <Input type="file" name='icon' onChange={handleImageUpload} />
            </FormGroup>
            <FormGroup>
                <Label for="image" >Choose Image</Label>
                <Input type="file" name='image' onChange={handleImageUpload} />
            </FormGroup>
            <FormGroup>
                <Label for="image" >Details (360 characters)</Label>
                <Input type='textarea' value={details} onChange={(e) => setDetails(e.target.value)} max={360} placeholder='typing ....' />
            </FormGroup>
            <Button type='submit' onClick={() => HandleSubmit()}>Submit</Button>
        </div>
    )
}

export default MasterAddService