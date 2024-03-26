import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, Name, duration, lessons, status, publishAt, removedAt) {
  duration = duration / 3600;
  const noOfLessons = 0;
  if (lessons.length > 0) {
    noOfLessons = lessons.length;
  }
  publishAt = new Date(publishAt);
  publishAt = publishAt.getDay();
  return { id, Name, duration, noOfLessons, status, publishAt, removedAt };
}

export default function CustomizedTables({ tableData }) {
  console.log(tableData);
  const rowData = tableData.map((data) => {});
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right" color="green">
              Calories
            </StyledTableCell>
            <StyledTableCell align="right">ID&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Name&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">
              Duration (hrs)&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell align="right">Status&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">
              PublishedAt&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell align="right">Removed At&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.duration}</StyledTableCell>
              <StyledTableCell align="right">{row.noOfLessons}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.publishAt}</StyledTableCell>
              <StyledTableCell align="right">{row.removedAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
