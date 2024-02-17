import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  stock: boolean;
}

// Create new GridExample component
export const Table = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Диван", model: "Model Y", price: 649, stock: true },
    { make: "Стол", model: "F-Series", price: 338, stock: false },
    { make: "Стул", model: "Corolla", price: 296, stock: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "stock" },
  ]);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "805px", height: "200px" }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
