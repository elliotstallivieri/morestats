// this function was originally created to convert the displayed rune names to the format used in the url
// it is not used currently, but it is kept for potential future use
function toRuneNameFormat(name: string): string {
  return name.split(" ").join("").replace(":", "");
}

export default toRuneNameFormat;
