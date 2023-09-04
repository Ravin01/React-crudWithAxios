import { useFormik } from "formik";
import * as yup from 'yup';

const SampleForm = () => {
    const formSchema = yup.object().shape({
        name : yup.string().matches(/^(?=.*[0-9])(?=.{2,})/, "Age must be greater than or equal to 10").required('Name is required'),
        age : yup.string().matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ).required('Age is required'),
        email : yup.string().required('Email is required')

    })
    const formHandle = useFormik({
        initialValues : {
            name : '',
            age : '',
            email : ''
        },
        onSubmit : (val, formReset)=>{
            console.log(val);
            formReset.resetForm();
        },
        validationSchema : formSchema
    });
    // console.log(formHandle)
    return (
        <div>
            <h2>Sample Form</h2>
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" value={formHandle.values.name} onChange={formHandle.handleChange}/>
                <br />
                {formHandle.touched.name && formHandle.errors.name && <p style={{ color : 'red' }}>{formHandle.errors.name}</p>}
                <br />
                <label htmlFor="age">Age : </label>
                <input type="text" id="age" name="age" value={formHandle.values.age} onChange={formHandle.handleChange}/>
                <br />
                {formHandle.touched.age && formHandle.errors.age && <p style={{ color : 'red' }}>{formHandle.errors.age}</p>}
                <br />
                <label htmlFor="email">Name : </label>
                <input type="email" id="email" name="email" value={formHandle.values.email} onChange={formHandle.handleChange}/>
                <br />
                {formHandle.touched.email && formHandle.errors.email && <p style={{ color : 'red' }}>{formHandle.errors.email}</p>}
                <br />
                <button onClick={formHandle.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default SampleForm;