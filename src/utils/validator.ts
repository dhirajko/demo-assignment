import * as Yup from 'yup';
import { WEBSITE_REGEX } from '../config/constants';

export const addFormValidator = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  url: Yup.string()
    .required('Required')
    .matches(WEBSITE_REGEX, 'invalid url'),
  rating: Yup.number()
    .max(5)
    .min(1)
    .required('Required'),
});
