$(document).ready(function() {
    // file loaded
    console.log("validate.js: document ready");

    $.validator.addMethod("lteq", function(value, element, param) {
        return Number(value) <= Number($(param).val());
    });

    $.validator.addMethod("gteq", function(value, element, param) {
        return Number(value) >= Number($(param).val());
    });

    $('#form').validate({
        submitHandler: function(form) { 
            // validation succeeded
            console.log("Validation succeeded");
            generate();
        },
        invalidHandler: function(event, validator) {
            // validation failed
            console.log("Validation failed. Number of errors: " + validator.numberOfInvalids());
        },
        errorClass: "error",    
        rules: {
            colMin: {
                required: true,
                number: true,
                range: [-50, 50],
                lteq: "#colMax"
            },
            colMax: {
                required: true,
                number: true,
                range: [-50, 50],
                gteq: "#colMin"
            },
            rowMin: {
                required: true,
                number: true,
                range: [-50, 50],
                lteq: "#rowMax"
            },
            rowMax: {
                required: true,
                number: true,
                range: [-50, 50],
                gteq: "#rowMin"
            }
        },
        messages: {
            colMin: {
                required: "It is required to enter a minimum column value",
                number: "Please enter a valid number",
                range: "Minimum column value must be between -50 and 50",
                lteq: "Minimum column value must be less than or equal to maximum column value"
            },
            colMax: {
                required: "It is required to enter a maximum column value",
                number: "Please enter a valid number",
                range: "Maximum column value must be between -50 and 50",
                gteq: "Maximum column value must be greater than or equal to minimum column value"
            },
            rowMin: {
                required: "It is required to enter a minimum row value",
                number: "Please enter a valid number",
                range: "Minimum row value must be between -50 and 50",
                lteq: "Minimum row value must be less than or equal to maximum row value"
            },
            rowMax: {
                required: "It is required to enter a maximum row value",
                number: "Please enter a valid number",
                range: "Maximum row value must be between -50 and 50",
                gteq: "Maximum row value must be greater than or equal to minimum row value"
            }
        }
    });

    // Address hanging error messages when related fields are changed
    $('#colMax').on('input change', function() { $('#colMin').valid(); });
    $('#colMin').on('input change', function() { $('#colMax').valid(); });
    $('#rowMax').on('input change', function() { $('#rowMin').valid(); });
    $('#rowMin').on('input change', function() { $('#rowMax').valid(); });
});