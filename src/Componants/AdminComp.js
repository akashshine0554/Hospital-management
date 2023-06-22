import React from 'react'

const AdminComp = () => {
    return (
        <>
            <div className='adminform'>
                <form action="">
                    <fieldset>
                        <legend><strong>✍ Login For Admin :</strong></legend>

                        <div className='form-group'>
                            <label>Enter Your Username:</label>
                            <input type="email"
                                name='email'
                                className="form-control"
                                placeholder='Enter Email' />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label>Enter Your Password:</label>
                            <input type="password"
                                name='password'
                                className="form-control"
                                placeholder='Enter Password' />
                        </div>
                        <br />


                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2" type="submit">Login </button>
                            <button class="btn btn-primary" type="button">Logout</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default AdminComp