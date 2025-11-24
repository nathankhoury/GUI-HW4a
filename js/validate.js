$(document).ready(function() {
    $('#form').validate({
        rules: {
            colMin: {
                required: true,
                range: [-50, 50]
            },
            colMax: {
                required: true,
                range: [-50, 50]
            },
            rowMin: {
                required: true,
                range: [-50, 50]
            },
            rowMax: {
                required: true,
                range: [-50, 50]
            }
        },
        messages: {
            colMin: {
                required: "It is required to enter a minimum column value",
                range: "Minimum column value must be between -50 and 50"
            },
            colMax: {
                required: "It is required to enter a maximum column value",
                range: "Maximum column value must be between -50 and 50"
            },
            rowMin: {
                required: "It is required to enter a minimum row value",
                range: "Minimum row value must be between -50 and 50"
            },
            rowMax: {
                required: "It is required to enter a maximum row value",
                range: "Maximum row value must be between -50 and 50"
            }
        }
    });
});