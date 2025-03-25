import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchEmployees } from "../../redux/slice/employeeSlice";
import "./CurrentEmployees.css";

// Fonction utilitaire pour formater les dates en DD/MM/YYYY
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const CurrentEmployees = () => {
  const dispatch = useDispatch();

  // Récupération automatique des employés depuis Firebase lors du chargement de la page
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  // Récupération de la liste des employés stockés dans Redux
  const employees = useSelector((state) => state.employees.list);

  // Définition des états pour gérer la recherche et la pagination
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize });

  // Définition des colonnes du tableau avec formatage des dates
  const columns = useMemo(
    () => [
      { header: "First Name", accessorKey: "firstName" },
      { header: "Last Name", accessorKey: "lastName" },
      { header: "Department", accessorKey: "department" },
      {
        header: "Date of Birth",
        accessorKey: "dateOfBirth",
        cell: (info) => formatDate(info.getValue()),
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        cell: (info) => formatDate(info.getValue()),
      },
      { header: "Street", accessorKey: "street" },
      { header: "City", accessorKey: "city" },
      { header: "State", accessorKey: "state" },
      { header: "Zip Code", accessorKey: "zipCode" },
    ],
    []
  );

  // Initialisation du tableau React table avec les employés et la pagination
  const table = useReactTable({
    data: employees,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="current-employees">
      <Navbar />
      <h1 className="title">Current Employees</h1>

      {/* Barre de recherche */}
      <div className="controls">
        <label>
          <i className="fas fa-search"></i> Search:
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="search-input"
          />
        </label>
      </div>

      {/* Tableau des employés avec gestion de l'affichage */}
      <div className="table-container">
        <table className="employees-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Gestion de la pagination */}
      <div className="pagination">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <i className="fas fa-angle-double-left"></i> First
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <i className="fas fa-angle-left"></i> Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next <i className="fas fa-angle-right"></i>
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          Last <i className="fas fa-angle-double-right"></i>
        </button>

        {/* Sélection du nombre d'entrées affichées */}
        <label>
          Show
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          entries
        </label>
      </div>

      {/* Bouton de retour */}
      <button className="home-button" onClick={() => window.history.back()}>
        <i className="fas fa-home"></i> Home
      </button>

      <Footer />
    </div>
  );
};

export default CurrentEmployees;
