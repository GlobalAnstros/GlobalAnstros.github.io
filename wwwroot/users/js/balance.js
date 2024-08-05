$(document).ready(function() {
    load_bal();

    setInterval(load_bal, 1500);

    function load_bal() {
        $('#accbalance').load('bal/accbalance.php');
        $('#earnbalance').load('bal/earnbalance.php');
        $('#depbalance').load('bal/depbalance.php');
        $('#withbalance').load('bal/withbalance.php');
    }
});