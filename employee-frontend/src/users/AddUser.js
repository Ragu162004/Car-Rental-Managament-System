import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        contact: "",
        number: "",
        time: "",
    });
    const { name, contact, number, time } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Add Details</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Contact" className="form-label">
                                Mobile
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your contact details"
                                name="contact"
                                value={contact}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Vehicle" className="form-label">
                                Vehicle Number
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your vehicle number"
                                name="number"
                                value={number}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="EntryTime" className="form-label">
                                Entry Time
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter the Entry time"
                                name="time"
                                value={time}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary mx-2">
                            Submit
                        </button>
                        <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
