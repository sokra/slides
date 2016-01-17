import React from "react";
import bespoke from "bespoke";
import progress from "bespoke-progress";
import keys from "bespoke-keys";
import touch from "bespoke-touch";
import hash from "bespoke-hash";
import backdrop from "bespoke-backdrop";
import theme from "bespoke-theme-nebula";
import scale from "bespoke-scale";
import "./webpack.css";
import hljs from "highlight.js/lib/highlight.js";
import hljs_JS from "highlight.js/lib/languages/javascript";
import hljs_XML from "highlight.js/lib/languages/xml";
import hljs_CSS from "highlight.js/lib/languages/css";
import "highlight.js/styles/github.css"

hljs.registerLanguage('javascript', hljs_JS);
hljs.registerLanguage('html', hljs_XML);
hljs.registerLanguage('css', hljs_CSS);
hljs.initHighlightingOnLoad();

var slidesContext, slides;
function makeSlides() {
	slidesContext = require.context("./webpack-slides", true, /(js|md)$/);
	slides = slidesContext.keys().sort().map((key) => slidesContext(key));
}
makeSlides();

class App extends React.Component {
	render() {
		return <article>
			{slides.map((slide) => {
				if(typeof slide === "string") {
					return <section dangerouslySetInnerHTML={{__html: slide}} />
				} else {
					return slide;
				}
			})}
		</article>
	}
}

var app = React.render(<App />, document.body);

var deck = bespoke.from("article", [
	keys(),
	touch(),
	hash(),
	theme(),
	scale(),
	progress()
]);

if(module.hot) {
	module.hot.accept(slidesContext.id, function() {
		var len = slides.length;
		makeSlides();
		if(len !== slides.length) throw new Error("Cannot update because slide count changed");
		React.render(<App />, document.body);
		var blocks = document.querySelectorAll('pre code');
		Array.prototype.forEach.call(blocks, hljs.highlightBlock);
	})
}
