import './LoginForm.css'
import {Formik} from 'formik'


export function LoginForm(props) {
    // console.log(props)
    return(
        <Formik
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
                ({values, handleChange, handleSubmit}) => (
                    <>

                    <form onSubmit={handleSubmit} className='loginform'>
                      <input placeholder='Name' className='name'value={values.name} onChange={handleChange} name='name'/>
                      <input placeholder='SurName' className='surname' value={values.surname} onChange={handleChange} name='surname'/> <br/>
                      <select name="birthYear" id="" onChange={handleChange} className='selectYear'>
                        <option value="" label='Select Year'></option>
                       {
                        props.years.map((el) => {
                            return <option value={el} key={el}>{el}</option>
                        })
                       }
                      </select> 
                      <select name="birthDay" id="" onChange={handleChange}>
                        <option value="" label='Select Day'></option>
                        {
                            props.days.map((elem) => {
                                return <option value={elem} key={elem}>{elem}</option>
                            })
                        }
                      </select>

                      <select name="birthMonth" id="">
                        <option value="" label='Select Month'></option>
                      </select>

                      <button type='submit' className='submitbutton'>SignUp</button>
                    </form>
                    
                    </>
                )
            }

        </Formik>
    )
}