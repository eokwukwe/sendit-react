/* eslint-disable max-len */
export default {
  register: {
    firstName: "John",
    lastName: "Doe",
    userEmail: "john@doe.com",
    password: "John.doe1"
  },
  incorrectRegister: {
    firstName: "J",
    lastName: "Doe",
    userEmail: "john@doe.com",
    password: "John.doe1"
  },
  incorrectRegisterResponse: {
    firstName: "firstname is too short"
  },
  history: {
    push: jest.fn()
  },
  registerResponse: {
    message: "You have successfully signed up",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc3LCJ1c2VydHlwZSI6InVzZXIiLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJpYXQiOjE1NTQ3MzM1NTYsImV4cCI6MTU1NDc1ODc1Nn0.vDD5tdIec1LGBe97q6uQ1AYvDL1WqW_8DyppGhJLDCc"
  },
  login: {
    userEmail: "okwukwe.denja@gmail.com",
    password: "John.doe1"
  },
  loginResponse: {
    message: "You have successfully log in",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc3LCJ1c2VydHlwZSI6InVzZXIiLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJpYXQiOjE1NTQ3MzM1NTYsImV4cCI6MTU1NDc1ODc1Nn0.vDD5tdIec1LGBe97q6uQ1AYvDL1WqW_8DyppGhJLDCc"
  },
  incorrectLogin: {
    userEmail: "okwukwe.denja@gmail.com",
    password: "john.doe1"
  },
  incorrectLoginResponse: {
    message: "Incorrect password"
  }
}
