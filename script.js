
const form3 = document.getElementById("task3");
const form4 = document.getElementById("task4");

function validate(form) {

    if (form === form4) {
        const password = document.getElementById("password");
        const confirm = document.getElementById("confirmPassword");

        confirm.setCustomValidity(
            password.value === confirm.value ? "" : "Passwords do not match"
        );

        const gender = form.querySelector('input[name="gender"]:checked');

        document.getElementById("genderValid").classList.toggle("d-block", !!gender);
        document.getElementById("genderInvalid").classList.toggle("d-block", !gender);
    }

    const fields = form.querySelectorAll(
        "input:not([type=radio]):not([type=checkbox]), textarea, select"
    );

    fields.forEach(function(field) {
        field.classList.toggle("is-valid", field.checkValidity());
        field.classList.toggle("is-invalid", !field.checkValidity());
    });
}

[form3, form4].forEach(function(form) {

    form.onsubmit = function(event) {
        event.preventDefault();
        validate(form);
    };

    form.oninput = function() {
        validate(form);
    };

    form.onchange = form.oninput;
});

form4.onreset = function() {
    form4.querySelectorAll(".is-valid, .is-invalid, .d-block").forEach(function(field) {
        field.classList.remove("is-valid", "is-invalid", "d-block");
    });

    document.getElementById("confirmPassword").setCustomValidity("");
};
