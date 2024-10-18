// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Helix',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', //  'lists',

	// Weather
	weatherKey: '07d14d0787675dd5e6367b85ca953977', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '49.727470',
	defaultLongitude: '-112.630791',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'play',
			id: '1',
			links: [
				{
					name: 'Braflix',
					link: 'https://www.braflix.app',
				},
				{
					name: 'himovies',
					link: 'https://www5.himovies.to/home',
				},
				{
					name: 'HiAnime',
					link: 'https://hianime.to/',
				},
				{
					name: 'dramas',
					link: 'https://goplay.su/',
				},
			],
		},
		{
			icon: 'arrow-down-to-line',
			id: '2',
			links: [
				{
					name: 'PSA',
					link: 'https://psa.wf',
				},
				{
					name: 'Lucida Music',
					link: 'https://lucida.to/',
				},
				{
					name: 'Avistaz',
					link: 'https://avistaz.to/torrents',
				},
				{
					name: '1337',
					link: 'https://1337x.to',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'mouse-pointer-2',
			id: '1',
			links: [
				{
					name: 'IMDB',
					link: 'https://www.imdb.com',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.ca',
				},
				{
					name: 'Jackett',
					link: 'http://127.0.0.1:9117/UI/Dashboard#search',
				},
				{
					name: 'Songsterr',
					link: 'https://www.songsterr.com',
				},
			],
		},
		{
			icon: 'gamepad-2',
			id: '2',
			links: [
				{
					name: 'Crackwatch',
					link: 'https://www.reddit.com/r/CrackWatch',
				},
				{
					name: 'gog-games',
					link: 'https://gog-games.to',
				},
				{
					name: 'OVA',
					link: 'https://www.ovagames.com',
				},
				{
					name: 'Piracy',
					link: 'https://www.reddit.com/r/Piracy/wiki/megathread/',
				},
			],
		},
	],
};

