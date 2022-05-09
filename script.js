console.log('js');


$(document).ready(onReady);


function onReady() {

    $('#submitButton').on('click', addInfo);
    $('#submitButton').on('click', annualCalculation);
    $('#table').on('click', '.delete-button', deleteEmploye);
    $('#cleanTable').on('click', function () {
        $('#table').empty();
    })
}
let sum = 0;
let data = [];
function addInfo(event) {

    // get all the values from the input

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#ID').val();
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());
    data.push(annualSalary);
    // console.log(firstName, lastName, id, title, annualSalary);

    // this empty the input spot after submit button be click 

    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    annualCalculation();
    // this is the table for employees

    $('#table').append(`
<tr>
   <td>${firstName}</td>
   <td>${lastName}</td>
   <td>${id}</td>
   <td>${title}</td>
   <td>${annualSalary}</td>
   <td><button class="delete-button">Delete</button></td>
</tr>

`);

}

// delete element button

function deleteEmploye(event) {

    $(event.target).closest('tr').remove();
}

// calculation for the total  for a month

function annualCalculation() {
    sum = 0;
    for (i = 0; i < data.length; i++) {
        sum += data[i]
    }

    sum /= 12;
    $('#totalmonthly').empty()
    $('#totalmonthly').append(sum);

    if (sum > 20000) {
        $('.under').addClass('color');
    }

}


