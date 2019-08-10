/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/categories.js":
/*!******************************!*\
  !*** ./src/js/categories.js ***!
  \******************************/
/*! exports provided: CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORIES\", function() { return CATEGORIES; });\nconst CATEGORIES = [\n  \"Baby foods\",\n  \"Famous duos and trios\",\n  \"Things found in a desk\",\n  \"Vacation spots\",\n  \"Swear words\",\n  \"10+ Letter words\",\n  \"Diseases\",\n  \"Words associated with money\",\n  \"Movies\",\n  \"Books\",\n  \"Beers\",\n  \"Candy\",\n  \"Items in a vending machine\",\n  \"Games\",\n  \"Things you wear\",\n  \"Things at a circus\",\n  \"Things at a pharmacy\",\n  \"Capitals\",\n  \"Fictional characters\",\n  \"Historical figures\",\n  \"Athletes\",\n  \"Magazines\",\n  \"Menu items\",\n  \"Fast food\",\n  \"Footwear\",\n  \"Things you put on your face\",\n  \"Something you keep hidden\",\n  \"Things with tails\",\n  \"Sports equipment\",\n  \"Crimes\",\n  \"Punishments\",\n  \"Car parts\",\n  \"Parts of speech\",\n  \"Weapons\",\n  \"Things at the beach\",\n  \"Things at the club\",\n  \"Things you see in New York\",\n  \"Things you see in Europe\",\n  \"European countries\",\n  \"Items in a fridge\",\n  \"Colours\",\n  \"Tools\",\n  \"Gadgets\",\n  \"Kitchen equipment\",\n  \"Furniture\",\n  \"Websites\",\n  \"Injuries\",\n  \"Things that are loud\",\n  \"Video game lingo\",\n  \"Magical beings\",\n  \"Acronyms\",\n  \"Things that have stripes\",\n  \"Seafood\",\n  \"Words ending in N\",\n  \"Words with double letters\",\n  \"Words with 3 of the same letter\",\n  \"Names in movie titles\",\n  \"Olympic events\",\n  \"Things you get tickets for\",\n  \"Things you do at work\",\n  \"Things you should not touch\",\n  \"Things you make\",\n  \"Things that hurt\",\n  \"Animal noises\",\n  \"Things you save up for\",\n  \"Things you store items in\",\n  \"Things you sit on/in\",\n  \"Reasons to make a phone call\",\n  \"Thing that make you smile\",\n  \"Titles people can have\",\n  \"Things that have buttons\",\n  \"Things that have wheels\",\n  \"Drugs\",\n  \"Hobbies\",\n  \"Things that are difficult to accomplish\",\n  \"Things not to talk about on a date\",\n  \"Things that get you out of trouble\",\n  \"4-Letter words\",\n  \"Things in a sandwich\",\n  \"Things in a bathroom\",\n  \"Action hero characters\",\n  \"Things that get you high\",\n  \"Things that are also good stripper names\",\n  \"Exercise equipment\",\n  \"Things that are sharp\",\n  \"Electronics brands\",\n  \"Things that protect you from the sun\",\n  \"Things that are gooey\",\n  \"Colours\",\n  \"Soft drinks\",\n  \"Cartoon character\",\n  \"Paint colours\",\n  \"Teacher names\",\n  \"University courses\",\n  \"Things you’re afraid of\",\n  \"Occupations\",\n  \"Chores\",\n  \"Things parents say\",\n  \"TV shows\",\n  \"Places you hide\",\n  \"Cars\",\n  \"Things you wouldn’t want for Christmas\",\n  \"Things Amish people have\",\n  \"Things that should come by the bucket\",\n  \"Things that should never ever fly\",\n  \"Things you do when you are wasted\",\n  \"Countries\",\n  \"Nicolas Cage movies\",\n  \"Reasons to stay home\",\n  \"Sidekicks\",\n  \"Things white people like\",\n  \"Super powers\",\n  \"Things to give up for lent\",\n  \"Things that are cold\",\n  \"A boy’s name\",\n  \"School supplies\",\n  \"Insects\",\n  \"Breakfast foods\",\n  \"Things found in the ocean\",\n  \"Things in the desert\",\n  \"Underground things\",\n  \"Famous females\",\n  \"Things in fairy tales\",\n  \"People in uniform\",\n  \"Things you plug in\",\n  \"Things that grow\",\n  \"Ways to say hi and bye\",\n  \"Heroes\",\n  \"Things in a sci-fi movie\",\n  \"College majors\",\n  \"Things in a souvenir shop\",\n  \"Things that kids play with\",\n  \"Excuses for being late\",\n  \"Things that jump/bounce\",\n  \"Pizza toppings\",\n  \"Things in the sky\",\n  \"Occupations\",\n  \"Fish\",\n  \"Personality traits\",\n  \"Something you’re afraid of\",\n  \"Kinds of candy\",\n  \"Things you buy when you’re sad\",\n  \"Diseases\",\n  \"Things that are sticky\",\n  \"Medical terms\",\n  \"Ways to get from here to there\",\n  \"Things in the wild west\",\n  \"Things you replace\",\n  \"Things with motors\",\n  \"Words ending in “ly”\",\n  \"Halloween Costumes\",\n  \"Things that are bright\",\n  \"Things that are soft\",\n  \"A boy’s name\",\n  \"U.S. cities\",\n  \"Things that are cold\",\n  \"School supplies\",\n  \"Pro sports teams\",\n  \"Insects\",\n  \"Breakfast foods\",\n  \"Furniture\",\n  \"Tv shows\",\n  \"Things found in the ocean\",\n  \"Presidents\",\n  \"Product names\",\n  \"Vegetables\",\n  \"States\",\n  \"Things you throw away\",\n  \"Occupations\",\n  \"Appliances\",\n  \"Cartoon characters\",\n  \"Types of drink\",\n  \"Bands\",\n  \"Store names\",\n  \"Things at a football game\",\n  \"Trees\",\n  \"Personality traits\",\n  \"Articles of clothing\",\n  \"Desserts\",\n  \"Car parts\",\n  \"Things found on a map\",\n  \"Athletes\",\n  \"4-letter words\",\n  \"Items in a refrigerator\",\n  \"Farm animals\",\n  \"Street names\",\n  \"Things at the beach\",\n  \"Colours\",\n  \"Tools\",\n  \"Sports\",\n  \"Song titles\",\n  \"Parts of the body\",\n  \"Ethnic foods\",\n  \"Things you shout\",\n  \"Birds\",\n  \"A girl’s name\",\n  \"Ways to get from here to there\",\n  \"Items in a kitchen\",\n  \"Villains / monsters\",\n  \"Flowers\",\n  \"Things you replace\",\n  \"Sandwiches\",\n  \"Items in a catalog\",\n  \"World leaders / politicians\",\n  \"School subjects\",\n  \"Excuses for being late\",\n  \"Ice cream flavors\",\n  \"Things that jump / bounce\",\n  \"Television stars\",\n  \"Things in a park\",\n  \"Foreign cities\",\n  \"Stones / gems\",\n  \"Musical instruments\",\n  \"Things that are sticky\",\n  \"Awards / ceremonies\",\n  \"Cars\",\n  \"Spices / herbs\",\n  \"Bad habits\",\n  \"Cosmetics / toiletries\",\n  \"Celebrities\",\n  \"Cooking utensils\",\n  \"Reptiles / amphibians\",\n  \"Parks\",\n  \"Leisure activities\",\n  \"Things you’re allergic to\",\n  \"Fictional characters\",\n  \"Menu items\",\n  \"Magazines\",\n  \"Capitals\",\n  \"Kinds of candy\",\n  \"Items you save up to buy\",\n  \"Footwear\",\n  \"Something you keep hidden\",\n  \"Items in a suitcase\",\n  \"Things with tails\",\n  \"Sports equipment\",\n  \"Nicknames\",\n  \"Things in the sky\",\n  \"Pizza toppings\",\n  \"Colleges / universities\",\n  \"Fish\",\n  \"Countries\",\n  \"Things that have spots\",\n  \"Historical figures\",\n  \"Something you’re afraid of\",\n  \"Terms of measurement\",\n  \"Items in this room\",\n  \"Book titles\",\n  \"Restaurants\",\n  \"Notorious people\",\n  \"Fruits\",\n  \"Things in a medicine cabinet\",\n  \"Toys\",\n  \"Household chores\",\n  \"Bodies of water\",\n  \"Authors\",\n  \"Halloween costumes\",\n  \"Weapons\",\n  \"Things that are round\",\n  \"Words associated with exercise\",\n  \"Heroes\",\n  \"Gifts / presents\",\n  \"Terms of endearment\",\n  \"Kinds of dances\",\n  \"Vehicles\",\n  \"Tropical locations\",\n  \"College majors\",\n  \"Dairy products\",\n  \"Things in a souvenir shop\",\n  \"Items in your purse / wallet\",\n  \"Baby foods\",\n  \"Famous duos and trios\",\n  \"Things found in a desk\",\n  \"Vacation spots\",\n  \"Diseases\",\n  \"Words associated with money\",\n  \"Items in a vending machine\",\n  \"Movie titles\",\n  \"Games\",\n  \"Things that you wear\",\n  \"Beers\",\n  \"Things at a circus\",\n  \"Famous women\",\n  \"Medicine / drugs\",\n  \"Things made of metal\",\n  \"Hobbies\",\n  \"People in uniform\",\n  \"Things you plug in\",\n  \"Animals\",\n  \"Languages\",\n  \"Names used in the bible\",\n  \"Junk food\",\n  \"Things that grow\",\n  \"Companies\",\n  \"Booze\"\n];\n\n\n//# sourceURL=webpack:///./src/js/categories.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ \"./src/js/categories.js\");\n/* harmony import */ var _letters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letters */ \"./src/js/letters.js\");\n\n\n\nvar CARDS_PER_ROUND = 4,\n  PICKED = [];\n\nfunction encodeGameURL(cards) {\n  var rets = [],\n    enc = [];\n\n  var currentCard;\n  for (var y = 0; y < cards.length; y += 1) {\n    enc = [];\n    currentCard = cards[y];\n\n    for (var i = 0; i < currentCard[1].length; i += 1) {\n      enc.push(_categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"].indexOf(currentCard[1][i]).toString(16));\n    }\n\n    rets.push(currentCard[0] + enc.join(\"+\"));\n  }\n\n  return rets.join(\"|\");\n}\n\nfunction decodeGameURL(url) {\n  var cards = [],\n    letter = \"\";\n\n  if (url == \"#\" || url == \"\") {\n    return null;\n  }\n\n  var hashes = url.split(\"|\");\n\n  for (var y = 0; y < hashes.length; y += 1) {\n    var letter = hashes[y].slice(0, 1),\n      categoryNumbers = hashes[y].slice(1).split(\"+\"),\n      categories = [];\n\n    for (var i = 0; i < categoryNumbers.length; i += 1) {\n      var categoryIndex = parseInt(categoryNumbers[i], 16);\n      categories.push(_categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"][categoryIndex]);\n    }\n\n    var card = [letter, categories];\n    cards.push(card);\n  }\n\n  return cards;\n}\n\nfunction appendCard(cardIndex, card) {\n  var s = \"\";\n  s +=\n    '<div class=\"card\" data-card-id=\"' +\n    cardIndex +\n    '\" style=\"display: none;\">';\n  s += '<span class=\"letter\">' + card[0] + \"</span>\";\n  s += \"<ol>\";\n\n  for (var i = 0; i < card[1].length; i += 1) {\n    s += \"<li>\" + card[1][i] + \"</li>\";\n  }\n\n  s += \"</ol></div>\";\n  s +=\n    '<button data-card-id=\"' +\n    cardIndex +\n    '\" class=\"reveal-card\">Reveal Card</button><br>';\n\n  $(\"#game-container\").append(s);\n}\n\nfunction generateNewCard() {\n  var card = [],\n    r = Math.floor(Math.random() * _letters__WEBPACK_IMPORTED_MODULE_1__[\"LETTERS\"].length),\n    letter = _letters__WEBPACK_IMPORTED_MODULE_1__[\"LETTERS\"][r],\n    category = \"\";\n\n  card[0] = letter;\n  card[1] = [];\n\n  for (var i = 0; i < 12; i += 1) {\n    r = Math.floor(Math.random() * _categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"].length);\n    category = _categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"][r];\n    while (PICKED.indexOf(category) != -1) {\n      r = Math.floor(Math.random() * _categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"].length);\n      category = _categories__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"][r];\n    }\n    card[1].push(category);\n    PICKED.push(category);\n  }\n\n  return card;\n}\n\nfunction generateNewGame() {\n  $(\"#game-container\").html(\"\");\n  window.location.hash = \"\";\n\n  var cards = [];\n\n  for (var i = 0; i < CARDS_PER_ROUND; i += 1) {\n    card = generateNewCard();\n    cards.push(card);\n    appendCard(i, card);\n  }\n\n  var gameURL = window.location.origin + \"/#\" + encodeGameURL(cards);\n  $(\"#game-url\").val(gameURL);\n}\n\n$(function() {\n  // Is this already a game? Read hash and check!\n  var cards = decodeGameURL(window.location.hash.slice(1));\n  if (!cards) {\n    generateNewGame();\n  } else {\n    for (var i = 0; i < cards.length; i += 1) {\n      appendCard(i, cards[i]);\n    }\n  }\n\n  // Event Listeners\n  $(\"body\").on(\"click\", \".reveal-card\", function(event) {\n    var cardID = $(this).data(\"card-id\");\n    $(\".card[data-card-id=\" + cardID + \"]\").show();\n    $(this).hide();\n  });\n\n  $(\"body\").on(\"click\", \".new-game\", function() {\n    generateNewGame();\n  });\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/letters.js":
/*!***************************!*\
  !*** ./src/js/letters.js ***!
  \***************************/
/*! exports provided: LETTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTERS\", function() { return LETTERS; });\nconst LETTERS = [\n  \"A\",\n  \"B\",\n  \"C\",\n  \"D\",\n  \"E\",\n  \"F\",\n  \"G\",\n  \"H\",\n  \"I\",\n  \"J\",\n  \"K\",\n  \"L\",\n  \"M\",\n  \"N\",\n  \"O\",\n  \"P\",\n  \"R\",\n  \"S\",\n  \"T\"\n];\n\n\n//# sourceURL=webpack:///./src/js/letters.js?");

/***/ })

/******/ });