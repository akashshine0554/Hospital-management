import React, { useState } from 'react'

const RoomComp = () => {

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
        <div className='roomform'>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset>
                    <legend><strong>✍ Room Reservation Form:</strong></legend>

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

                    <div className='form-group'>
                        <label>Enter Your Email:</label>
                        <input type="email"
                            name='email'
                            value={inputs.email || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Email' />
                    </div>

                    <div className='form-group'>
                        <label>Enter Your Age:</label>
                        <input type="number"
                            name='age'
                            value={inputs.age || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Age' />
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

                    <div>
                        <label>Select Your Room Type:</label>
                        <div class="form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="flexRadioDefault1"
                                value={"Genral Ward"}
                                onChange={handleChange}
                                id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Genral Ward
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input"
                                type="radio"
                                name="flexRadioDefault1"
                                value={"Private"}
                                onChange={handleChange}
                                id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Private
                            </label>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Enter Date Start from:</label>
                        <input type="date"
                            name='sdate'
                            value={inputs.sdate || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder='Enter Date' />
                    </div>
                    <br />

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="submit">Submit</button>
                        <button class="btn btn-primary" type="button">Cancel</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default RoomComp