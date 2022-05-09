export const manifest = {
	appDir: "_app",
	assets: new Set(["burger-default.png","burger-hover.png","button_close.png","button_finish.png","button_pallette.png","button_repository.png","draw-hover.png","draw-unselected.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"start-54043b92.js","js":["start-54043b92.js","chunks/index-54fb5827.js","chunks/index-6a4dd393.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
