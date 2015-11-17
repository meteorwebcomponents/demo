mwcLayout.render("profile", {region:{text: "img-test"}}, [])

mwcLayout.render("profile", {
    region: {
        img: new Registered()
    }
});

document.registerElement('un-registered-test', UnRegistered); // Polymer.Class()

mwcLayout.render("profile", {
    region: {
        img: new UnRegistered()
    }
});

fire "rerender" event on same layout multiple call
