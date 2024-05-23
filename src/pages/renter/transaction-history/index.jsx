import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../../../assets/theme";
import {
  DownloadIcon,
  SearchIcon,
  eyeIcon,
  eyeViewIcon,
} from "../../../assets/icons";
import TransactionhistoryTable from "../../../components/transactionhistory";

export default function TransactionHistory() {
  const tableHeader = [
    "Date & Time",
    "Transaction History",
    "Description",
    "Credit/Debit",
    "Status",
    "Amount",
    "Action",
  ];
  const tableRow = [
    {
      date: "01/09/2023 10:30 AM",
      transactionId: "ORD-1562792778679",
      description: "Transfer to Jimmy Parson",
      debit_credit: "Debit",
      status: "Success",
      amount: "N 10,000",
      action: (
        <>
          {eyeViewIcon()}
          {DownloadIcon()}
        </>
      ),
    },
    {
      date: "01/09/2023 10:30 AM",
      transactionId: "ORD-1562792778679",
      description: "Transfer to Jimmy Parson",
      debit_credit: "Debit",
      status: "Success",
      amount: "N 10,000",
      action: (
        <>
          {eyeViewIcon()}
          {DownloadIcon()}
        </>
      ),
    },
    {
      date: "01/09/2023 10:30 AM",
      transactionId: "ORD-1562792778679",
      description: "Transfer to Jimmy Parson",
      debit_credit: "Debit",
      status: "Success",
      amount: "N 10,000",
      action: (
        <>
          {eyeViewIcon()}
          {DownloadIcon()}
        </>
      ),
    },
    {
      date: "01/09/2023 10:30 AM",
      transactionId: "ORD-1562792778679",
      description: "Transfer to Jimmy Parson",
      debit_credit: "Debit",
      status: "Success",
      amount: "N 10,000",
      action: (
        <>
          {eyeViewIcon()}
          {DownloadIcon()}
        </>
      ),
    },
  ];
  return (
    <Container>
      <Box>
        <Typography
          fontSize={40}
          fontWeight={700}
          color={theme.palette.text.primary}
        >
          Transaction History
        </Typography>
      </Box>
      <Box className="mb-4 mt-4">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="search"
              variant="outlined"
              className="w-100"
              placeholder="search"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TransactionhistoryTable
          tableHeader={tableHeader}
          tableRow={tableRow}
        />
      </Box>
    </Container>
  );
}
