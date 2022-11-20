// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// **************** isPhoneNumber() ****************
test('True Phone number 1', () => {
    expect(functions.isPhoneNumber('(839)456-6247')).toBe(true);
});

test('True Phone number 2', () => {
    expect(functions.isPhoneNumber('(839)-456-6247')).toBe(true);
});

test('False Phone number 1', () => {
    expect(functions.isPhoneNumber('83-456-624')).toBe(false);
});

test('False Phone number 2', () => {
    expect(functions.isPhoneNumber('83-454')).toBe(false);
});

// **************** isEmail() ****************
test('True email 1', () => {
    expect(functions.isEmail('cseucsd@ucsd.edu')).toBe(true);
});

test('True email 2', () => {
    expect(functions.isEmail('cse110@ucsd.edu')).toBe(true);
});

test('False email 1', () => {
    expect(functions.isEmail('123456ucsd')).toBe(false);
});

test('False email 2', () => {
    expect(functions.isEmail('cse110ucsd.com')).toBe(false);
});

// **************** isStrongPassword() ****************
test('True Strong Password 1', () => {
    expect(functions.isStrongPassword('A1234_')).toBe(true);
});

test('True Strong Password 2', () => {
    expect(functions.isStrongPassword('Abufsd79uwe')).toBe(true);
});

test('False Strong Password 1', () => {
    expect(functions.isStrongPassword('1bufsd79uwe')).toBe(false);
});

test('False Strong Password 2', () => {
    expect(functions.isStrongPassword('Abufsd7r65r566569uwe')).toBe(false);
});

// **************** isDate() ****************
test('True Date 1', () => {
    expect(functions.isDate('11/11/2022')).toBe(true);
});

test('True Date 2', () => {
    expect(functions.isDate('1/11/2050')).toBe(true);
});

test('False Date 1', () => {
    expect(functions.isDate('1/11/20590')).toBe(false);
});

test('False Date 2', () => {
    expect(functions.isDate('april/11/2050')).toBe(false);
});

// **************** isHexColor() ****************
test('True HexColr 1', () => {
    expect(functions.isHexColor('#A83')).toBe(true);
});

test('True HexColr 2', () => {
    expect(functions.isHexColor('#B83899')).toBe(true);
});

test('False HexColr 1', () => {
    expect(functions.isHexColor('#A83874934227')).toBe(false);
});

test('False HexColr 2', () => {
    expect(functions.isHexColor('cseucsd')).toBe(false);
});