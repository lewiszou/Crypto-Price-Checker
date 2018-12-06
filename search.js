/*  Authors: Lewis Zou and Junu Lee
*   Project: Crypto Price Checker
*
*   search.js
*   This script, given an integer input that maps to a coin ID (on Coinlib), displays currency data
*   by calling the Coinlib widget specific to that ID.
*/

/*  Preconditions: ID must be a valid coin ID.
*   Note that ID inputs, i.e. the comment variable, is guaranteed to be valid since it is chosen from
*   a dropdown list constructed by the creators.
*/

document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    // Selection menu
    var e = document.getElementById("country");
    // Extract coin ID (value) from the selected option
    let comment = e.options[e.selectedIndex].value;
    let li = '<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing:' 
    + 'border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px;'
    + 'font-size: 12px; box-sizing:content-box; font-feature-settings: normal; text-size-adjust: 100%;' 
    + 'box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px;"><div style="height:540px;padding:'
    + '0px;margin:0px;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=' + comment 
    + '&pref_coin_id=1505" width="100%" height="536" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" '
    + 'border="0" style="border:0;margin:0;padding:0;line-height:14px;box-sizing:content-box;"></iframe></div><div '
    + 'style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing:content-box; margin: ' 
    + '3px 6px 10px 0px; font-family: Verdana, Tahoma, Arial, sans-serif;">powered by&nbsp;<a href="https://coinlib.io" '
    + 'target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size: 11px;">'
    + 'Coinlib</a></div></div>';
    // This is the paragraph element in search.html; we are injecting a script
    document.getElementById("display").innerHTML = li;
};
