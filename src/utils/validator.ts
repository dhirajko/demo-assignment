import * as Yup from "yup";

export const addFormValidator = Yup.object().shape({
    name: Yup.string().required('Required'),
    url: Yup.string().required('Required'),
    rating: Yup.number()
        .max(5)
        .min(1)
        .required('Required')
});
