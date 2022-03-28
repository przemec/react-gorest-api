import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GOREST_API_TOKEN } from "../../../api/gorest_api_token";
import { post, add_error_response, post_add_response } from "../../../api/gorest_response_models";
import { addNewPost } from "../../../store/posts/actions";
import * as S from "../styles";

const NewPost = () => {
  const dispatch = useDispatch();
  const initialValues: post = {
    user_id: 4090,
    title: "",
    body: "",
  };
  const [formValues, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://gorest.co.in/public/v1/posts", {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${GOREST_API_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          user_id: formValues["user_id"],
          title: formValues["title"],
          body: formValues["body"],
        }),
      });
      if (res.status === 201) {
        const resJson: post_add_response = await res.json();
        setValues(initialValues);
        dispatch(addNewPost({ ...formValues, id: resJson.data.id }));
        setMessage("Post created successfully.");
      } else {
        const resJson: add_error_response = await res.json();
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
      <h2>Create new post</h2>
      <S.FormRow>
        <S.Label htmlFor="title">Post title</S.Label>
        <S.Input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formValues["title"] || ""}
        />
      </S.FormRow>
      <S.FormRow>
        <S.Label htmlFor="body">Post body</S.Label>
        <S.TextArea
          id="body"
          name="body"
          placeholder="Text of the post"
          onChange={handleChange}
          value={formValues["body"] || ""}
        />
      </S.FormRow>
      <S.FormRow>
        <S.Label htmlFor="user_id">ID of the posting user</S.Label>
        <S.Input
          type="number"
          id="user_id"
          name="user_id"
          placeholder="User ID"
          onChange={handleChange}
          value={formValues["user_id"] || ""}
        />
      </S.FormRow>

      <S.SubmitButton type="submit">Create</S.SubmitButton>

      {message && <p>{message}</p>}
    </S.Form>
  );
};

export default NewPost;
