// Meteor.startup(function() {
FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {
    FlowRouter.initialize();
});
// });

FlowRouter.route("/", {
    name: "home",
    action: function(p, q) {
        console.log("@home");

        mwcLayout.render("profile", {
            img: "img-test"
        })
    }
});
