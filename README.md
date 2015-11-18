mwcLayout.render("profile", {text: "img-test"}, []);

mwcLayout.render("profile", {img: new Registered()});

document.registerElement('un-registered-test', UnRegistered); // Polymer.Class()

mwcLayout.render("profile", {img: new UnRegistered()});

fire "rerender" event on same layout multiple call
