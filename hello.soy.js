// This file was automatically generated from hello.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace example.templates.
 * @public
 */

goog.provide('example.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
example.templates.welcome = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<h1 id="greeting">' + soy.$$escapeHtml(opt_data.greeting) + '</h1>The year is ' + soy.$$escapeHtml(opt_data.year) + '.');
};
if (goog.DEBUG) {
  example.templates.welcome.soyTemplateName = 'example.templates.welcome';
}
