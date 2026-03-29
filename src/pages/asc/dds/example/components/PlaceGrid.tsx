import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const PlaceGrid = ({ places, onSelect }: any) => {
  const gridRef = useRef<any>(null);

  const columnDefs = [
    {
      field: "name",
      headerName: "장소명",
      flex: 1,
      sortable: true,
      filter: "agTextColumnFilter",
      filterParams: {
        filterOptions: ["contains"],
        defaultOption: "contains",
        suppressAndOrCondition: true,
        suppressFilterOptions: true,
        filterPlaceholder: "",
        maxNumConditions: 1,
      },
    },
    {
      field: "area",
      headerName: "지역",
      flex: 1,
      sortable: true,
      filter: "agTextColumnFilter",
      filterParams: {
        filterOptions: ["contains"],
        defaultOption: "contains",
        suppressAndOrCondition: true,
        suppressFilterOptions: true,
        filterPlaceholder: "",
        maxNumConditions: 1,
      },
    },
  ];

  return (
    <div style={{ height: "100%" }}>
      <div className="ag-theme-alpine" style={{ height: "100%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={places}
          columnDefs={columnDefs}
          onRowClicked={(e) => onSelect(e.data)}
          rowSelection="single"
          suppressCellFocus={true}
        />
      </div>
    </div>
  );
};

export default PlaceGrid;
