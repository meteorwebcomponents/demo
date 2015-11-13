Package.describe({
    git: "https://github.com/meteorwebcomponents/compiler.git",
    name: "mwc:compiler",
    summary: "mwc template compiler",
    version: "0.0.1"
});

Package.registerBuildPlugin({
    name: "mwc_template_compiler",
    npmDependencies: {},
    sources: [
        "plug_in/mwc_template_compiler.js"
    ],
    use: ["isobuild:compiler-plugin@1.0.0", "isobuild:linter-plugin@1.0.0"]
});
