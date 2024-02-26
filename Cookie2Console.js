JS one liner - paste into console:
let mahCookie = JSON.stringify(document.cookie.split(';').map(cookie => {let [name, value] = cookie.trim().split('=');  return {name, value};}));console.log(mahCookie);

example output:
[{"name":"_octo","value":"GH1.1.1706<snip>4473"},
 {"name":"color_mode","value":"%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22dark_colorblind%22%2C%22 \
   color_mode%22%3A%22dark%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark_dimmed%22%2C%22color_mode%22%3A%22dark%22%7D%7D"},
 {"name":"preferred_color_mode","value":"dark"},{"name":"tz","value":"America%2FIowa"}]
