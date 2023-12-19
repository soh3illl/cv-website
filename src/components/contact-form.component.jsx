import React, { Fragment, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const formInputDefaults = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
};

const ContactForm = () => {
    const [formInputs, setFormInputes] = useState(formInputDefaults);
    const [isSubmited, setIsSubmited] = useState(false);
    const { name, email, phoneNumber, message } = formInputs;

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormInputes({ ...formInputs, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmited(true);

        if (!name || !email || !phoneNumber || !message) {
            return;
        }

        setFormInputes(formInputDefaults);
        setIsSubmited(false);
        toast.success("your message has been sent");
    };

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        onChange={changeHandler}
                        placeholder="Enter your name..."
                    />
                    <label htmlFor="name">Full name</label>
                    {!name && isSubmited && (
                        <div className="invalid-feedback">
                            A name is required.
                        </div>
                    )}
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        onChange={changeHandler}
                        placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                    {!email && isSubmited && (
                        <div className="invalid-feedback">
                            An email is required.
                        </div>
                    )}
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        name="phoneNumber"
                        type="tel"
                        onChange={changeHandler}
                        placeholder="(123) 456-7890"
                    />
                    <label htmlFor="phone">Phone number</label>
                    {!phoneNumber && isSubmited && (
                        <div className="invalid-feedback">
                            A phone number is required.
                        </div>
                    )}
                </div>
                {/* <!-- Message input--> */}
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        name="message"
                        onChange={changeHandler}
                        type="text"
                        placeholder="Enter your message here..."
                        style={{ height: `10rem` }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    {!message && isSubmited && (
                        <div className="invalid-feedback">
                            A message is required.
                        </div>
                    )}
                </div>
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">
                            Form submission successful!
                        </div>
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                        Error sending message!
                    </div>
                </div>
                {/* <!-- Submit Button--> */}
                <div className="d-grid">
                    <button
                        className="btn btn-primary btn-lg"
                        id="submitButton"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Toaster />
        </Fragment>
    );
};

export default ContactForm;
