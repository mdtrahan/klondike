var CANVAS_WIDTH = 1600;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 260;
var EDGEBOARD_Y = 0;

var FPS = 60;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "Arial";

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;

var STATE_GAME_WAITING_FOR_BET  = 0;
var STATE_GAME_DEAL             = 1;
var STATE_GAME_CHOOSE_HOLD      = 2;
var STATE_GAME_DRAW             = 3;
var STATE_GAME_EVALUATE         = 4;

var ON_CARD_SHOWN = "ON_CARD_SHOWN";
var ON_CARD_HIDE = "ON_CARD_HIDE";

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;
var ON_BUT_YES_DOWN = 6;

var SUIT_HEARTS = 0;
var SUIT_SPADES = 1;
var SUIT_DIAMONDS = 2;
var SUIT_CLUBS = 3;

var LABEL_EMPTY = 0;
var LABEL_HIDDEN = 1;
var LABEL_SHOWN = 2;

var DECK_CARD_OFFSET = 8;

var CARD_WIDTH = 150;
var CARD_HEIGHT = 234;

var LOSEPOINTS_TIMER;
var POINTS_TO_LOSE;

var POINTS_TO_SUIT;
var POINTS_TO_BOARD;

var SOUNDTRACK_VOLUME_IN_GAME = 1;
var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;