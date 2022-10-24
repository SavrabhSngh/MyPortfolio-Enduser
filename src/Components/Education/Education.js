import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import "./Education.css";
import GetIcons from "../../Common/GetIcons";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const Education = () => {
  function createData(qualification, institute, passYear, percent) {
    return { qualification, institute, passYear, percent };
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const rows = [
    createData("Post Graduation", "Mumbai University", 2023, 80, 4.3),
    createData("Graduation", "RSMT, Varanasi", 2021, 73, 6.0),
    createData("HSC", "RSCSS", 2018, 63, 4.3),
    createData("SSC", "TAHS", 2016, 73, 4),
  ];

  return (
    <Card sx={{ minWidth: 275, m: "30px" }}>
      <div className="card-header dflex">
        {GetIcons("School")} <h2>Education</h2>
      </div>
      <Divider />
      <CardContent>
        <TableContainer>
          <Table aria-label="customized table" sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Sr. No.</StyledTableCell>
                <StyledTableCell align="center">
                  Degree/Qualification
                </StyledTableCell>
                <StyledTableCell align="center">
                  Institute (University/Board)
                </StyledTableCell>
                <StyledTableCell align="center">Passing Year</StyledTableCell>
                <StyledTableCell align="center">Percentage</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.qualification}</TableCell>
                  <TableCell align="center">{row.institute}</TableCell>
                  <TableCell align="center">{row.passYear}</TableCell>
                  <TableCell align="center">{row.percent}</TableCell>
                  <TableCell align="center">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Education;
