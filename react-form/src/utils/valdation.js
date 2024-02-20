export const validation = (values) => {
    const errors = {}
    const re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$");
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12})$/;

    if (values.name === "") {
        errors.name = "Name is required";
    }

    if (values.email === "") {
        errors.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match";
    }

    if (values.password === "") {
        errors.password = "Password is required";
    } else if (!re.test(values.password)) {
        errors.password = "Password didn't match";
    }

    if (values.age === "") {
        errors.age = "Age is required";
    }

    if (values.country === "") {
        errors.country = "Country is required";
    }

    return errors;
}