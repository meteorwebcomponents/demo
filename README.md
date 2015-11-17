var A = new PolymerLayout()

A.render("profile", {
    region: {
        img: "img-test"
    }
});

A.render("profile", {
    region: {
        img: new Registered()
    }
});

document.registerElement('un-registered-test', UnRegistered);
A.render("profile", {
    region: {
        img: new UnRegistered()
    }
});
