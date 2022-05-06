import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteButton from "../ChangeData/DeleteButton";
import AddButton from "../ChangeData/AddButton";
import SaveData from "../ChangeData/SaveData";
import AveragePrice from "../Analytics/AveragePrice";
import NumPostings from "../Analytics/NumPostings";
import BarChart from "../Graphs/BarChart";

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
          ${cellValues.value}
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
  carCompanies,
  currentSelection,
  setCurrentSelection,
  fetchData,
  chartData,
}) => {
  const handleCellEdit = (event) => {
    fetch(`/cars/${event.id}/update`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: event.id,
        field: event.field,
        value: event.value,
      }),
    }).then((response) => {
      if (!response.status === 200) {
        console.log("error");
      }
    });
    fetchData();
  };

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
        onCellEditCommit={handleCellEdit}
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
      <div className="py-3 flex justify-between">
        <div>
          <SaveData carTableData={carTableData} />
        </div>
        <div>
          <AveragePrice
            carTableData={carTableData}
            currentSelection={currentSelection}
          />
        </div>
        <div>
          <NumPostings
            carTableData={carTableData}
            currentSelection={currentSelection}
          />
        </div>
        <div className="flex">
          <AddButton carCompanies={carCompanies} fetchData={fetchData} />
          <DeleteButton
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
            fetchData={fetchData}
          />
        </div>
      </div>
      <div className="items-center px-8" style={{ width: 800 }}>
        <BarChart chartData={chartData} />
      </div>
    </div>
  );
};

export default CarTable;
