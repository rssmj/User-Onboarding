import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardingForm = ({ values, errors, touched, status }) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		status && setUsers(users => [...users, status]);
	}, [status]);
	return (
		<div className='onboarding-form'>
			<Form>
				<label htmlFor='name'>
					Name
					<Field id='name' type='text' name='name' placeholder='' />
					{touched.name && errors.name && (
						<p className='errors'>{errors.name}</p>
					)}
                </label>
                
			</Form>
		</div>
	);
};

const FormikOnboardingForm = withFormik({})(OnboardingForm);
export default FormikOnboardingForm;
