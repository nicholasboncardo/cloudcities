export const manifest = {
	appDir: "_app",
	assets: new Set(["burger-default.png","burger-hover.png","button_close.png","button_finish.png","button_pallette.png","button_repository.png","cloud_download.svg","cloud_submit.svg","draw-hover.png","draw-unselected.png","global.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		entry: {"file":"start-78c9a9e2.js","js":["start-78c9a9e2.js","chunks/index-b4ba22ca.js","chunks/index-e1a0e36b.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "draw",
				pattern: /^\/draw\/?$/,
				names: [],
				types: [],
				path: "/draw",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
