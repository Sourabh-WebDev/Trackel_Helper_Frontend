import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const DropdownBtn = ({ buttonTitle, isMenu, activeTab, setActiveTab }) => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return (
        <>
            {
                isMenu ?
                    <Dropdown isOpen={open} toggle={toggle}>
                        < DropdownToggle onClick={() => setActiveTab(buttonTitle)} className={`Dash_dropDownBtn py-3 ${activeTab === buttonTitle ? "Dash_dropDownBtn_Active" : ""}`} >
                            {buttonTitle} < FiChevronDown style={{ transition: "all 0.2s ease-in-out", transform: `rotate(${open ? "0deg" : "180deg"})` }
                            } />
                        </DropdownToggle >
                        <DropdownMenu>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem>Option 3</DropdownItem>
                        </DropdownMenu>
                    </Dropdown >
                    : <Button onClick={() => setActiveTab(buttonTitle)} className={`Dash_dropDownBtn py-3 ${activeTab === buttonTitle ? "Dash_dropDownBtn_Active" : ""}`} > {buttonTitle}</Button>}
        </>
    )
}

export default DropdownBtn