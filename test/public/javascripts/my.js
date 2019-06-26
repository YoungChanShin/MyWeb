$(document).ready(function () {
    $('#login_btn').click(function (){
        const email=$('#login_email').val();
        const send_params={
            email
        };
        $.post("/login",send_params,function(data,status){
            const parsed_data=JSON.parse(data);
            $('#login_result_div').html(`<h1>${parsed_data.msg}</h1>`);
        });
    });

    $('#member_insert_btn').click(function () {
        const name = $('#name').val();
        const email = $('#email').val();
        const comments = $('#comments').val();
        const send_params = {
            name,
            email,
            comments
        };
        $.post("/member_insert", send_params, function (data, status) {
            alert("test");            
            const parsed_data = JSON.parse(data);
            $('#result_div').html(parsed_data.msg);
        });//post function
    });//click
});//ready funtion