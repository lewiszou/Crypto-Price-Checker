document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    var e = document.getElementById("country");
    let comment = e.options[e.selectedIndex].value;
    let li = '<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; box-sizing:content-box; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px;"><div style="height:540px;padding:0px;margin:0px;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=' + comment + '&pref_coin_id=1505" width="100%" height="536" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;box-sizing:content-box;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing:content-box; margin: 3px 6px 10px 0px; font-family: Verdana, Tahoma, Arial, sans-serif;"></div></div>';
    document.write(li);
};
