import "./style.css";
import { useState } from "react";
import React from "react";
import { BsPlusLg } from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx';


const Main = () => {
    const [openMain_form, setopenMain_form] = useState(false);
    const open_form =  () =>
    {
        setopenMain_form(true)
    }
    const Main_form = () =>
{
    return (
        <div className="form" id="form" >
                <form action="">
                    <div className="form_header">
                        <h3>Create Interview</h3>
                        <button onClick={() => setopenMain_form(false)}>
                        <RxCross2/>
                        </button>
                        
                    </div>
                    <div className="input_container">
                        <label for="name">NAME: </label><br />
                        <input id="name" type="text" placeholder="Eg: Jhon" required /><br />
                    </div>
                    <div className="input_container">
                        <label for="email">Email: </label><br />
                        <input id="email" type="email" placeholder="Eg: abc@example.com" required /><br />
                    </div>
                    <div className="input_container">
                        <label for="phone">Phone Number: </label><br />
                        <input id="phone" type="number" placeholder="eg: 984798247" size="10"
                            required /><br />
                    </div>
                    <div className="input_container">
                        <label for="date">Date: </label><br />
                        <input id="date" type="date" required />
                    </div>
                    <div className="input_container">
                        <label for="st">Start Time: </label>
                        <label for="et" style={{ marginLeft: "72px" }}>End Time: </label><br />
                        <input id="st" type="time" required />
                        <input id="et" type="time" required />
                    </div>
                    <div>
                        <button className="form_btn" type="submit" onClick={() => setopenMain_form(false)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
    )
}
    return (
        <div >
            <div className="header">
                <h1 class="main_heading"> Interview Creation Portal</h1>

                <div class="btn_primary_container">
                    <button className="btn_primary" onClick={open_form}>
                        <BsPlusLg />
                        ADD AN INTERVIEW
                    </button>
                </div>
            </div>
        {openMain_form && (<Main_form/>)}     
        </div>
    )
}
// const open_interview_form = () =>
// {
//  var form = g
// }

export default Main