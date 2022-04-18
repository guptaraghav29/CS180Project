import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

//id,region,price,year,manufacturer,model,condition,odometer,title_status,type,paint_color,state,posting_date


const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "model",
    headerName: "Model",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "year",
    headerName: "Year",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "price",
    headerName: "Price",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "odometer",
    headerName: "Odometer",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "title_status",
    headerName: "Status",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "paint_color",
    headerName: "Color",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "region",
    headerName: "Region",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "state",
    headerName: "State",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    cellClassName: 'super-app-theme--cell',
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
  {
    field: "posting_date",
    headerName: "Date Listed",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          {cellValues.value}
        </div>);
    },
  },
];

const CarTable = ({ carTableData }) => {
  return (
    <div style={{ height: 500, width: "100%", background: "#f9f9f9", textAlign: "center" }}>
      <DataGrid
      
        rows={carTableData}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 0,
        
          '& .MuiDataGrid-row:hover': {
            background: "lightgreen",
          },
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            background: "#EDEDED",
          },
          width: "100%",
        }}
        onSelectionModelChange={(ids) => {
          console.log(ids);
        }}
      />
    </div>
  );
};

export default CarTable;
