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
            img: "img-test",
            text: "text-test"
        });
    }
});

FlowRouter.route("/sign-in", {
    name: "sign-in",
    action: function(p, q) {
        console.log("@sign-in");

        mwcLayout.render("sign-in", {
            body_A: "mwc-card-route-body-1",
            body_Z: "mwc-card-route-body-2"
        });

        if (q.hasOwnProperty("selected")) {
            document.querySelector("#mwc-card-selector").selected = q.selected;
        }
    }
});
