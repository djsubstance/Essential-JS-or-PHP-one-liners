Filename: OneLinerDump_SERVER_Values.php
created: 04/21/24
last mod: 04/21/24
by: substance

      _                          _      ____  _____ ______     _______ ____  
   __| |_   _ _ __ ___  _ __    | |    / ___|| ____|  _ \ \   / / ____|  _ \ 
  / _` | | | | '_ ` _ \| '_ \  / __)   \___ \|  _| | |_) \ \ / /|  _| | |_) |
 | (_| | |_| | | | | | | |_) | \__ \    ___) | |___|  _ < \ V / | |___|  _ < 
  \__,_|\__,_|_| |_| |_| .__/  (   /___|____/|_____|_| \_\ \_/  |_____|_| \_\
                       |_|      |_|_____|                                    
         [ D U M P   $_S E R V E R [] VALUES - BY PUTTING THEM IN AN ARRAY ]
   
   
Two methods to get the same info with different reasons for both:

  Method #1: Running this in a php script:
   Note: Save the following in dumparray.php
   type: bash$    php ./dumparray.php
   
<?php $serverVariables = []; foreach ($_SERVER as $key => $value) {    $serverVariables[$key] = $value;}
echo '<pre>'; print_r($serverVariables); echo '</pre>';?>


----------
The second method will run on the CLI: (paste it in to bash)
   php -r "\$serverVariables = []; foreach (\$_SERVER as \$key => \$value) { \$serverVariables[\$key] = \$value; } echo '<pre>'; print_r(\$serverVariables); echo '</pre>';"



   These both print out the same thing:
<pre>Array
(
    [MANPATH] => /usr/local/share/man:
    [TERM_PROGRAM] => iTerm.app
    [SHELL] => /bin/bash
    [TERM] => vt100
    [TMPDIR] => /var/folders/4z/vrdm2tbj3f14pfw8j7p3sj340000gn/T/
    [HOMEBREW_REPOSITORY] => /usr/local/Homebrew
    [PERL5LIB] => /home/user/perl5/lib/perl5
    [TERM_PROGRAM_VERSION] => 3.5.0beta22
    [PERL_MB_OPT] => --install_base "/home/user/perl5"
    [TERM_SESSION_ID] => w0t0p0:D2473098-F131-4239-BB15-544BF7BE239
    [USER] => user
    [COMMAND_MODE] => unix2003
    [SSH_AUTH_SOCK] => /private/tmp/com.apple.launchd.JPylZlanlO/Listeners
    [__CF_USER_TEXT_ENCODING] => 0x1F5:0:0
    [TERM_FEATURES] => T3CwLrMSc7UUw9Ts3BFGsSyHNoSxF
    [PATH] => /bin:/sbin:/home/user/perl5/bin:/usr/local/bin:/usr/local/sbin:/Users/user/.cargo/bin:/opt/local/bin:/opt
    [TERMINFO_DIRS] => /Applications/iTerm.app/Contents/Resources/terminfo:/usr/share/terminfo
    [LaunchInstanceID] => 8BAC57BD-AB7D-4824-BF1D-F3E15E6167AF
    [__CFBundleIdentifier] => com.googlecode.iterm2
    [PWD] => /Users/user/ng
    [LANG] => en_US.UTF-8
    [ITERM_PROFILE] => 9x
    [XPC_FLAGS] => 0x0
    [PS1] => \e[1;30m[\e[1;37m9x\e[1;30m]\e[1;37m::\e[0;37m\][\[\e[1;30m\]\@\[\e[0;37m\]]\e[0;35m:\e[0;37m[\[\e[0;37m\]\e[1;37m\w\[\e[0;37;40m\]]\n\[\e[0;37m\][\[\e[1;36m\]\u\[\e[1;30m\]@\[\e[1;36m\]\h\[\e[0;37m\]]\[\e[0m\]\$
    [XPC_SERVICE_NAME] => 0
    [COLORFGBG] => 7;0
    [HOME] => /Users/user
    [SHLVL] => 2
    [LC_TERMINAL_VERSION] => 3.5.0beta22
    [HOMEBREW_PREFIX] => /usr/local
    [PERL_LOCAL_LIB_ROOT] => /home/user/perl5
    [ITERM_SESSION_ID] => w0t0p0:D2473098-F131-4239-BB15-544BF7BE239A
    [LOGNAME] => user
    [HOMEBREW_CELLAR] => /usr/local/Cellar
    [INFOPATH] => /usr/local/share/info:
    [LC_TERMINAL] => iTerm2
    [SECURITYSESSIONID] => 1876f
    [PERL_MM_OPT] => INSTALL_BASE=/home/user/perl5
    [COLORTERM] => truecolor
    [_] => /usr/local/bin/php
    [PHP_SELF] => Standard input code
    [SCRIPT_NAME] => Standard input code
    [SCRIPT_FILENAME] =>
    [PATH_TRANSLATED] =>
    [DOCUMENT_ROOT] =>
    [REQUEST_TIME_FLOAT] => 1713728972.3148
    [REQUEST_TIME] => 1713728972
    [argv] => Array
        (
            [0] => Standard input code
        )

    [argc] => 1





  --- The main difference is argc (the cmd line args) would be alot easier to pass args to the script:
   php ./dumparray.php 1 2 3 4 5 test  14 53
THIS WILL display: [argc] => 8 (since we sent in 8 vals in the cli)

