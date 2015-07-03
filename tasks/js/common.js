"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('NiOiCGppcTL4lfHqqUSnC9F0kQ2ugLauRmVjl4Ng', 'xwdGACFWckbrClKxHL2Fv9NVNJKAZ7nW7zDwyNom');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
