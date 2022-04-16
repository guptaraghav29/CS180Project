import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

//id,region,price,year,manufacturer,model,condition,odometer,title_status,type,paint_color,state,posting_date

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "super-app-theme--header",
    width: 145,
  },
  {
    field: "region",
    headerName: "Region",
    headerClassName: "super-app-theme--header",
    width: 210,
  },
  {
    field: "manufacturer",
    headerName: "Manufacturer",
    headerClassName: "super-app-theme--header",
    width: 145,
  },
  {
    field: "model",
    headerName: "Model",
    headerClassName: "super-app-theme--header",
    width: 125,
  },
  {
    field: "year",
    headerName: "Year",
    headerClassName: "super-app-theme--header",
    width: 125,
  },
  {
    field: "price",
    headerName: "Price",
    headerClassName: "super-app-theme--header",
    width: 125,
  },
  {
    field: "odometer",
    headerName: "Odometer",
    headerClassName: "super-app-theme--header",
    width: 125,
  },
  {
    field: "title_status",
    headerName: "Status",
    headerClassName: "super-app-theme--header",
    width: 125,
  },
  {
    field: "paint_color",
    headerName: "Color",
    headerClassName: "super-app-theme--header",
    width: 100,
  },
  {
    field: "state",
    headerName: "State",
    headerClassName: "super-app-theme--header",
    width: 75,
  },
  {
    field: "posting_date",
    headerName: "Date Listed",
    headerClassName: "super-app-theme--header",
    width: 300,
  },
];

const CarTable = ({ carTableData }) => {
  return (
    <div style={{ height: 400, width: "100%", background: "#f9f9f9" }}>
      <DataGrid
        rows={carTableData}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 0,
          borderColor: "black",
          "& .MuiDataGrid-row:hover": {
            background: "lightgreen",
          },
        }}
      />
    </div>
  );
};

export default CarTable;
