// TODO: action types
const SIGNUP_FORM = "signup/SIGNUP_FORM";
const SIGNUP_ERROR = "signup/SIGNUP_ERROR";
const RESET_SIGNUP_FORM = "signup/RESET_SIGNUP_FORM";

// TODO: action creators
export const signUpForm = (form) => ({ type: SIGNUP_FORM, form });
export const signUpError = (error) => ({ type: SIGNUP_ERROR, error });
export const resetForm = () => ({ type: RESET_SIGNUP_FORM });

// TODO: initialState
const initialState = {
  form: {
    email: "",
    username: "",
    displayName: "",
    password: "",
  },
  error: {
    code: "",
    message: "",
  },
};

// TODO: reducer
const signup = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.form.name]: action.form.value,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          code: action.error.code,
          message: action.error.message,
        },
      };
    case RESET_SIGNUP_FORM:
      return initialState;
    default:
      return state;
  }
};

export default signup;
