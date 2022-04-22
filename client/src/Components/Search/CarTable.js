import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteButton from "../ChangeData/DeleteButton";
import AddButton from "../ChangeData/AddButton";
import SaveData from "../ChangeData/SaveData";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          label="tabel"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "model",
    headerName: "Model",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "year",
    headerName: "Year",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "odometer",
    headerName: "Odometer",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "title_status",
    headerName: "Status",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "paint_color",
    headerName: "Color",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "region",
    headerName: "Region",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "state",
    headerName: "State",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "posting_date",
    headerName: "Date Listed",
    headerAlign: "center",
    flex: 1,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
];

const CarTable = ({
  carTableData,
  currentSelection,
  setCurrentSelection,
  fetchData,
  saveData,
}) => {
  return (
    <div
      style={{
        height: 500,
        width: "100%",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <DataGrid
        rows={carTableData}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 0,

          "& .MuiDataGrid-row:hover": {
            background: "lightgreen",
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            background: "#EDEDED",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-row:nth-of-type(odd):hover": {
            background: "lightgreen",
          },
        }}
        onSelectionModelChange={(ids) => {
          setCurrentSelection(ids);
        }}
      />
      <div className="py-3 flex justify-end">
        <SaveData carTableData={carTableData}/>
        <AddButton />
        
        <DeleteButton
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          fetchData={fetchData}
        />
        
      </div>
    </div>
  );
};

export default CarTable;
