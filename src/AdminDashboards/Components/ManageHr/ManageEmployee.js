import React, { Fragment, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BlockIcon from "@mui/icons-material/Block";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useNavigate } from "react-router-dom/dist";
import AdminDataTable from "../../Elements/AdminDataTable";
import ModalComponent from "../../Elements/ModalComponent";
import AdminAddEmployeeForm from "./Forms/AdminAddEmployeeForm";
import AdminEditEmploye from "./Forms/AdminEditEmploye";
import { useDispatch, useSelector } from "react-redux";
import { GetAllEmployeeAction } from "../../../Store/Actions/Dashboard/EmployeeActions/GetAllEmployee";
import moment from "moment";
import { Button } from "@mui/material";
import UpdateForm from "../Global/Forms/UpdateForm";

const ManageEmployee = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.GetAllEmployeeDataReducer);
  const [actionUserId, setActionUserId] = useState(null);

  const dispatch = useDispatch();

  const DataWithID = (data) => {
    const NewData = [];
    if (data !== undefined) {
      for (let item of data) {
        NewData.push({
          ...item,
          id: data.indexOf(item),
          date: moment(item.createdAt).format("D / M / Y"),
        });
      }
    } else {
      NewData.push({ id: 0 });
    }
    return NewData;
  };

  useEffect(() => {
    dispatch(GetAllEmployeeAction());
  }, []);

  const [Block, setBlock] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const ModalForEdit = () => {
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Edit Empy Form</ModalHeader>
        <ModalBody>
          <AdminEditEmploye closeModal={toggle} />
        </ModalBody>
      </Modal>
    );
  };

  const column = [
    { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
    {
      field: "designationName",
      headerName: "Designation",
      minWidth: 120,
      editable: true,
    },
    {
      field: "registrarId",
      headerName: "Emp Id",
      minWidth: 120,
      editable: true,
    },
    { field: "refName", headerName: "Ref Name", minWidth: 120, editable: true },
    { field: "name", headerName: "Name", minWidth: 120, editable: true },
    {
      field: "mobileNo",
      headerName: "Mobile No.",
      minWidth: 120,
      editable: true,
    },
    {
      field: "aadharNo",
      headerName: "Aadhaar No.",
      minWidth: 120,
      editable: true,
    },
    { field: "address", headerName: "Address", minWidth: 250, editable: true },
    {
      field: "password",
      headerName: "Password",
      minWidth: 120,
      editable: true,
    },
    {
      field: "status",
      minWidth: 150,
      headerName: "Status",
      renderCell: (params) => (
        <Button className="text-white bg-green">Approved</Button>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 220,
      renderCell: (params) => (
        <div className="d-flex gap-2">
          <Button
            variant="contained"
            color="primary"
            onClick={() => ToggleUpdateFormModal(params)}
          >
            <BorderColorIcon />
          </Button>
          <Button variant="contained" color="success">
            <VisibilityIcon />
          </Button>
          <Button variant="contained" color="error">
            <DeleteForeverIcon />
          </Button>
        </div>
      ),
    },
    {
      field: "block",
      headerName: "Block",
      minWidth: 100,
      renderCell: (params) => (
        <div className="d-flex gap-2">
          {Block ? (
            <Button
              className="text-white bg-warning border-warning"
              onClick={() => setBlock(false)}
            >
              Un-Block
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              onClick={() => setBlock(true)}
            >
              <BlockIcon />
            </Button>
          )}
        </div>
      ),
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  };

  // Add Employee form Handler
  const [addEmployee, setAddEmployee] = useState(false);
  const ToggleAddEmployee = () => setAddEmployee(!addEmployee);

  //   Update Modal
  const [updateFormModel, setUpdateFormModal] = useState(false);
  const ToggleUpdateFormModal = (params) => {
    setActionUserId(params?.row?._id);
    setUpdateFormModal(!updateFormModel);
  };

  return (
    <Fragment>
      {/* employee add form Modal  */}
      <ModalComponent
        data={<AdminAddEmployeeForm ToggleAddEmployee={ToggleAddEmployee} />}
        modalTitle={"Add Employee Form"}
        modal={addEmployee}
        toggle={ToggleAddEmployee}
        size={"xl"}
        scrollable={true}
      />
      <ModalComponent
        modal={updateFormModel}
        toggle={ToggleUpdateFormModal}
        size={"xl"}
        data={
          <AdminAddEmployeeForm
            ToggleAddEmployee={ToggleUpdateFormModal}
            update={true}
            data={data.find((x) => x._id === actionUserId)}
          />
          //   <UpdateForm
          //     ToggleExpenses={ToggleUpdateFormModal}
          //     formData={data.find((x) => x._id === actionUserId)}
          //     column={column}
          //     removeField={[
          //       "id",
          //       "action",
          //       "status",
          //       "block",
          //       "registrarId",
          //       "designationName",
          //     ]}
          //     onSubmit={HandleUpdateSubmit}
          //   />
        }
        modalTitle={"Update Head Expense"}
      />
      <h4
        className="p-3 px-4 mt-3 bg-transparent text-white headingBelowBorder"
        style={{ maxWidth: "fit-content" }}
      >
        Employee List
      </h4>
      <div className="AttendenceNavBtn w-100 py-2 px-4 gap-3">
        <div
          className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `}
          style={{ minWidth: "15rem", maxWidth: "15rem" }}
          onClick={ToggleAddEmployee}
        >
          Add Employee
        </div>
      </div>
      <div className="p-4">
        <AdminDataTable
          rows={DataWithID(data)}
          columns={column}
          CustomToolbar={CustomToolbar}
        />
      </div>
      <ModalForEdit />
    </Fragment>
  );
};

export default ManageEmployee;
