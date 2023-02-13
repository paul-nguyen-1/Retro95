import React from "react";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

function CountriesModal() {
  return (
    <Window
      style={{
        width: "320px",
        height: "420px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <WindowHeader>Country.exe</WindowHeader>
      <WindowContent>
        <Table style={{height: '280px'}}>
          <TableHead>
            <TableRow>
              <TableHeadCell>Area</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell disabled>Category</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableDataCell style={{ textAlign: "center" }}>
                <span>Italian</span>
              </TableDataCell>
              <TableDataCell>Arrabiata</TableDataCell>
              <TableDataCell>Vegetarian</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell style={{ textAlign: "center" }}>
                <span>Italian</span>
              </TableDataCell>
              <TableDataCell>Arrabiata</TableDataCell>
              <TableDataCell>Vegetarian</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell style={{ textAlign: "center" }}>
                <span>Italian</span>
              </TableDataCell>
              <TableDataCell>Arrabiata</TableDataCell>
              <TableDataCell>Vegetarian</TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </WindowContent>
    </Window>
  );
}

export default CountriesModal;
