import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TransactionhistoryTable({ tableHeader, tableRow }) {
  return (
    <TableContainer elevation={0} component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" style={{marginBottom:"58px"}} aria-label="a dense table">
        <TableHead sx={{ border: "1px solid #B9B9B9", borderRadius: "7px" }}>
          <TableRow>
            {tableHeader &&
              tableHeader?.map((item) => (
                <TableCell
                  sx={{
                    border: "1px solid #B9B9B9",
                    color: "#07262E",
                    padding: "32px 24px",
                    fontWeight: 700,
                    fontSize: "18px",
                    backgroundColor: "#d8e0e185",
                  }}
                >
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>

        <TableBody className="mb-4">
          {tableRow &&
            tableRow?.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  className="transactionHistory"
                  component="th"
                  scope="row"
                >
                  {row.date}
                </TableCell>
                <TableCell className="transactionHistory">
                  {row.transactionId}
                </TableCell>
                <TableCell className="transactionHistory">
                  {row.description}
                </TableCell>
                <TableCell className="transactionHistory">
                  {row.debit_credit}
                </TableCell>
                <TableCell className="transactionHistory" style={{color:"#009DA6"}}>
                  {row.status}
                </TableCell>
                <TableCell className="transactionHistory">
                  {row.amount}
                </TableCell>
                <TableCell className="transactionHistory">
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
