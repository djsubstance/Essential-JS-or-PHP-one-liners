
 .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. |
| |   ______     | || |  ____  ____  | || |   ______     | |
| |  |_   __ \   | || | |_   ||   _| | || |  |_   __ \   | |
| |    | |__) |  | || |   | |__| |   | || |    | |__) |  | |
| |    |  ___/   | || |   |  __  |   | || |    |  ___/   | |
| |   _| |_      | || |  _| |  | |_  | || |   _| |_      | |
| |  |_____|     | || | |____||____| | || |  |_____|     | |
| |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------' 

This I often find useful, a tiny script / template to check 
whether the script is being executed from (CLI) or via a web server.
- returns 1 for CLI
- returns 0 for web server execution

<?php
function checkExecutionEnvironment() {
    if (php_sapi_name() === 'cli') {        return 1;
    //CLI
      } else {
      //  Web Server
        return 0; } }
$result = checkExecutionEnvironment();

// Depending on the context, output the result differently
if (php_sapi_name() === 'cli') {
    // If CLI, just echo the result
    echo $result . "\n";
} else {
// ??? WHATEVER
    header('Content-Type: text/plain');
    echo $result;
}
?>
