import { Box, IconButton } from "@mui/material";
import React, { Fragment } from "react";
import DropdownBtn from "../DropdownBtn";
import InputBase from "@mui/material/InputBase";
import "../../DashBoard.css"
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { NavigationButton } from "../../data/mockData"
import { UseStateManager } from "../../../Context/StateManageContext";

const DashHeader = () => {

    // context data
    const { activeTab, setActiveTab } = UseStateManager();

    return (
        <Fragment>
            <div className="TopNavigation">
                <div
                    className="TopHeader d-flex align-items-center justify-content-between py-2 px-3 "
                    style={{ background: `#f2f0f0 !important` }}
                >
                    <div className="helper_Logo">
                        <img
                            src="https://mytotalhelper.com/webcss/images/logo.jpg"
                            alt=""
                        />
                    </div>
                    {/* SEARCH BAR */}
                    <Box
                        display="flex"
                        backgroundColor="#f2f0f0"
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <div
                        className="d-flex align-items-center justify-content-start "
                        style={{ gap: "0.6rem" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                            alt=""
                            className="rounded-circle topBarImg"
                        />
                        <div className="d-flex align-items-start flex-column justify-content-center ">
                            <h6 className="m-0 p-0">Abhishek Sharma</h6>
                            <p className="m-0 p-0">Super Admin</p>
                        </div>
                    </div>
                </div>
                <div className="bg-warning shadow d-flex flex-nowrap justify-content-between px-3 align-items-center w-100">
                    <div className="TopNavigation d-flex align-items-center justify-content-center ">
                        {/* Navigation buttons */}
                        {NavigationButton.map((item, index) => (
                            <DropdownBtn
                                setActiveTab={setActiveTab}
                                activeTab={activeTab}
                                buttonTitle={item.name}
                                isMenu={item.options ? true : false}
                                options={item.options ? item.options : null}
                            />
                        ))}
                        {/* 
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Customer"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Manage Service"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Manage Page"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Manage HR"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Manage Master"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Attendence"}
                            isMenu={true}
                        />
                        <DropdownBtn
                            setActiveTab={setActiveTab}
                            activeTab={activeTab}
                            buttonTitle={"Expenses"}
                            isMenu={true}
                        /> */}
                    </div>
                    {/* ICONS */}
                    <Box display="flex">
                        <IconButton>
                            <NotificationsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <PersonOutlinedIcon />
                        </IconButton>
                    </Box>
                </div>
            </div>
        </Fragment>
    );
};

export default DashHeader;
