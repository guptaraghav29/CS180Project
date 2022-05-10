import React from 'react';
import Button from "@mui/material/Button";
import { CSVLink } from "react-csv";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const headers = [
  { label: 'ID', key: 'id' },
  { label: 'Brand', key: 'brand' },
  { label: 'Model', key: 'model' },
  { label: 'Year', key: 'year' },
  { label: 'Price', key: 'price' },
  { label: 'Odometer', key: 'odometer' },
  { label: 'Status', key: 'title_status' },
  { label: 'Color', key: 'paint_color' },
  { label: 'Region', key: 'region' },
  { label: 'State', key: 'state' },
  { label: 'Date Listed', key: 'posting_date' }
];

const SaveData = ({ carTableData }) => {
  const csvReport = {
    filename: "Result.csv",
    headers: headers,
    data: carTableData
  };
  return (
    <div data-testid="saveDataTest">
      <Button
        variant="contained"
        startIcon={<FileDownloadIcon />} sx={{
          background: "#5c6370",
          ':hover': {
            background: "#2e3138",
          }
        }}
      ><CSVLink {...csvReport}></CSVLink> Export Data </Button>
    </div>
  );
};


export default SaveData