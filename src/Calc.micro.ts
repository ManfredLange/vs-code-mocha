import { expect } from 'chai';
import { Calc } from './Calc';

describe('Calc', () => {
    it('prints hello, world!', () => {
        const expectedMessage = "Hello, world!";
        const actualMessage = "Hello, world!";
        expect(actualMessage).to.equal(expectedMessage);
    });

    it('adds two numbers - use async/await', async () => {
        const calc = new Calc();
        let sum = await calc.add(1, 2);
        expect(sum).to.equal(3);
    });

    it('adds two numbers to be 13 - uses promises', function() {
        const calc = new Calc();
        return calc.add(6, 7)
        .then(sum => {
            expect(sum).to.equal(13);
        });
    });
});