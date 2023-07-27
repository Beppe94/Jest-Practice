function capitalize(string) {
    const first = string[0].toUpperCase();

    return first + string.substring(1);
}

export default capitalize;