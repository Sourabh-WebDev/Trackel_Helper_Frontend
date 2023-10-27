import { Formik, Field, ErrorMessage } from "formik";
import React, { Fragment } from "react";
import { Button, FormGroup, Label } from "reactstrap";

const UpdateForm = ({ formData, column, onSubmit, removeField }) => {
  const initialValues = {};

  // Simplify the filterOutData function
  const filteredData = column
    .filter(
      (x) =>
        !["_id", "createdAt", "updatedAt", "__v", ...removeField].includes(
          x.field
        )
    )
    .map((x) => x.field);

  // Initialize initialValues using reduce
  filteredData.forEach((field) => {
    initialValues[field] = formData ? formData[field] : "";
  });

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <form
            className={filteredData?.length > 1 ? "row" : ""}
            onSubmit={handleSubmit}
          >
            {filteredData.map((item, index) => (
              <FormGroup
                key={index}
                className={filteredData?.length > 1 ? "col-6" : ""}
              >
                <Label for={item}>
                  {column.find((x) => x.field === item)?.headerName}
                </Label>
                <Field
                  type="text"
                  name={item}
                  id={item}
                  className="form-control" // You can apply form control classes here
                />
                <ErrorMessage
                  name={item}
                  component="div"
                  className="text-danger"
                />
              </FormGroup>
            ))}
            <Button className="bg-blue" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default UpdateForm;
