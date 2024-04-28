import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Box, Button } from "@mui/material";

const itemsPerPage = 5;

const UserTable = ({ page, setPage, data, handleClickOpen }) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Username </TableCell>
              <TableCell align="center"> Phone </TableCell>
              <TableCell align="center"> Email </TableCell>
              <TableCell align="center"> City </TableCell>
              <TableCell align="center"> Street </TableCell>
              <TableCell align="center"> Number </TableCell>
              <TableCell align="center"> Zipcode </TableCell>
              <TableCell align="center"> View </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.street}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.zipcode}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleClickOpen(row)}
                  >
                    {" "}
                    View{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </>
  );
};

export default UserTable;
