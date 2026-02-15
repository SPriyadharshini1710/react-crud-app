import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { userFields } from "../utils/formFields";

export default function UserForm({ onSubmit, initialData }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: initialData || {}
  });

  useEffect(() => {
    reset(initialData || {});
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      {userFields.map(field => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type}
          fullWidth
          margin="normal"
          {...register(field.name, {
            required: field.required && `${field.label} is required`,
            maxLength: field.maxLength && {
              value: field.maxLength,
              message: `Max ${field.maxLength} characters`
            }
          })}
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message}
        />
      ))}

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        {initialData?.id ? "Update" : "Add"}
      </Button>
    </form>
  );
}
