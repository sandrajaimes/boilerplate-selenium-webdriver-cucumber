/*libs*/
export const IncludePosition: any = function (element: string, position: number): string {
  const separateTheString = element.split('::');
  return `${separateTheString[0]}[${position}]${separateTheString[1]}`;
}

export const ValidationsToPosition: any =function (position: number): Error | boolean {
  if (!position) {
    throw new Error('The position of element must be a indicated');
  }

  if (Number.isNaN(position)) {
    throw new Error('The position of element must be a number');
  }

  return true;
}

export const ValidationsToArrayFromPosition: any = function (
  position: number,
  elements: any[]
): Error | boolean {
  ValidationsToPosition(position);

  if (position > elements.length) {
    throw new Error('The position is not correct');
  }

  return true;
}

module.exports ={
  IncludePosition,
  ValidationsToPosition,
  ValidationsToArrayFromPosition
}
