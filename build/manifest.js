export const manifest = {
	appDir: "_app",
	assets: new Set(["burger-default.png","burger-hover.png","button_close.png","button_close_hover.png","button_finish.png","button_pallette.png","button_repository.png","button_repository_hover.png","button_reset.png","cloud_download.svg","cloud_submit.svg","draw-hover.png","draw-unselected.png","global.css","icon_info.png","icon_info_hover.png","svg/about.svg","svg/about_hover.svg","svg/button_finish.svg","svg/button_pallette.svg","svg/button_repository.svg","svg/close.svg","svg/close_hover.svg","svg/draw.svg","svg/draw_hover.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		entry: {"file":"start-2ced7de4.js","js":["start-2ced7de4.js","chunks/index-37d50d90.js","chunks/index-d2201ef8.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js')
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
				id: "draw",
				pattern: /^\/draw\/?$/,
				names: [],
				types: [],
				path: "/draw",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
