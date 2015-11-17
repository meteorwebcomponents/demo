var A = new PolymerLayout()

A.render("profile", {
    region: {
        img: new Registered()
    }
});

document.registerElement('un-registered-test', UnRegistered); // Polymer.Class()

A.render("profile", {
    region: {
        img: new UnRegistered()
    }
});

fire "rerender" event on same layout multiple call
