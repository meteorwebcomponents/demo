PolymerLayout = function() {
    this.currentLayout = null;
};

PolymerLayout.prototype.render = function(layout, opt) {
    if (document.querySelector('mwc-layout[id="' + layout + '"]')) {
        document.querySelector('mwc-layout[id="' + layout + '"]').render(opt);

        if (this.currentLayout != layout) {
            if (this.currentLayout) {
                document.querySelector('mwc-layout[id="' + this.currentLayout + '"]').active = false
            }

            document.querySelector('mwc-layout[id="' + layout + '"]').active = true;

            this.currentLayout = layout;
        } else {
            if (opt.hasOwnProperty("region")) {
                document.querySelector('mwc-layout[id="' + layout + '"]').rerender(Object.keys(opt.region));
            } else {
                console.log("region property notFound")
            }
        }
    }
};
