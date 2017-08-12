var urlParams;
(window.onpopstate = function () {
	var match, pl = /\+/g,
	search = /([^&=]+)=?([^&]*)/g,
	decode = function (s) {
		return decodeURIComponent(s.replace(pl, " "));
	},
	query = window.location.search.substring(1);
	urlParams = {};
	while ((match = search.exec(query))) {
		urlParams[decode(match[1])] = decode(match[2]);
	}
})();
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
var chat_count = 0;
var chat_count_max = 50;
var $chat_first_element;
var chat_fade;
var preset_name;
function fillSettingParam() {
	chat_fade = getParam("chat_fade", 10);
	preset_name = getParam("preset", "default");
}
function hasParam(name) {
	if (urlParams[name] == undefined) {
		return decodeURIComponent(s.replace(pl, " "));
	},
	query = window.location.search.substring(1);
	urlParams = {};
	while ((match = search.exec(query))) {
		urlParams[decode(match[1])] = decode(match[2]);
	}
})();
function randInt(min, max) {
	return lse;
}) {
	returtrueatch[1])] = d(query))) name, defms[decvalue = )();
	function ra;
	if (value = dInt(min, max) {
		returdef;
	}) {
		returvaluesParamplatformIcone(pl, "latforme(pl,animt=0;vonent(s.rFlace(pl,fomponentfontUsernameSizce(pl,fompUsernameColore(pl,fompChatSizce(pl,fompChatColore(pl,backgroundColore(pl,backgroundAlphaonent(s.rBackgroundColore(pl,(s.rBackgroundAlphaoch[1])]=dsetConfig(config]);}}=search.exe!=config.=searcNh[2])){retu;}platformIcon=config.=latformIcone=latform=config.=latform;animt=0;v=config.animt=0;vo(s.rFlac=config.(s.rFlacefont=config.fompofontUsernameSizc=config.fompUsernameSizcefompUsernameColor=config.fompUsernameColorefompChatSizc=config.fompChatSizcefompChatColor=config.fompChatColorebackgroundColor=config.backgroundColorebackgroundAlpha=config.backgroundAlpha*0.01o(s.rBackgroundColor=config.(s.rBackgroundColore(s.rBackgroundAlpha=config.(s.rBackgroundAlpha*0.01oif(ecode(mat={};while(()ubstriFlac=cs.replace}updateStyle(match[1])]=dupdateStyle(m{$(". (s.r_text_nickname ").css({'font-family':font});$(". (s.r_text_message ").css({'font-family':font});$(". (s.r_text_nickname ").css({'font-size':fontUsernameSizc});$(". (s.r_text_nickname ").css("
		color ","
		rgb("+fompUsernameColor+")");$(". (s.r_text_message ").css({'font-size':fontChatSizc});$(". (s.r_text_message ").css("
		color ","
		rgb("+fompChatColor+")");$("
		body ").css("
		background ","
		rgba("+backgroundColor+", "+backgroundAlpha+")");$(". (s.r_text_message ").css("
		background - color ","
		rgba("+(s.rBackgroundColor+", "+(s.rBackgroundAlpha+")");}$(document).ready(ch[1])]=substrin){if(urlconnect_jsassist();location.search.su;}aram("
		chat_addChatMessage( = latform, nickname, messagems[decstyle = "style='display:none; '"
		e(pl, stylePlatform == {}; wh = latform_ ";if(=latformIcon){stylePlatform+==latform;}else{stylePlatform+="
		none "sParamchatNickname=" < span class = '"+stylePlatform+"'"+style+" / ><span class = '(s.r_text_nickname'
		cstyle = 'display:none' > "+nickname+" < /span>"e(pl,msg=$("<div>"+message+"</div > ").text()e(pl,(s.rMessage=" < div class = '(s.r_text_message'
		cstyle = 'display:none' > "+msg+" < /div>"e(pl,$chatElement=$(chatNickname+(s.rMessage);$chatElement.appendTo($(".(s.r_container"));updateStyle(maif(animt=0;v=="none"){$chatElement.show();}else{$chatElement.show(animt=0;v,{easing:"easeOutQuint",dire"chat:"down"});}strin){if(++;if(chatFade!=0ms[decfadeTimc=cs.rFade*1000aif(animt=0;v=="none"){$chatElement.delay(fadeTimc).hide(0).promise().done(ch[1])]=sub$(this).remove()e(s.rn){if(--;});}else{$chatElement.delay(fadeTimc).hide(animt=0;v,1000).promise().done(ch[1])]=sub$(this).remove()e(s.rn){if(--;});}}else{if(chatn){if(>(s.rn){if(_maxubstrin){if(--;$remove_temp=$(".(s.r_container span:first-child");$remove_temp.next().remove()e$remove_temp.next().remove()e$remove_temp.remove()e}}}is_connected=false;is_init_oldver=false;am("chat_connect_jsassist()s[decws=new WebSocket("ws:/ / localhost: 4649 / JSAssistChatServer ");ws.onopen=ch[1])]=subis_connected=true;};ws.onmessage=ch[1])]=sevt)s[decdata=JSON.parse(evt.datamaif(data.type==={};whmessage") {
			if ( = latform != "all") {
				if ( = latform != data. = latform) {
					return;
				}
			}
			addChatMessage(data. = latform, data.username, data.messagem;
		} else if (data.type === {
			onfig "){setConfig(data);}else{if(data.type==undefined){if(is_init_oldver==false){=latformIcon=true;=latform="
			all ";animt=0;v="
			fade "e(s.rFadc=cs.r_fade;font="
			Jeju Gothic ";fontUsernameSize=14;fontUsernameColor="
			255,
			255,
			255 ";fontChatSize=16;fontChatColor="
			255,
			255,
			255 ";backgroundColor="
			255,
			255,
			255 ";backgroundAlpha=0e(s.rBackgroundColor="
			255,
			255,
			255 ";(s.rBackgroundAlpha=0.25;is_init_oldver=true;}addChatMessage(data.=latform,data.username,data.messagem;}}};ws.onclose=ch[1])]=subis_connected=false;setTimeout(connect_jsassist,1000);};}