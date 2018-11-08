export class Calc {
    async add(first: number, second: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            return resolve(first + second);
        });
    }
}
