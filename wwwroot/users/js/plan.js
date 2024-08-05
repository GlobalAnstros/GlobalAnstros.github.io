$(document).ready(function() {
    let method = $('.getaddress').data('method');
    let amount = $('.getaddress').data('amount');
    $.ajax({
        url: 'data/action.php',
        type: 'POST',
        data: { method: method},
        success: function(data) {
            if (data !== '') {
                $('.method').html(method);
                $('.amount').html('$'+ amount);
                $('.address').html(data);
                $('.myaddress').attr('src', 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl="'+ data +'"');
            }
        }
    })
});