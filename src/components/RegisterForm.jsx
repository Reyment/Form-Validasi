import React, { Component } from 'react';
import validator from 'validator';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      alert(`Form submitted successfully
      Nama: ${this.state.name}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      alert(`Form validation failed`);
    }
  };

  validateForm = () => {
    const { name, email, password, confirmPassword } = this.state;
    let errors = {};
    let isValid = true;

    if (validator.isEmpty(name)) {
      errors.name = 'Nama wajib diisi';
      isValid = false;
    }

    if (!validator.isEmail(email)) {
      errors.email = 'Email tidak valid';
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      errors.password = 'Password wajib diisi';
      isValid = false;
    }

    if (!validator.equals(password, confirmPassword)) {
      errors.confirmPassword = 'Konfirmasi password tidak sesuai';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  render() {
    const { name, email, password, confirmPassword, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Konfirmasi Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegisterForm;
