/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-302896ff'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/AccountSettings.MtVUDoTO.js",
    "revision": null
  }, {
    "url": "assets/advanced-inputs.6oRpn5kY.js",
    "revision": null
  }, {
    "url": "assets/AgentMarketplaceButton.ZjCQipfK.js",
    "revision": null
  }, {
    "url": "assets/animations.B_aNiPwn.js",
    "revision": null
  }, {
    "url": "assets/avatars.h8saQOOS.js",
    "revision": null
  }, {
    "url": "assets/BookmarkNav.DtatfN92.js",
    "revision": null
  }, {
    "url": "assets/codemirror-core.C__3JdKM.js",
    "revision": null
  }, {
    "url": "assets/codemirror-language.CXADJHMJ.js",
    "revision": null
  }, {
    "url": "assets/codemirror-state.Pf71Wo5N.js",
    "revision": null
  }, {
    "url": "assets/codemirror-view.CbJCbsSK.js",
    "revision": null
  }, {
    "url": "assets/date-utils.j-oxXFG2.js",
    "revision": null
  }, {
    "url": "assets/forms.C5SvMVax.js",
    "revision": null
  }, {
    "url": "assets/framer-motion.CUBgTZ2H.js",
    "revision": null
  }, {
    "url": "assets/headlessui.C6zvGhgg.js",
    "revision": null
  }, {
    "url": "assets/heic-converter.Cz_Prg7D.js",
    "revision": null
  }, {
    "url": "assets/http-client.CQxrbIoM.js",
    "revision": null
  }, {
    "url": "assets/i18n.CKnf8Ee_.js",
    "revision": null
  }, {
    "url": "assets/index.C7CA0O9_.css",
    "revision": null
  }, {
    "url": "assets/index.DkYEMmfI.js",
    "revision": null
  }, {
    "url": "assets/locales.-zikk3eK.js",
    "revision": null
  }, {
    "url": "assets/markdown_highlight.YFvJ8PVJ.js",
    "revision": null
  }, {
    "url": "assets/markdown-processing.Bd1vXwBy.js",
    "revision": null
  }, {
    "url": "assets/math-katex.sdXCKFqw.css",
    "revision": null
  }, {
    "url": "assets/math-katex.steiuUVT.js",
    "revision": null
  }, {
    "url": "assets/radix-ui.DhlUfIfA.js",
    "revision": null
  }, {
    "url": "assets/react-interactions.-XOkHIvK.js",
    "revision": null
  }, {
    "url": "assets/routing.D5kjde0i.js",
    "revision": null
  }, {
    "url": "assets/sandpack.B0l4dZ4x.js",
    "revision": null
  }, {
    "url": "assets/security-ui.B3lcRyk_.js",
    "revision": null
  }, {
    "url": "assets/tanstack-vendor.BqB4aZ95.js",
    "revision": null
  }, {
    "url": "assets/utilities.Be-Is_-r.js",
    "revision": null
  }, {
    "url": "assets/validation.CeCA-dRw.js",
    "revision": null
  }, {
    "url": "assets/vendor.GrN--n9B.js",
    "revision": null
  }, {
    "url": "assets/virtualization.CHt0RqFw.js",
    "revision": null
  }, {
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "manifest.webmanifest",
    "revision": "0d285a51efd12fdba7f1fd10e3655e09"
  }, {
    "url": "manifest.webmanifest",
    "revision": "0d285a51efd12fdba7f1fd10e3655e09"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/^\/oauth/, /^\/api/]
  }));

}));
//# sourceMappingURL=sw.js.map
