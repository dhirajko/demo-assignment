import React, { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import "./add-page.css";
import { Formik, Form, Field } from "formik";
import { AddFormProps } from '../../model/add-form-props';
import { addFormValidator } from '../../utils/validator';
import { Project } from '../../model/project';

const AddForm: FC<AddFormProps> = ({addProject}: AddFormProps) => {
    return (
        <div className="form-container">
            <Formik
                initialValues={
                    {
                        name: '',
                        url: '',
                        rating: ''
                    }
                }
                validationSchema={addFormValidator}
                onSubmit={values => {
                    const now = new Date().toISOString().slice(0, 10);
                    const project: Project = {
                        ...values,
                        id: uuidv4(),
                        created_at: now
                    }
                    addProject(project);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="field-holder">
                            <label htmlFor={'name'}>name: </label>
                            <Field id ="name" name="name" />
                        </div>
                        <div className="error-message">{errors.name && touched.name ?  errors.name: null}</div>
                        <div className="field-holder">
                            <label htmlFor={'url'}>url: </label>
                            <Field id ="url" name="url" />
                        </div>
                        <div className="error-message">{errors.url && touched.url ?errors.url : null}</div>
                        <div className="field-holder">
                            <label htmlFor={'rating'}>rating: </label>
                            <Field id ="rating" name="rating" type="r"/>
                        </div>
                        <div className="error-message">{errors.rating && touched.rating ? errors.rating : null}</div>
                        <div className="button-group">
                            <button type="submit" className="submit-button">Submit</button>
                            <Link to="/"><button type="button" className="submit-button">Cancel</button></Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddForm;
