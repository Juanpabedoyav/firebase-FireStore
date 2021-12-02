import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {useFormik} from 'formik'
import { createEmployeAsync } from '../redux/actions/actionEmployees';
import '../styles/file.css'
import { fileUpload } from '../helpers/fileUpload';
const Input = styled.input`
    background-color: #db7093;
`

export const Employees = () => {

const dispatch = useDispatch()

const formik = useFormik({
initialValues:{    
    url:'',
    nombre:'',
    correo:'',
    descripcion:'',
},
onSubmit:(data)=>{
// e.prevenDefault();
dispatch(createEmployeAsync(data));
console.log(data);
}

})
const handleClickImg =()=>{
    document.querySelector('.file-button').click();
    
}
const handleImgSubmit =(e)=>{
const file = e.target.files[0];
fileUpload(file)
.then(response=>{
 formik.initialValues.url = response
 console.log(response);

}).catch(error=>{
    console.log(error)
})
console.log(file);
}



    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div div className="col-12">
                        <h3 className="text-center"> Employees </h3>

                        <form onSubmit={formik.handleSubmit} className="form-group">
                            <input  
                            type="file" 
                            className="form-control file-button" 
                            placeholder="url image" 
                            name="url" 
                            required
                            onChange={handleImgSubmit} />
                    <button
                    onClick={handleClickImg}>Upload File
                    </button>

                            <input 
                            type="text" 
                            className="form-control mt-2" 
                            name="nombre" 
                            autoComplete="off"
                            placeholder="user name" 
                            required 
                            onChange={formik.handleChange}/>

                            <input  
                            type="text" 
                            className="form-control mt-2" 
                            name="correo" 
                            autoComplete="off"
                            placeholder="email" 
                            required
                            onChange={formik.handleChange} />

                            <textarea  
                            className="form-control mt-2" 
                            autoComplete="off" 
                            name="descripcion" 
                            placeholder="description" 
                            required
                            onChange={formik.handleChange}></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input 
                                value="Save" 
                                type="submit" 
                                className="btn btn-outline-dark" />
                            </div>
                        </form>
                    </div>

                    
                    <table className="table text-center mt-3">
                  
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>



                </div>
            </div>
        </div>
    )
}
