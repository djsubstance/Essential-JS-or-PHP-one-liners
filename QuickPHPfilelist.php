

░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░       ░▒▓████████▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓███████▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓███████▓▒░░▒▓████████▓▒░▒▓███████▓▒░       ░▒▓██████▓▒░ ░▒▓█▓▒░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓██████▓▒░   ░▒▓█▓▒░     
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░  ░▒▓█▓▒░     
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░      ░▒▓█▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░▒▓███████▓▒░   ░▒▓█▓▒░     
                                                                                                                                          
                                      [ Very Simple and Effective Password Protected PHP File lister ]

Filename: QuickPHPfilelist.php
Created: 07/27/2024
Last Mod: 07/27/2024
Author: dj substance
Git Repo: https://github.com/djsubstance
Description: Simple and Effective Password Protected PHP File lister
Prereqs: PHP / Webserver (nothing special)

Setup Notes: Save the below PHP script into files.php
             chmod 644 files.php
             Verify all PHP/HTML/HTM scripts have the right permissions (files = 644 / dir's 750)
             Make sure that your browser will not block target=_blank (open tab in new window)
             Prior to hitting files.php - change the password (this is simply a $_GET value, it is not considered "secure" but it is a pw)


<?php
// Check if the password is correct
if (isset($_GET['pw']) && $_GET['pw'] === '337') {
    // Get all php, html, and htm files in the current directory
    $files = glob('*.{php,html,htm}', GLOB_BRACE);

    // Display the files as links
    echo "<h2>Files in current directory:</h2>";
    echo "<ul>";
    foreach ($files as $file) {
        echo "<li><a href=\"$file\" target=\"_blank\">$file</a></li>";
    }
    echo "</ul>";
} else {
    // Display error message if password is incorrect
    echo "<h2>Access Denied</h2>";
}
?>
