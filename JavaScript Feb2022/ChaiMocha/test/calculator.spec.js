var Calculator = require('../src/Calculator')
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Calculator test', () => {

    describe('Sum operation', () => {

        it('Sum two positive integers', () => {
            var result = Calculator.sum(5, 5);
            expect(result).to.equal(10);
        });

        it('Sum two negative integers', () => {
            var result = Calculator.sum(-5, -5);
            expect(result).to.equal(-10);
        });

        it('Sum one positive and one negative integers', () => {
            var result = Calculator.sum(-5, 5);
            expect(result).to.equal(0);
        });

        it('Passing a character as the first number', () => {
            var result = Calculator.sum('a', 5);
            expect(result).to.equal('Not numbers');
        });

        it('Passing a character as the second number', () => {
            var result = Calculator.sum(5, 'a');
            expect(result).to.equal('Not numbers');
        });

        it('Passing a character as both numbers', () => {
            var result = Calculator.sum('a', 'a');
            expect(result).to.equal('Not numbers');
        });

        it('Passing null as the first number and one character', () => {
            var result = Calculator.sum(null, 'a');
            expect(result).to.equal('Not numbers');
        });

        it('Passing signal characters and numbers as string', () => {
            var result = Calculator.sum('(/&%$·d)', '8798798');
            expect(result).to.equal('Not numbers');
        });

        //Tarea...
        it('Sum stub', () => {
            Calculator.sum = sinon.stub().withArgs(5, 5).returns(10);
            expect(Calculator.sum(5, 5)).to.equal(10);
        });
    });

    describe('Division operation', () => {

        it('Division two numbers', () => {
            var result = Calculator.division(20, 5);
            expect(result).to.equal(4);
        });

        it('Division two negative integers', () => {
            var result = Calculator.division(-5, -5);
            expect(result).to.equal(1);
        });

        it('Passing a character as the first number using Division', () => {
            var result = Calculator.division('a', 5);
            expect(result).to.equal('Not numbers');
        });


        it('Passing a NULL as the first number using Division', () => {
            var result = Calculator.division(null, 5);
            expect(result).to.equal('Not numbers');
        });
    });

    describe('Substraction operation', () => {

        it('Substraction two numbers', () => {
            var result = Calculator.substraction(20, 5);
            expect(result).to.equal(15);
        });

        it('Substraction two negative integers', () => {
            var result = Calculator.substraction(-5, -5);
            expect(result).to.equal(0);
        });

        it('Substraction with letters', () => {
            var result = Calculator.substraction('a', 5);
            expect(result).to.equal('Not numbers');
        });

        it('Substraction with Null and true', () => {
            var result = Calculator.substraction(null, true);
            expect(result).to.equal('Not numbers');
        });
    });
});