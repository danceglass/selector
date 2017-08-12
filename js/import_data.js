function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(
		window.location.search.substring(1));
	var sURLVariables = sPageURL.split('&');
	var sParameterName, i;
	
	for (i=0; i<sURLVariables.length; ++i) {
		sParameterName = sURLVariables[i].split('=');
		
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined? true : sParameterName[1];
		}
	}
};
var preloadImage = function(url) {
	var img;
	try {
		img = new Image();
		img.src = url;
	} catch(e) {}
	return img;
}

function init(dcconList) {
/* url에서 리스트를 받고 각 함수 선언 */

	var dcconSearchMap = {};		// keyword로 dccon을 검색하기 위한 맵
	var dcconKeywordList = [];	// 전체 keyword 리스트
	var twitchEmotesUrlTemplate = "";
	var twitchEmotesMap = {};
	
	/* url에서 받아온 각 디씨콘을 맵과 리스트에 등록 */
	for (var i=0; i<dcconList.length; ++i) {
		var dccon = dcconList[i];
		preloadImage(dccon.path);
		
		for (var j=0; j<dccon.keywords.length; ++j) {
			var keyword = '~' + dccon.keywords[j];
			dcconSearchMap[keyword] = dccon;
			dcconKeywordList.push(keyword);
		}
	}
	
	/* 트위치 이모티콘을 맵과 템플릿에 등록 */
	$.getJSON('https://twitchemotes.com/api_cache/v2/global.json',
		function(data1) {
			twitchEmotesUrlTemplate = data1.template.medium;
			for (var emote_keyword in data1.emotes) {
				if(data1.emotes.hasOwnProperty(emote_keyword)) {
					twitchEmotesMap[emote_keyword] =
						data1.emotes[emote_keyword].image_id;
				}
			}
			
			/* 구독콘을 등록 */
			$.getJSON(
				'https://twitchemotes.com/api_cache/v2/subscriber.json',
				function(data2) {
					for (var channel_name in data2.channels) {
						if (data2.channels.hasOwnProperty(channel_name)) {
							var channel = data2.channels[channel_name];
							for (var emote_index in channel.emotes) {
								var emote = channel.emotes[emote_index];
								twitchEmotesMap[emote.code] = emote.image_id;
							}
						}
					}
				});
		});
		
	
	/* 긴 키워드부터 탐색해야 정확하므로 디씨콘 키워드 리스트를 키워드 길이기준 정렬 */
	dcconKeywordList.sort(function(a,b) {
		return a.length < b.length;
	});


	/* 메세지의 디씨콘을 이미지로 치환 */
	function replaceDccon(message) {
		for (var i=0; i<dcconKeywordList.length; ++i) {
			var keyword = dcconKeywordList[i];
			if (message.indexOf(keyword) != -1) {
				var dccon = dcconSearchMap[keyword];
				message = message.split(keyword).join(
					'<img class="dccon" src="' + dccon.path + '" />');
			}
		}
		
		
		if (message.replace(/\s*<[^<>]*>\s*/g, "").length == 0) {
			message = '<center>' + message + '</center>'; }
		return message;
	}
	
	/* 이모티콘과 구독콘을 이미지로 치환 */
	function replaceTwitchEmotes(message) {
		if (message.match(/\n\S*?\n/g)) {
			for (var emote_keyword in twitchEmotesMap) {
				if (twitchEmotesMap.hasOwnProperty(emote_keyword)) {
					var search_keyword = '\n' + emote_keyword + '\n';
					if (message.indexOf(search_keyword) != -1) {
						var emote_id = twitchEmotesMap[emote_keyword];
						var emote_url = twitchEmotesUrlTemplate.split(
							'{image_id}').join(emote_id);
						message = message.split(search_keyword).join(
							'<img class="twitch_emote" src="' +
							emote_url + '" />');
					}
				}
			}
		}
		return message;
	}
	
	originalJqueryText = jQuery.fn.text;
	function hackedJqueryText() {
		var msg = originalJqueryText.apply(this, arguments);
		msg = replaceDccon(msg);
		msg = replaceTwitchEmotes(msg);
		
		/* image_border를 상쇄시키기 위해 chat_text_message 안에 div를 하나 더 추가 */
		msg = '<div class="chat_text_message_inner">' + msg + '</div>';
		return msg;
	};
	
	originalAddChatMessage = addChatMessage;
	addChatMessage = function(platform, username, message) {
		jQuery.fn.text = hackedJqueryText;
		var result = originalAddChatMessage(
			platform, username, message);
		jQuery.fn.text = originalJqueryText;
		return result;
	};
}
		
$(document).ready(function() {
	/* 디씨콘 json 경로 받아오기 */
	var dcconListUrl = getUrlParameter('dccon_list');
	if (dcconListUrl == undefined) {
		dcconListUrl = 'https://krynen.github.io/jsassist-custom-css/js/dccon_list.json';
	}
	$.getJSON(dcconListUrl).done(function(data2) {
		/* 경로의 json파일을 읽고 init(); */
		var dcconList = data2.dccons;
		init(dcconList);
	}).fail(
		function(jqxhr, textStatus, error) {
			var err = textStatus + ", " + error;
			console.log("Request Failed: " + err);
			init(dcconList);
		});	
	
	/* css 경로 받아오기 */
	var customCssUrl = getUrlParameter('custom_css');
	if (customCssUrl == undefined) {
		customCssUrl = 'https://krynen.github.io/jsassist-custom-css/css/default_styles.css';
	}
	$('head').append(
		'<link rel="stylesheet" href="' + customCssUrl + '" />');
		
	preloadImage("https://static-cdn.jtvnw.net/jtv_user_pictures/yeokka-profile_image-9c2f528d03e22a7f-70x70.jpeg").
		onload = function() {
			addChatMessage("twitch", "맛물", "디씨콘과 CSS 로딩이 완료되었습니다.");
		};
});

/* JSAssist의 connect_jsassist를 재구현 */
/* json의 message에서 개행을 줄바꿈문자로 치환 */
connect_jsassist_str = connect_jsassist.toString();
connect_jsassist_str = connect_jsassist_str.replace(
	/JSON\.parse\((.*?)\);/g,
	'JSON.parse($1.replace(/(?:\\r\\n|\\r|\\n)/g, "\\\\n"));');
connect_jsassist_str = connect_jsassist_str.substring(
	connect_jsassist_str.indexOf('{')+1,
	connect_jsassist_str.lastIndexOf('}'));
connect_jsassist = new Function(connect_jsassist_str);