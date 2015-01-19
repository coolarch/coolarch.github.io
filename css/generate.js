#!/usr/bin/env node

var icons = require('./icons.json');

for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    console.log("." + icon.id + " { font-size: 18px; padding: 7px 7px 4px 8px; color: #ffffff; background-color: " + icon.color + "; margin-right: 5px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-font-smoothing: antialiased; }");
    console.log("a." + icon.id + " { text-decoration: none; }");
    console.log("a." + icon.id + ":hover, a." + icon.id + ":visited, a." + icon.id + ":active { color: #eeeeee; }");
};
