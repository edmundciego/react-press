/**
 * ./src/js/redux/constants
 */

/*
 * Request constants
 */
export const SEND_REQUEST = 'SEND_REQUEST';
export const SEND_LOGIN_REQUEST = 'SEND_LOGIN_REQUEST';
export const SEND_COMMENT = 'SEND_COMMENT';
export const SEND_CLAP = 'SEND_CLAP';

/*
 * After requests
 */
// Admin interaction
export const REQUEST_TAG_FINISHED = 'REQUEST_TAG_FINISHED';
export const REQUEST_POST_FINISHED = 'REQUEST_POST_FINISHED';
export const REQUEST_EDIT_POST_FINISHED = 'REQUEST_EDIT_POST_FINISHED';
export const REQUEST_DELETE_POST_FINISHED = 'REQUEST_DELETE_POST_FINISHED';
export const REQUEST_USER_EDIT_FINISHED = 'REQUEST_USER_EDIT_FINISHED';

// Post interaction
export const REQUEST_COMMENT_FINISHED = 'REQUEST_COMMENT_FINISHED';
export const REQUEST_COMMENT_REPLY_FINISHED = 'REQUEST_COMMENT_REPLY_FINISHED';
export const REQUEST_CLAP_FINISHED = 'REQUEST_CLAP_FINISHED';
export const VIEW_PAGE = 'VIEW_PAGE';

// General query
export const RECIEVE_ARTICLES = 'RECIEVE_ARTICLES';
export const RECIEVE_MORE_ARTICLES = 'RECIEVE_MORE_ARTICLES';
export const RECIEVE_USER_PROFILE = 'RECIEVE_USER_PROFILE';

/* 
 * Auth requests
 */
export const LOGIN_USER = 'LOGIN_USER';
export const RECIEVE_USER_DATA = 'RECIEVE_USER_DATA';
export const LOGOUT_USER = 'LOGOUT_USER';

/* 
 * Sockets connection
 */
export const ON_NOTIFICATION = 'ON_NOTIFICATION';
export const READ_ALL_NOTIFICATIONS = 'READ_ALL_NOTIFICATIONS';
export const SETUP_NOTIFICATION = 'SETUP_NOTIFICATION';
