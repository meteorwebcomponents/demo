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

        if (q.hasOwnProperty("selected") && q.selected == 1) {
            document.querySelector("#div-button-1").click();
        }
    }
});

FlowRouter.route("/contributor", {
    name: "contributor",
    action: function(p, q) {
        console.log("@contributor");

        mwcLayout.render("contributor", {
            toast: "polymer-toast"
        });

        if (q.hasOwnProperty("selected") && q.selected == 4) {
            document.querySelector('.circle[data-route="4"]').click()
        }
    }
});
