Template.mwc_card_demo.events({

    "click .mwc-card-route-close": function(e) {
        console.log(".mwc-card-route-close");

        document.querySelector("#mwc-card-selector").selected = 0;
    },

    "click #div-button-1": function(e) {
        console.log("#div-button-2");

        document.querySelector("#mwc-card-router").sharedElements = {
            'ripple': e.currentTarget,
            'reverse-ripple': e.currentTarget
        };

        document.querySelector("#mwc-card-selector").selected = 1;
    },

    "click #div-button-2": function(e) {
        console.log("#div-button-2");

        document.querySelector("#mwc-card-router").sharedElements = {
            'ripple': e.currentTarget,
            'reverse-ripple': e.currentTarget
        };

        document.querySelector("#mwc-card-selector").selected = 2;
    }

});
