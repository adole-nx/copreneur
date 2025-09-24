import * as yup from "yup";

export const createPostValidation = yup.object({
    content: yup.string().min().required(),
});
