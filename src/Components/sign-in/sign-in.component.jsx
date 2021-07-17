import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.commponent";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }); // for email, name and value is email and for password, name and value is password
  };

  render() {
    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form>
          <FormInput
            name='email'
            type='email'
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
          />

          <CustomButton type='submit'> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
