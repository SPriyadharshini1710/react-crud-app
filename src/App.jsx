import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { createUser, updateUser, deleteUser, getUsers } from "./api/userApi";
import { Container, Typography, Paper } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [editingUser, setEditingUser] = useState(null);

  // ADD or UPDATE
  const handleSubmit = async (data, resetForm) => {
    try {
      // ✅ check duplicate email & phone
      const res = await getUsers();
      const users = res.data || [];

      const duplicate = users.find(
        user =>
          (user.email === data.email || user.phone === data.phone) &&
          user.id !== editingUser?.id
      );

      if (duplicate) {
        toast.error("Email or Phone already exists!");
        return;
      }

      if (editingUser) {
        await updateUser(editingUser.id, data);
        toast.success("User updated successfully!");
      } else {
        await createUser(data);
        toast.success("User added successfully!");
      }

      resetForm();
      setEditingUser(null);

      // reload full page
      setTimeout(() => window.location.reload(), 700);

    } catch (err) {
      console.error(err);
      toast.error("Operation failed!");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully!");
      setTimeout(() => window.location.reload(), 700);
    } catch (err) {
      console.error(err);
      toast.error("Delete failed!");
    }
  };

  return (
    <Container maxWidth="md">
      <Toaster position="top-right" />

      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Users CRUD
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <UserForm onSubmit={handleSubmit} initialData={editingUser} />
      </Paper>

      <UserList
        onEdit={setEditingUser}
        onDelete={handleDelete}
      />
    </Container>
  );
}
