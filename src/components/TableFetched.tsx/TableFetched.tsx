import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { notify } from "../tools/notify";

// import './style.css'

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  price: number;
  successful: boolean;
  rocket: string;
}

export const TableFetched = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
        .then((result) => result.json())
        .then((rowData) => {
          setRowData(rowData);
          setIsLoading(false);
          notify("Данные загружены", "info");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          notify("Ошибка загрузки данных", "error");
          setIsLoading(false);
        });
    }, 1000);
  }, []);
  const CompanyLogoRenderer = ({ value }: { value: string }) => (
    <span
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      {value && (
        <img
          alt={`${value} Flag`}
          src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
          style={{
            display: "block",
            width: "25px",
            height: "auto",
            maxHeight: "50%",
            marginRight: "12px",
            filter: "brightness(1.1)",
          }}
        />
      )}
      <p
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </p>
    </span>
  );
  const MissionResultRenderer = ({ value }: { value: boolean }) => (
    <span>
      <img
        alt={`${value} Flag`}
        src={value ? "./tick-in-circle.png" : "./cross-in-circle.png"}
      />
    </span>
  );

  const defaultColDef = useMemo(
    () => ({
      // Enable editing on all cells
      editable: true,
    }),
    []
  );

  const [rowData, setRowData] = useState<IRow[]>([]);
  const [colDefs] = useState<ColDef<IRow>[]>([
    { field: "mission", filter: true, checkboxSelection: true },
    {
      field: "company",
      cellRenderer: CompanyLogoRenderer,
    },
    { field: "location" },
    {
      field: "date",
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
    {
      field: "price",
      // Return a formatted string for this column
      valueFormatter: (params) => {
        return "£" + params.value.toLocaleString();
      },
    },
    { field: "successful", cellRenderer: MissionResultRenderer },
    { field: "rocket" },
  ]);
  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "1000px", height: "600px" }}
    >
      {!isLoading && (
        <AgGridReact
          rowSelection="multiple"
          defaultColDef={defaultColDef}
          onCellValueChanged={(event) =>
            console.log(`Новое значение ячейки: ${event.value}`)
          }
          onSelectionChanged={(event) =>
            console.log(`Выбрана ячейка: ${event.type}`)
          }
          pagination={true}
          rowData={rowData}
          columnDefs={colDefs}
        />
      )}

      <Spinner
        color="#5070b1"
        loading={isLoading}
        css={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </div>
  );
};
