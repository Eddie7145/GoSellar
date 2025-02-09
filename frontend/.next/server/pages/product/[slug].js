const CHUNK_PUBLIC_PATH = "server/pages/product/[slug].js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4e3f49._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_536b19._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_c52616._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_406cfd._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_d7b9c9._.js");
runtime.loadChunk("server/chunks/ssr/_efceec._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/product/[slug].tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
