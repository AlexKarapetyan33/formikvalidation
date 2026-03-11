import './LoginForm.css'
import {Formik} from 'formik'
import * as yup from 'yup'


export function LoginForm(props) {

    const schema = yup.object().shape({
        password: yup.string()
    .min(8, 'Minimum 8 symboles')
    .max(14, 'Maximum 14 symboles')
    .required('password is required'),

  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'password`s must match')
    .required('confirm password'),
    })

    return(
        <Formik
        validationSchema={schema}
        initialValues={{
            name: '',
            surname: '',
            birthYear: '',
            birthMonth: '',
            birthDay: '',
            telephone: '',
            password: '',
            confirmPassword: ''
        }}
        onSubmit={(value) => console.log(value)}
        >
            {
                ({values, handleChange, handleSubmit, errors, touched}) => (
                    <>

                    <form onSubmit={handleSubmit} className='loginform'>
                      <input placeholder='Name' className='name'value={values.name} onChange={handleChange} name='name'/>
                      <input placeholder='SurName' className='surname' value={values.surname} onChange={handleChange} name='surname'/> <br/>
                      <div className='selects'>
                        <select name="birthYear" id="" onChange={handleChange} className='selectYear'>
                        <option value="" label='Select Year'></option>
                       {
                        props.years.map((el) => {
                            return <option value={el} key={el}>{el}</option>
                        })
                       }
                      </select> 
                      <select name="birthDay" id="" onChange={handleChange} className='selectdy'>
                        <option value="" label='Select Day'></option>
                        {
                            props.days.map((elem) => {
                                return <option value={elem} key={elem}>{elem}</option>
                            })
                        }
                      </select>

                      <select name="birthMonth" id="" className='slectmonth'>
                        <option value="" label='Select Month'></option>
                        {
                            props.months.map((element) => {
                                return <option value={element} key={element}>{element}</option>
                            })
                        }
                      </select>
                        </div> <br/>

                        <input value={values.password} onChange={handleChange} name='password' placeholder='Enter Your Password'className='password'/> <br/><br/>
                        {
                            errors.password && touched.password && <p>{errors.password}</p>
                        }
                        <input value={values.confirmPassword} onChange={handleChange} name='confirmPassword' placeholder='Confirm Password' className='password'/><br/>
                        {
                            errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>
                        }
                      <button type='submit' className='submitbutton'>SignUp</button>
                    </form>
                    
                    </>
                )
            }

        </Formik>
    )
}