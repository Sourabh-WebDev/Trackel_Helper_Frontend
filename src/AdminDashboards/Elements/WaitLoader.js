import { GridLoader } from "react-spinners";


export const WaitLoader = ({ loading, offset }) => {
    return <GridLoader loading={loading} color={"#FFD700"} size={30} style={{ position: "absolute", left: `${offset[0]}%`, top: `${offset[1]}%`, transform: "translate(-50%,-50%)", zIndex: "10" }} />
}