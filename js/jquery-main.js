/**
 * ACCORDION
 */
$( function() {
    $( "#accordion" ).accordion({
    collapsible: true,
    active: false
    });
} );

/**
 * TABS
 */
$(document).ready(function() {

    $( function() {
    $( "#tabs" ).tabs({
        collapsible: true,
        hide: { effect: "fade", duration: 300, easing: "easeInOutQuart" },
        show: { effect: "fade", duration: 300, easing: "easeInOutQuart" }
    });
    } );

});