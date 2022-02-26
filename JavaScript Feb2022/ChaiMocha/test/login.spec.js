var expect = require('chai').expect;
var Login = require('../src/Login');
var should = require('chai').should();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { deleteUsers } = require('../src/Login');
chai.use(chaiAsPromised).should();

describe('Login users test', () => {

    beforeEach(() => {
        Login.loadUsers(['Jose', 'Salomon', 'Camilo', 'Yuri']);
    });

    it('Existing user Jose', () => {
        var userExists = Login.userExists('Jose');
        expect(userExists).to.be.true;
    });

    it('Not Existing user Armando', () => {
        var userExists = Login.userExists('Armando');
        expect(userExists).to.be.false;
    });

    it('Not existing user Luis', () => {
        var userExists = Login.userExists('Luis');
        expect(userExists).to.be.false;
    });

    it('Probar que se borran usuarios', () =>{
        var deleteUsrs = deleteUsers();
        console.log("Variable: ", deleteUsrs)
     
        expect(deleteUsrs).to.be.null;
    });

    //Promise  pendientes
    it('Existing user Jose with promise', () => {
        return Login.userExistsPromise('Jose').should.eventually.equal(true);
    });

    it('Not existing user Luis with promise', () => {
        return Login.userExistsPromise('Luis').should.eventually.equal(false);
    });

});