var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = '64E74831BEA9C30431AFAEA453A7864C';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = 'https://files.facepunch.com/s/f3f82956055e.jpg';

/**
 * If you want music played in background add your music files here.
 * The music files must be in OGG format to be played correctly.
 * @type {Array}
 */
gmodLS.musicFiles = [
    'music/HTS.ogg',
];

/**
 * Music volume (Float value, max=1)
 * 0   = off/no music
 * 0.5 = 50% volume
 * 1   = full volume
 * @type {Number}
 */
gmodLS.musicVolume = 0.5;

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
 
 // Also known as the Staff Team Section
gmodLS.rules = [
    "TheBeefSteak - Owner",
	"NoobSight - Admin/Staff Manager",
	"kittenstan - Admin",
];