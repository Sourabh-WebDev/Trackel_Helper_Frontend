import React, { Fragment, useEffect, useState } from "react";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddExpensesForm from "./Forms/AddExpensesForm";
import ModalComponent from "../../Elements/ModalComponent";
import AdminDataTable from "../../Elements/AdminDataTable";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllHeadExp,
  GetDeleteHeadExp,
  UpdateHeadExpense,
} from "../../../Store/Actions/Dashboard/expenseActions";
import moment from "moment";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import UpdateForm from "../Global/Forms/UpdateForm";

const ManageHeadExpenses = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const allHeadExpenses = useSelector((state) => state.GetAllHeadExpReducer);

  const [actionUserId, setActionUserId] = useState(null);

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

  const DeleteById = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        dispatch(GetDeleteHeadExp(id)).then(() => {
          dispatch(GetAllHeadExp());
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setLoading(false);
        });
      }
    });
  };

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

  const column = [
    { field: "id", headerName: "Sr No", flex: 1, minWidth: 50, editable: true },
    {
      field: "expName",
      flex: 1,
      headerName: "Name",
      minWidth: 50,
      editable: true,
    },
    {
      field: "action",
      flex: 1,
      headerName: "Action",
      minWidth: 50,
      renderCell: (params) => (
        <div className="d-flex align-items-center gap-2 justify-content-start">
          <Button
            variant="contained"
            color="primary"
            onClick={() => ToggleUpdateForm(params)}
          >
            <BorderColorIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              DeleteById(params.row._id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </div>
      ),
    },
  ];

  // add Expense head MOdal Controller
  const [addExpenses, setAddExpenses] = useState(false);
  const ToggleExpenses = () => setAddExpenses(!addExpenses);

  //   head expense update reducer
  const { data } = useSelector((state) => state.UpdateHeadExpReducer);
  //   update form controller
  const [updateFormModel, setUpdateFormModal] = useState(false);
  const ToggleUpdateForm = (params) => {
    setActionUserId(params.row?._id);
    setUpdateFormModal(!updateFormModel);
  };

  //   OnSubmit UpdateForm
  const HandleUpdateSubmit = (value, { resetForm }) => {
    if (actionUserId !== null) {
      dispatch(UpdateHeadExpense(actionUserId, value)).then(() => {
        resetForm();
        if (data) {
          dispatch(GetAllHeadExp()).then(() => {
            Swal.fire({
              icon: "success",
              text: "Updated Expense successfully",
            });
            setUpdateFormModal(false);
          });
        }
      });
    } else {
      Swal.fire({ icon: "info", text: "no Expense id found" });
    }
  };

  // get all expenses
  useEffect(() => {
    dispatch(GetAllHeadExp());
  }, []);
  return (
    <Fragment>
      <ModalComponent
        modal={addExpenses}
        toggle={ToggleExpenses}
        data={<AddExpensesForm ToggleExpenses={ToggleExpenses} />}
        modalTitle={"Add Expenses Head"}
      />
      {/* Update modal component */}
      <ModalComponent
        modal={updateFormModel}
        toggle={ToggleUpdateForm}
        data={
          <UpdateForm
            ToggleExpenses={ToggleExpenses}
            formData={allHeadExpenses?.data?.find(
              (x) => x._id === actionUserId
            )}
            column={column}
            removeField={["id", "action"]}
            onSubmit={HandleUpdateSubmit}
          />
        }
        modalTitle={"Update Head Expense"}
      />
      {/* <DashHeader /> */}
      <h5
        className="pt-4 pb-3 px-4 text-white headingBelowBorder d-flex flex-nowrap "
        style={{ width: "fit-content" }}
      >
        Expense Head List{" "}
      </h5>
      <div className="AttendenceNavBtn w-100 py-2 px-4 gap-3">
        <div
          className={`py-2 px-4 border shadow rounded-2 cursor-p hoverThis text-white Fw_500 d-flex align-items-center justify-content-center `}
          onClick={() => ToggleExpenses()}
          style={{ minWidth: "15rem", maxWidth: "15rem" }}
        >
          Add Expense Head
        </div>
      </div>
      <div className="p-4">
        <AdminDataTable
          rows={DataWithID(allHeadExpenses.data)}
          columns={column}
          CustomToolbar={CustomToolbar}
          loading={loading}
        />
      </div>
    </Fragment>
  );
};

export default ManageHeadExpenses;
