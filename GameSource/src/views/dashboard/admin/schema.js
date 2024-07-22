import * as yup from "yup";

const articlesSchema = {
  game: yup.string().required("Game name is required"),
  title: yup
    .string()
    .required("Title for article is required")
    .min(10, "Atleast 10 characters")
    .max(50, "Max 50 characters"),
  excerpt: yup
    .string()
    .required("Excerpt is required")
    .min(50, "Atleast 50 characters")
    .max(400, "Max 400 characters"),
  //   editor: yup
  //     .string()
  //     .required("Expert is required")
  //     .min(100, "Atleast 100 characters"),
  rating: yup
    .string()
    .required("Rating is required")
    .notOneOf(["Select a rating"], "You need to select a rating"),
  img: yup.string().required("Image is required").url("Not a valid url?"),
};

export default articlesSchema;
