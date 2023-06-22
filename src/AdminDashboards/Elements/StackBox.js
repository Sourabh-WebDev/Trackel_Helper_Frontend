import React, { Fragment } from 'react'
import { FaMonero, FaMoneyCheck } from 'react-icons/fa'

const StackBox = ({ title, amount, rupee, className, style }) => {
    return (
        <Fragment>
            <div className={`StackAnalyticsBox d-flex align-items-center justify-content-center gap-2 border rounded-3 p-3 ${className}`} style={{ ...style}}>
                <div className='d-flex flex-column align-items-start jusity-content-center gap-3'>
                    <FaMonero size={25} />
                    <h5>{title}</h5>
                </div>
                <div className="AmountSection d-flex flex-column align-items-end justify-content-center gap-3">
                    <select className='StackSelectBox bg-transparent cursor-p'>
                        <option value="Today">Today</option>
                        <option value="This Month">This Month</option>
                        <option value="last6month">Last 6 Month</option>
                        <option value="total">Total</option>
                    </select>
                    <h6>{rupee === true ? "₹" : ""}  {amount}</h6>
                </div>
            </div>
        </Fragment>
    )
}

export default StackBox