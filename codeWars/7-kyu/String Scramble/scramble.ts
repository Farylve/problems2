function scramble(str: string, arr: number[]): string {
    const result: string[] = [];

    for (let i = 0; i < str.length; i++) {
        result[arr[i]] = str[i];
    }

    return result.join('');
}
