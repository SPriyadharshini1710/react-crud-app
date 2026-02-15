import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Paper, TableContainer,
  IconButton, CircularProgress, Typography, Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserList({ onEdit, onDelete }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data || []);
    } catch (err) {
      console.error(err);
      setUsers([]);
    }
  };

  if (users === null)
    return (
      <Box textAlign="center" mt={5}>
        <CircularProgress />
      </Box>
    );

  if (!users.length)
    return <Typography align="center">No users found.</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "#fff" }}>First</TableCell>
            <TableCell sx={{ color: "#fff" }}>Last</TableCell>
            <TableCell sx={{ color: "#fff" }}>Phone</TableCell>
            <TableCell sx={{ color: "#fff" }}>Email</TableCell>
            <TableCell sx={{ color: "#fff" }}>Age</TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age || "-"}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => onEdit(user)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}
