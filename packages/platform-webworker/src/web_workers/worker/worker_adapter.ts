/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ɵDomAdapter as DomAdapter, ɵsetRootDomAdapter as setRootDomAdapter} from '@angular/platform-browser';

/**
 * This adapter is required to log error messages.
 *
 * Note: other methods all throw as the DOM is not accessible directly in web worker context.
 */
export class WorkerDomAdapter extends DomAdapter {
  static makeCurrent() { setRootDomAdapter(new WorkerDomAdapter()); }

  log(error: any) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }

  logGroup(error: any) {
    if (console.group) {
      console.group(error);
      if (console.error) {
        console.error(error);
      } else {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    } else {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }

  logGroupEnd() {
    if (console.groupEnd) {
      console.groupEnd();
    }
  }

  setProperty(el: Element, name: string, value: any) { throw 'not implemented'; }
  getProperty(el: Element, name: string): any { throw 'not implemented'; }

  querySelector(el: any, selector: string): HTMLElement { throw 'not implemented'; }
  querySelectorAll(el: any, selector: string): any[] { throw 'not implemented'; }
  onAndCancel(el: any, evt: any, listener: any): Function { throw 'not implemented'; }
  dispatchEvent(el: any, evt: any) { throw 'not implemented'; }
  nextSibling(el: any): Node { throw 'not implemented'; }
  parentElement(el: any): Node { throw 'not implemented'; }
  clearNodes(el: any) { throw 'not implemented'; }
  appendChild(el: any, node: any) { throw 'not implemented'; }
  removeChild(el: any, node: any) { throw 'not implemented'; }
  remove(el: any): Node { throw 'not implemented'; }
  insertBefore(parent: any, el: any, node: any) { throw 'not implemented'; }
  setText(el: any, value: string) { throw 'not implemented'; }
  createComment(text: string): any { throw 'not implemented'; }
  createElement(tagName: any, doc?: any): HTMLElement { throw 'not implemented'; }
  createElementNS(ns: string, tagName: string, doc?: any): Element { throw 'not implemented'; }
  createTextNode(text: string, doc?: any): Text { throw 'not implemented'; }
  getHost(el: any): any { throw 'not implemented'; }
  getElementsByTagName(element: any, name: string): HTMLElement[] { throw 'not implemented'; }
  addClass(element: any, className: string) { throw 'not implemented'; }
  removeClass(element: any, className: string) { throw 'not implemented'; }
  setStyle(element: any, styleName: string, styleValue: string) { throw 'not implemented'; }
  removeStyle(element: any, styleName: string) { throw 'not implemented'; }
  getStyle(element: any, styleName: string): string { throw 'not implemented'; }
  getAttribute(element: any, attribute: string): string { throw 'not implemented'; }
  setAttribute(element: any, name: string, value: string) { throw 'not implemented'; }
  setAttributeNS(element: any, ns: string, name: string, value: string) { throw 'not implemented'; }
  removeAttribute(element: any, attribute: string) { throw 'not implemented'; }
  removeAttributeNS(element: any, ns: string, attribute: string) { throw 'not implemented'; }
  createHtmlDocument(): HTMLDocument { throw 'not implemented'; }
  getDefaultDocument(): Document { throw 'not implemented'; }
  getTitle(doc: Document): string { throw 'not implemented'; }
  setTitle(doc: Document, newTitle: string) { throw 'not implemented'; }
  elementMatches(n: any, selector: string): boolean { throw 'not implemented'; }
  isElementNode(node: any): boolean { throw 'not implemented'; }
  isShadowRoot(node: any): boolean { throw 'not implemented'; }
  getEventKey(event: any): string { throw 'not implemented'; }
  supportsDOMEvents(): boolean { throw 'not implemented'; }
  getGlobalEventTarget(doc: Document, target: string): any { throw 'not implemented'; }
  getHistory(): History { throw 'not implemented'; }
  getLocation(): Location { throw 'not implemented'; }
  getBaseHref(doc: Document): string { throw 'not implemented'; }
  resetBaseElement(): void { throw 'not implemented'; }
  getUserAgent(): string { return 'Fake user agent'; }
  performanceNow(): number { throw 'not implemented'; }

  supportsCookies(): boolean { return false; }
  getCookie(name: string): string { throw 'not implemented'; }
}
