// ==UserScript==
// @name         TS Web Debugger
// @namespace    https://travelstart.com/
// @version      0.1
// @description  Helper tool
// @author       Steven
// @match        https://*.travelstart.co.za/*
// @icon         https://www.google.com/s2/favicons?domain=travelstart.com
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    #debugw {
       color: #33FF00;
       font: 0.70rem Inconsolata, monospace;
       background-color: black;
       top:0;left:0;position:absolute;z-index:20;padding:0px;
    }
` );

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

var divider="|";
var debughtml="Last updated: "+ new Date(document.lastModified).toGMTString() + divider +
"Correlation id: "+sessionStorage.getItem("ngx-webstorage|correlation_id")+divider+
"Affiliate: "+params.affid+divider+
"utm_source: "+params.utm_source+divider+
"utm_medium: "+params.utm_medium+divider+
"utm_campaign: "+params.utm_campaign+divider+
"utm_term: "+params.utm_term;

var debugdiv = document.createElement("div");
debugdiv.setAttribute("id", "debugw");
debugdiv.innerHTML = debughtml;
document.body.appendChild(debugdiv);
