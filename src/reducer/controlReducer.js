const initialState = {
	data: [
		{
			id: 1584,
			name: "碧砂漁港",
			images: [
				{ src: "https://www.travel.taipei/image/89134", subject: "", ext: ".jpg" },
				{ src: "https://www.travel.taipei/image/89135", subject: "", ext: ".jpg" },
				{ src: "https://www.travel.taipei/image/89131", subject: "", ext: ".jpg" },
				{ src: "https://www.travel.taipei/image/89132", subject: "", ext: ".jpg" },
				{ src: "https://www.travel.taipei/image/89133", subject: "", ext: ".jpg" }
			],
			address: "108 臺北市萬華區位於萬華區大理街、西園路、和平西路、康定路附近",
			tel: "0900000000",
			email: "test@test.com",
			url: "https://www.google.com/",
			facebook: "https://www.facebook.com/",
			introduction: "他無說獨益不果致這接間好？以臺二車提的你白。路常成，一下一方？站望超血、對城發，動越是員，人越流以愛實平水四科！面你日下？然了企，題容己？加學家。行已兒布化再色顯國層意多少一素社裝經著愛態壓的平用歌全有小國天念、大光於到落未想小近親不且林表小名們大果面媽性業化！我集完地說口學查則天的快過們力生中業們了野，劇區兒！進式我應是，我股經們你在萬？三有內富臉時那教富？了二放格交，的灣商聽及靜一的定為職是做腦？個我學的斯是，一色底公早！以長銷當醫聲，能操金金之話景名就們別星活計英正格……高龍很力解德言光毒的關，眾班天絕？布式毛後輕存知何加個，突突出前體性以。須她在人表後而童味響香和黑動重，禮數問今病們研細後車生省業頭才果養照簡下舞過，苦高化。為與試界雲可，是運拿積美的大樹靈城物平，生子有麼一想北回裡學分資種人別來設出，部高我學。無他先起參作停食，些認當都整切特，位心夫。下二裝建傳給們愛國，如屋而期人……洲高但此靈。水朋果非是生同入北一維物很自他之課源有解玩家等東題好臺持時點天全國西候！",
			open_status: 0,
			ticket: true,
			service: [],
			elong: 121.49922,
			nlat: 25.14786,
			remind: "備註事項:遊客如欲搭船出海，應備妥身分證明文件以供查驗（幼童須健保卡）。"
		}
	],
	page: 1,
	loading: true,
	content: {
		id: 1584,
		name: "test123",
		images: [
			{ src: "https://www.travel.taipei/image/89134", subject: "", ext: ".jpg" },
			{ src: "https://www.travel.taipei/image/89135", subject: "", ext: ".jpg" },
			{ src: "https://www.travel.taipei/image/89131", subject: "", ext: ".jpg" },
			{ src: "https://www.travel.taipei/image/89132", subject: "", ext: ".jpg" },
			{ src: "https://www.travel.taipei/image/89133", subject: "", ext: ".jpg" }
		],
		address: "address",
		tel: "0900000000",
		email: "test@test.com",
		url: "https://www.google.com/",
		facebook: "https://www.facebook.com/",
		introduction: "他無說獨益不果致這接間好？以臺二車提的你白。路常成，一下一方？站望超血、對城發，動越是員，人越流以愛實平水四科！面你日下？然了企，題容己？加學家。行已兒布化再色顯國層意多少一素社裝經著愛態壓的平用歌全有小國天念、大光於到落未想小近親不且林表小名們大果面媽性業化！我集完地說口學查則天的快過們力生中業們了野，劇區兒！進式我應是，我股經們你在萬？三有內富臉時那教富？了二放格交，的灣商聽及靜一的定為職是做腦？個我學的斯是，一色底公早！以長銷當醫聲，能操金金之話景名就們別星活計英正格……高龍很力解德言光毒的關，眾班天絕？布式毛後輕存知何加個，突突出前體性以。須她在人表後而童味響香和黑動重，禮數問今病們研細後車生省業頭才果養照簡下舞過，苦高化。為與試界雲可，是運拿積美的大樹靈城物平，生子有麼一想北回裡學分資種人別來設出，部高我學。無他先起參作停食，些認當都整切特，位心夫。下二裝建傳給們愛國，如屋而期人……洲高但此靈。水朋果非是生同入北一維物很自他之課源有解玩家等東題好臺持時點天全國西候！",
		open_status: 0,
		ticket: true,
		service: [],
		elong: 121.49922,
		nlat: 25.14786,
		remind: "備註事項:遊客如欲搭船出海，應備妥身分證明文件以供查驗（幼童須健保卡）。"
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_DONE':
			return {
				...state,
				loading: false
			}
		case 'SET_CONTENT':
			return {
				...state,
				content: action.data
			}
		case 'SET_LIST':
			return {
				...state,
				data: action.data,
				loading: false
			}
		default:
			return state
	}
}

export default reducer;