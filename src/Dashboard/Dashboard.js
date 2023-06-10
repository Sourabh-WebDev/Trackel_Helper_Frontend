import { Box, Button } from "@mui/material";
// import { mockTransactions } from "./data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import "./DashBoard.css"
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "./data/mockData";
import ColoredBtn from "./DashboardComponents/ColoredBtn";
import { Fragment } from "react";
import DashHeader from "./DashboardComponents/Global/DashHeader";
// import { UseStateManager } from "../../Context/StateManageContext";

const Dashboard = () => {


    // context data
    // const { activeTab, setActiveTab } = UseStateManager();

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5, minWidth: 50 },
        { field: "registrarId", headerName: "Customer ID", minWidth: 120 },
        { field: "orderNumber", headerName: "Order Number", minWidth: 120 },
        { field: "type", headerName: "Type", minWidth: 80 },
        { field: "servicetype", headerName: "Service Type", minWidth: 120 },
        { field: "bookingtime", headerName: "Booking Time", minWidth: 120 },
        { field: "bookingdate", headerName: "Booking Date", minWidth: 120 },
        {
            field: "name",
            headerName: "Customer Name",
            flex: 1,
            cellClassName: "name-column--cell",
            minWidth: 150,
        },
        { field: "service", headerName: "Service Name", minWidth: 120 },
        { field: "servicedetails", headerName: "Service Details", minWidth: 150 },
        { field: "supervisor", headerName: "Supervisor", minWidth: 120 },
        { field: "serviceprovider", headerName: "Service Provider", minWidth: 150 },
        { field: "vehicleused", headerName: "Vehicle Used", minWidth: 120 },
        { field: "billingamount", headerName: "Billing Amount", minWidth: 150 },
        { field: "paidamount", headerName: "Paid Amount", minWidth: 150 },
        { field: "balanceamount", headerName: "Balance Amount", minWidth: 150 },
        { field: "paymentmethod", headerName: "Payment Method", minWidth: 150 },
        {
            field: "backofficeremark",
            headerName: "Back Office Remark",
            minWidth: 180,
        },
        { field: "adminremark", headerName: "Admin Remark", minWidth: 150 },
        { field: "providerratings", headerName: "Provider Ratings", minWidth: 150 },
        {
            field: "superadminremark",
            headerName: "Super Admin Remark",
            minWidth: 180,
        },
        {
            field: "serviceproviderremark",
            headerName: "Service Provider Remark",
            minWidth: 180,
        },
        { field: "orderstatus", headerName: "Order Status", minWidth: 150 },
        { field: "canclereason", headerName: "Cancel Reason", minWidth: 150 },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            minWidth: 80,
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "action",
            headerName: "Action",
            renderCell: (params) => (
                <select
                    className="p-2 border-0 shadow"
                    style={{ borderRadius: "30px", outline: "none", cursor: "pointer" }}
                >
                    <option value="Cancel">Cancel</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Hold">Hold</option>
                    <option value="Complete">Complete</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                </select>
            ),
            minWidth: 150,
        },
        {
            field: "status",
            headerName: "Status",
            className: "centerTheElement",
            renderCell: (params) => (
                <p
                    className="text-danger p-2 bg-light"
                    style={{
                        borderRadius: "30px",
                        cursor: "pointer",
                        transform: "translate(25%,25%)",
                    }}
                >
                    Check In
                </p>
            ),
            minWidth: 150,
        },
    ];

    return (
        <Fragment>
            <DashHeader />
            <Box m="20px">
                {/* HEADER */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}
                    <ColoredBtn
                        btnName={"All Orders"}
                        bg={"cornflowerblue"}
                        color={"black"}
                    />
                    <ColoredBtn btnName={"Complete Order"} bg={"green"} color={"black"} />
                    <ColoredBtn btnName={"Running Order"} bg={"yellow"} color={"black"} />
                    <ColoredBtn btnName={"Cancel Order"} bg={"gray"} color={"black"} />
                    <ColoredBtn btnName={"Hold Order"} bg={"#f08080"} color={"black"} />
                    <ColoredBtn btnName={"Due Order"} bg={"#adadec"} color={"black"} />
                    <ColoredBtn btnName={"Pending Order"} bg={"#ffa500"} color={"black"} />

                    <Box>
                        <Button
                            sx={{
                                backgroundColor: "#112c85",
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "10px 20px",
                            }}
                        >
                            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                            Download Reports
                        </Button>
                    </Box>
                </Box>

                {/* GRID & CHARTS */}
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >
                    {/* ROW 1 */}
                    {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

                    {/* ROW 2 */}
                    {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}

                    {/* ROW 3 */}
                    {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
                </Box>
                {/* Data Table  */}

                <Box>
                    {/* <Header
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
        /> */}
                    <Box
                        m="0px 0 0 0"
                        height="75vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                // color: colors.greenAccent[300],
                                color: "#e52c2a",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                // backgroundColor: colors.blueAccent[700],
                                backgroundColor: "#112c85",
                                borderBottom: "none",
                                color: "#ffffff",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: "#f2f0f0",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                // backgroundColor: colors.blueAccent[700],
                                backgroundColor: "#112c85",
                                color: "#ffffff",
                            },
                            "& .MuiCheckbox-root": {
                                color: `#1e5245 !important`,
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: `#4d4d4d !important`,
                            },
                            "& .MuiSvgIcon-root": {
                                fill: "#8c8c8c",
                            },
                            "& .MuiTablePagination-root": {
                                color: "#ffffff",
                            },
                        }}
                    >
                        <DataGrid
                            rows={mockDataContacts}
                            columns={columns}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Dashboard;
