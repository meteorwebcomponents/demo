Meteor.startup(function() {
    Session.set("mwc-ready", false);

    document.addEventListener("WebComponentsReady", function() {
        Session.set("mwc-ready", true);
    });
});
