const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__7d88b0._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_c41db6._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_97dd8f._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_406cfd._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_4b32a4._.js");
runtime.loadChunk("server/chunks/ssr/_efceec._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
