export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.jpg","bert.gif","bert.png","bg.png","cloud.png","color-logo.png","doug.gif","doug.png","dougbert.png","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","img/cloud.png","img/header.jpg","link-preview.png","muc-scout.png","space.png"]),
	mimeTypes: {".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.453bb1c4.js","imports":["_app/immutable/entry/start.453bb1c4.js","_app/immutable/chunks/index.523be208.js","_app/immutable/chunks/singletons.f65e9730.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6cc24653.js","imports":["_app/immutable/entry/app.6cc24653.js","_app/immutable/chunks/index.523be208.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
