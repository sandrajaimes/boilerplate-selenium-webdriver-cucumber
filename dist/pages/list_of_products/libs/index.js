"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationsToArrayFromPosition = exports.validationsToPosition = exports.includePosition = void 0;
/*libs*/
function includePosition(element, position) {
    const separateTheString = element.split('::');
    return `${separateTheString[0]}[${position}]${separateTheString[1]}`;
}
exports.includePosition = includePosition;
function validationsToPosition(position) {
    if (!position) {
        throw new Error("The position of element must be a indicated");
    }
    if (Number.isNaN(position)) {
        throw new Error("The position of element must be a number");
    }
    return true;
}
exports.validationsToPosition = validationsToPosition;
function validationsToArrayFromPosition(position, elements) {
    validationsToPosition(position);
    if (position > elements.length) {
        throw new Error("The position is not correct");
    }
    return true;
}
exports.validationsToArrayFromPosition = validationsToArrayFromPosition;
exports.default = {
    includePosition,
    validationsToPosition,
    validationsToArrayFromPosition
};
