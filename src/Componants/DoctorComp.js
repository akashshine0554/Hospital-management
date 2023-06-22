import React, { useState } from 'react'

const DoctorComp = () => {


    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)

    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const obj = {
            ...inputs,
            [name]: value
        }
        setInputs(obj);
    }

    return (
        <div className='doctorform'>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset>
                    <legend><strong>✍ Call For Doctor:</strong></legend>

                    <div className='form-group'>
                        <label>Enter Your Name:</label>
                        <input type="text"
                            name='name'
                            value={inputs.name || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Name' />
                    </div>

                    <div className='form-group'>
                        <label>Enter Your Contact Number:</label>
                        <input type="number"
                            name='number'
                            value={inputs.number || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Number' />
                    </div>


                    <div>
                        <label>Select Your Gender:</label>
                        <div class="form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value={"Male"}
                                onChange={handleChange}
                                id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value={"Female"}
                                onChange={handleChange}
                                id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Enter Your Time:</label>
                        <input type="time"
                            name='time'
                            value={inputs.time || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Number' />
                    </div>

                    <div className='form-group'>
                        <label>Enter Your Date:</label>
                        <input type="date"
                            name='date'
                            value={inputs.date || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Number' />
                    </div>

                    <div className='form-group'>
                        <label> Address:</label>
                        <br />
                        <textarea name="address"
                            value={inputs.address || ""}
                            onChange={handleChange}
                            cols="50" rows="4"
                            placeholder='Enter Here..' ></textarea>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="submit">Submit</button>
                        <button class="btn btn-primary" type="button">Cancel</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default DoctorComp