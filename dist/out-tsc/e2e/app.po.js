"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var APMPage = /** @class */ (function () {
    function APMPage() {
    }
    APMPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    APMPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('pm-root h1')).getText();
    };
    return APMPage;
}());
exports.APMPage = APMPage;
//# sourceMappingURL=app.po.js.map