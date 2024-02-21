

░▒▓█▓▒░░▒▓█▓▒ ░▒▓███████▓▒░ ░▒▓██████████████▓▒░  ░▒▓██████▓▒░  ░▒▓███████▓▒ ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓████████▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░ ░▒▓█▓▒░░▒▓█▓▒ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ▒▓█▓▒░░▒▓█▓▒░ ▒▓███████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ 
                                                                                        
 - unMask.js -- Display All elements / objects with flag invisible or hidden will be shown

Paste into console (on a page with a decent amount happening - you will be suprised): (just this one line)
  
document.querySelectorAll('*').forEach(el => { if (getComputedStyle(el).display === 'none') el.style.display = 'block'; });

Pro tip - set break points with XHR Watch/Breakpoint - at various points in the execution/runtime and try this . you may be suprised

