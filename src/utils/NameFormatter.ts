function toRuneNameFormat(name: string): string {
    return name.split(" ").join("").replace(":","");
}

export default toRuneNameFormat;