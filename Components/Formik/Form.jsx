import { useFormik } from "formik";
import * as yup from 'yup';

const Form = () => {
    const formSchema = yup.object().shape({
        title : yup.string().required("Name is required"),
        age : yup.string().required("Age is required"),
        email : yup.string().required("Email is required")
    })
    const sampleForm = useFormik({
        initialValues : {
            name : '',
            age : '',
            email : ''
        },
        onSubmit : (values, formHelpers)=>{
            console.log(values),
            formHelpers.resetForm();
        },
        validationSchema : formSchema
    })
    return (
        <div>
            <h2>Form</h2>
            <form action="" onSubmit={sampleForm.handleChange}>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" value={sampleForm.values.name} onChange={sampleForm.handleChange}/>
                <br />
                {sampleForm.touched.name && sampleForm.errors.name && <p style={{
                    color : "red",
                    padding : 0,
                    margin : 0
                }}>{sampleForm.errors.title}</p>}
                <br />
                <label htmlFor="age">Age : </label>
                <input type="text" id="age" name="age"  value={sampleForm.values.age} onChange={sampleForm.handleChange}/>
                <br />
                {sampleForm.touched.age && sampleForm.errors.age && <p style={{
                    color : "red",
                    padding : 0,
                    margin : 0
                }}>{sampleForm.errors.age}</p>}
                <br />
                <label htmlFor="name">Email : </label>
                <input type="email" id="email" name="email"  value={sampleForm.values.email} onChange={sampleForm.handleChange}/>
                <br />
                { sampleForm.touched.email && sampleForm.errors.email && <p style={{
                    color : "red",
                    padding : 0,
                    margin : 0
                }}>{sampleForm.errors.email}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form