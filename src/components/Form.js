import React from "react";

const Form = props => (
    <form onSubmit={ props.chooseFood }>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="price" placeholder="Price" />
        <button>Submit</button>
    </form>
);

export default Form;