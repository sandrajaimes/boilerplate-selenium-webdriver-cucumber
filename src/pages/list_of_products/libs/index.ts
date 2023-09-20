
/*libs*/
export function includePosition(element: string, position: number): string {
    const separateTheString = element.split('::');
    return `${separateTheString[0]}[${position}]${separateTheString[1]}`
}

export function validationsToPosition(position: number): Error | boolean {
    if (!position) {
        throw new Error("The position of element must be a indicated");
    }

    if (Number.isNaN(position)) {
        throw new Error("The position of element must be a number");
    }

    return true
}

export function validationsToArrayFromPosition(position:number, elements: any[]): Error | boolean {
    validationsToPosition(position);

    if (position > elements.length) {
        throw new Error("The position is not correct");
    }

    return true
}

export default {
    includePosition,
    validationsToPosition,
    validationsToArrayFromPosition
}
