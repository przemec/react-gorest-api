import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GOREST_API_TOKEN } from "../../../api/gorest_api_token";
import { user, user_add_error_response, user_add_response } from "../../../api/gorest_response_models";
import { addNewUser } from "../../../store/users/actions";
import * as S from "../styles";

const NewUser = () => {
  const dispatch = useDispatch();
  const initialValues: user = {
    name: "",
    email: "",
    gender: "male",
    status: "active",
  };
  const [formValues, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formValues);
      const res = await fetch("https://gorest.co.in/public/v1/users", {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${GOREST_API_TOKEN}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          gender: formValues["gender"],
          name: formValues["name"],
          email: formValues["email"],
          status: formValues["status"],
        }),
      });

      if (res.status === 201) {
        const resJson: user_add_response = await res.json();
        setValues(initialValues);
        dispatch(addNewUser({ ...formValues, id: resJson.data.id }));
        setMessage("User created successfully.");
      } else {
        const resJson: user_add_error_response = await res.json(); 
        setMessage(`${resJson.data[0].field} ${resJson.data[0].message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputsChange = (inputId: string, value: string) => setValues({ ...formValues, [inputId]: value });
  const handleChange = (event: any) => {
    const { id: inputId, value: inputValue } = event.target;
    handleInputsChange(inputId, inputValue);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormRow>
        <S.Label htmlFor="name">Name</S.Label>
        <S.Input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} value={formValues["name"] || ""} />
      </S.FormRow>
      <S.FormRow>
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formValues["email"] || ""}
        />
      </S.FormRow>
      <S.FormRow>
        <S.Label htmlFor="gender">Gender</S.Label>
        <S.Select id="gender" name="gender" onChange={handleChange} defaultValue={formValues["gender"]}>
          <S.Option value="male">Male</S.Option>
          <S.Option value="female">Female</S.Option>
        </S.Select>
      </S.FormRow>
      <S.FormRow>
        <S.Label htmlFor="status">Status</S.Label>
        <S.Select id="status" name="status" onChange={handleChange} defaultValue={formValues["status"]}>
          <S.Option value="active">Active</S.Option>
          <S.Option value="inactive">Inactive</S.Option>
        </S.Select>
      </S.FormRow>

      <S.SubmitButton type="submit">Create User</S.SubmitButton>

      {message && <p>{message}</p>}
    </S.Form>
  );
};

export default NewUser;
