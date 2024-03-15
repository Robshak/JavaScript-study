"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCode[StatusCode["BREAK"] = 3] = "BREAK";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'payment success',
    statuscode: StatusCode.SUCCESS
};
// 1 - success
// 2 - in progress
// 3 - break
// if(res.statuscode === StatusCode.SUCCESS){
// }
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["PUBLISHED"] = 0] = "PUBLISHED";
    StatusCode2[StatusCode2["DRAFT"] = 1] = "DRAFT";
    StatusCode2[StatusCode2["DELETED"] = 2] = "DELETED";
})(StatusCode2 || (StatusCode2 = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
