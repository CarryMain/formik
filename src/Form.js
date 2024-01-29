// import {useFormik} from 'formik';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {

    const [field, meta] = useField(props)
    
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>) : null}
        </>
    )
}

// const validate = values => {
//     const errors = {}

//     if(!values.name) {
//         errors.name = 'Required field!'
//     }
//     else if(values.name.length < 3) {
//         errors.name = 'Minimum 3 symbol'
//     }

//     if(!values.email) {
//         errors.email = 'Required field!'
//     }
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Errors email address'
//     }
//     return errors
// }

const CustomForm = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         amount: 0,
    //         currency: '',
    //         text: '',
    //         terms: false,
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string().min(3, 'Minimum 3 symbol!!!').required('Required field!!!'),
    //         email: Yup.string().email('Errors email address').required('Required field!!!'),
    //         amount: Yup.number().min(5, 'Ne menee 5').required('Required field!!!'),
    //         currency: Yup.string().required('Ented a value'),
    //         text: Yup.string().min(10, 'Ne menee 10 symbol'),
    //         terms: Yup.boolean().required('Neobhodimo soglasie').oneOf([true], 'Neobhodimo soglasie')
    //     }),
    //     onSubmit: values => console.log(JSON.stringify(values, null, 2))
    // })
    return (
        <Formik initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
        }} validationSchema = {Yup.object({
            name: Yup.string().min(3, 'Minimum 3 symbol!!!').required('Required field!!!'),
            email: Yup.string().email('Errors email address').required('Required field!!!'),
            amount: Yup.number().min(5, 'Ne menee 5').required('Required field!!!'),
            currency: Yup.string().required('Ented a value'),
            text: Yup.string().min(10, 'Ne menee 10 symbol'),
            terms: Yup.boolean().required('Neobhodimo soglasie').oneOf([true], 'Neobhodimo soglasie')
        })} onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>

            <Form className="form">
                <h2>Отправить пожертвование</h2>
                {/* <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    // {...formik.getFieldProps('name')}
                />
                {/* {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null} */}
                <MyTextInput label='Ваше имя' id="name" name="name" type="text"/>
                {/* <label htmlFor="email">Ваша почта</label> */}
                {/* <Field
                    id="email"
                    name="email"
                    type="email"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
                <ErrorMessage className="error" name='email' component='div'/> */}
                <MyTextInput label='Ваша почта' id="email" name="email" type="email"/>
                <MyTextInput label='Количество' id="amount" name="amount" type="number"/>
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name='currency' component='div'/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name='text' component='div'/>
                <label className="checkbox">
                    <Field name="terms" type="checkbox"/>
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className="error" name='terms' component='div'/>
                <button type="submit">Отправить</button>
          </Form>
        </Formik>
    )
}

export default CustomForm;