import React, { useState } from 'react'

const DischargeComp = () => {
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
    <div className='dischargeform'>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset>
          <legend><strong>✍ Discharge Form:</strong></legend>
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
              name='mobilenumber'
              value={inputs.mobilenumber || ""}
              onChange={handleChange}
              className="form-control"
              placeholder='Enter Number' />
          </div>

          <div className='form-group'>
            <label>Enter Your Email:</label>
            <input type="email"
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className="form-control"
              placeholder='Enter Email' />
          </div>

          <div>
            <label>Select Payment Mode:</label>
            <div class="form-check">
              <input className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value={"Cash"}
                onChange={handleChange}
                id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Cash
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value={"Card"}
                onChange={handleChange}
                id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Card
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value={"Online"}
                onChange={handleChange}
                id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Online
              </label>
            </div>
          </div>

          <div className='form-group'>
            <label>Address:</label>
            <br />
            <textarea name="address"
              value={inputs.address || ""}
              onChange={handleChange}
              cols="50" rows="4" ></textarea>
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

export default DischargeComp