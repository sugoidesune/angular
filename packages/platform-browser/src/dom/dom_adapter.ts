/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let _DOM: DomAdapter = null !;

export function getDOM() {
  return _DOM;
}

export function setDOM(adapter: DomAdapter) {
  _DOM = adapter;
}

export function setRootDomAdapter(adapter: DomAdapter) {
  if (!_DOM) {
    _DOM = adapter;
  }
}

/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export abstract class DomAdapter {
  // Needs Domino-friendly test utility
  abstract getProperty(el: Element, name: string): any;
  abstract dispatchEvent(el: any, evt: any): any;

  // Used by router
  abstract log(error: any): any;
  abstract logGroup(error: any): any;
  abstract logGroupEnd(): any;

  // Used by Meta
  abstract querySelectorAll(el: any, selector: string): any[];
  abstract remove(el: any): Node;
  abstract getAttribute(element: any, attribute: string): string|null;

  // Used by platform-server
  abstract setProperty(el: Element, name: string, value: any): any;
  abstract querySelector(el: any, selector: string): any;
  abstract nextSibling(el: any): Node|null;
  abstract parentElement(el: any): Node|null;
  abstract clearNodes(el: any): any;
  abstract appendChild(el: any, node: any): any;
  abstract removeChild(el: any, node: any): any;
  abstract insertBefore(parent: any, ref: any, node: any): any;
  abstract setText(el: any, value: string): any;
  abstract createComment(text: string): any;
  abstract createElement(tagName: any, doc?: any): HTMLElement;
  abstract createElementNS(ns: string, tagName: string, doc?: any): Element;
  abstract createTextNode(text: string, doc?: any): Text;
  abstract getElementsByTagName(element: any, name: string): HTMLElement[];
  abstract addClass(element: any, className: string): any;
  abstract removeClass(element: any, className: string): any;
  abstract getStyle(element: any, styleName: string): any;
  abstract setStyle(element: any, styleName: string, styleValue: string): any;
  abstract removeStyle(element: any, styleName: string): any;
  abstract setAttribute(element: any, name: string, value: string): any;
  abstract setAttributeNS(element: any, ns: string, name: string, value: string): any;
  abstract removeAttribute(element: any, attribute: string): any;
  abstract removeAttributeNS(element: any, ns: string, attribute: string): any;
  abstract createHtmlDocument(): HTMLDocument;
  abstract getDefaultDocument(): Document;

  // Used by Title
  abstract getTitle(doc: Document): string;
  abstract setTitle(doc: Document, newTitle: string): any;

  // Used by By.css
  abstract elementMatches(n: any, selector: string): boolean;
  abstract isElementNode(node: any): boolean;

  // Used by Testability
  abstract isShadowRoot(node: any): boolean;
  abstract getHost(el: any): any;

  // Used by KeyEventsPlugin
  abstract onAndCancel(el: any, evt: any, listener: any): Function;
  abstract getEventKey(event: any): string;
  abstract supportsDOMEvents(): boolean;

  // Used by PlatformLocation and ServerEventManagerPlugin
  abstract getGlobalEventTarget(doc: Document, target: string): any;

  // Used by PlatformLocation
  abstract getHistory(): History;
  abstract getLocation(): Location;
  abstract getBaseHref(doc: Document): string|null;
  abstract resetBaseElement(): void;

  // TODO: remove dependency in DefaultValueAccessor
  abstract getUserAgent(): string;

  // Used by AngularProfiler
  abstract performanceNow(): number;

  // Used by CookieXSRFStrategy
  abstract supportsCookies(): boolean;
  abstract getCookie(name: string): string|null;
}
