"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('apm App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.APMPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Angular: Getting Started!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map