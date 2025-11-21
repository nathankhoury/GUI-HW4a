$('#form').validate({
    rules: {
        colMin: {
            required: true,
            min: -50,
            max: 50
        },
        colMax: {
            required: true,
            min: -50,
            max: 50
        },
        rowMin: {
            required: true,
            min: -50,
            max: 50
        },
        rowMax: {
            required: true,
            min: -50,
            max: 50
        }
    }
});