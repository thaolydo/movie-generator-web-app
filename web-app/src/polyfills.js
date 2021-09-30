"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * IE11 requires the following for NgClass support on SVG elements
 */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
require("zone.js"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVIOztHQUVHO0FBQ0gsb0VBQW9FO0FBRXBFOzs7O0dBSUc7QUFDSCw4RUFBOEU7QUFFOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFFSDs7R0FFRztBQUNILG1CQUFpQixDQUFFLDZCQUE2QjtBQUdoRDs7R0FFRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxuICogICAgICBmaWxlLlxuICpcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyBTYWZhcmkgPj0gMTAsIENocm9tZSA+PSA1NSAoaW5jbHVkaW5nIE9wZXJhKSxcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXG4gKlxuICogTGVhcm4gbW9yZSBpbiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvYnJvd3Nlci1zdXBwb3J0XG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQlJPV1NFUiBQT0xZRklMTFNcbiAqL1xuXG4vKipcbiAqIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgTmdDbGFzcyBzdXBwb3J0IG9uIFNWRyBlbGVtZW50c1xuICovXG4vLyBpbXBvcnQgJ2NsYXNzbGlzdC5qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBjbGFzc2xpc3QuanNgLlxuXG4vKipcbiAqIFdlYiBBbmltYXRpb25zIGBAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNgXG4gKiBPbmx5IHJlcXVpcmVkIGlmIEFuaW1hdGlvbkJ1aWxkZXIgaXMgdXNlZCB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uIGFuZCB1c2luZyBJRS9FZGdlIG9yIFNhZmFyaS5cbiAqIFN0YW5kYXJkIGFuaW1hdGlvbiBzdXBwb3J0IGluIEFuZ3VsYXIgRE9FUyBOT1QgcmVxdWlyZSBhbnkgcG9seWZpbGxzIChhcyBvZiBBbmd1bGFyIDYuMCkuXG4gKi9cbi8vIGltcG9ydCAnd2ViLWFuaW1hdGlvbnMtanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgd2ViLWFuaW1hdGlvbnMtanNgLlxuXG4vKipcbiAqIEJ5IGRlZmF1bHQsIHpvbmUuanMgd2lsbCBwYXRjaCBhbGwgcG9zc2libGUgbWFjcm9UYXNrIGFuZCBEb21FdmVudHNcbiAqIHVzZXIgY2FuIGRpc2FibGUgcGFydHMgb2YgbWFjcm9UYXNrL0RvbUV2ZW50cyBwYXRjaCBieSBzZXR0aW5nIGZvbGxvd2luZyBmbGFnc1xuICogYmVjYXVzZSB0aG9zZSBmbGFncyBuZWVkIHRvIGJlIHNldCBiZWZvcmUgYHpvbmUuanNgIGJlaW5nIGxvYWRlZCwgYW5kIHdlYnBhY2tcbiAqIHdpbGwgcHV0IGltcG9ydCBpbiB0aGUgdG9wIG9mIGJ1bmRsZSwgc28gdXNlciBuZWVkIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIGZpbGVcbiAqIGluIHRoaXMgZGlyZWN0b3J5IChmb3IgZXhhbXBsZTogem9uZS1mbGFncy50cyksIGFuZCBwdXQgdGhlIGZvbGxvd2luZyBmbGFnc1xuICogaW50byB0aGF0IGZpbGUsIGFuZCB0aGVuIGFkZCB0aGUgZm9sbG93aW5nIGNvZGUgYmVmb3JlIGltcG9ydGluZyB6b25lLmpzLlxuICogaW1wb3J0ICcuL3pvbmUtZmxhZ3MnO1xuICpcbiAqIFRoZSBmbGFncyBhbGxvd2VkIGluIHpvbmUtZmxhZ3MudHMgYXJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZmxhZ3Mgd2lsbCB3b3JrIGZvciBhbGwgYnJvd3NlcnMuXG4gKlxuICogKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfb25fcHJvcGVydHkgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIG9uUHJvcGVydHkgc3VjaCBhcyBvbmNsaWNrXG4gKiAod2luZG93IGFzIGFueSkuX196b25lX3N5bWJvbF9fVU5QQVRDSEVEX0VWRU5UUyA9IFsnc2Nyb2xsJywgJ21vdXNlbW92ZSddOyAvLyBkaXNhYmxlIHBhdGNoIHNwZWNpZmllZCBldmVudE5hbWVzXG4gKlxuICogIGluIElFL0VkZ2UgZGV2ZWxvcGVyIHRvb2xzLCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3aWxsIGFsc28gYmUgd3JhcHBlZCBieSB6b25lLmpzXG4gKiAgd2l0aCB0aGUgZm9sbG93aW5nIGZsYWcsIGl0IHdpbGwgYnlwYXNzIGB6b25lLmpzYCBwYXRjaCBmb3IgSUUvRWRnZVxuICpcbiAqICAod2luZG93IGFzIGFueSkuX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrID0gdHJ1ZTtcbiAqXG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBkZWZhdWx0IGZvciBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQVBQTElDQVRJT04gSU1QT1JUU1xuICovXG4iXX0=