const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return formatted full name when given a valid full name', () => {
    const fullName = 'John Doe';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "error" when given an empty full name', () => {
    const fullName = '';
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the last name when given a single name', () => {
    const fullName = 'Smith';
    const expected = 'Smith';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the full name when given a name with leading/trailing spaces', () => {
    const fullName = '   John Doe   ';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the full name when given a name with extra spaces between first and last name', () => {
    const fullName = 'John     Doe';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the full name when given a name with multiple spaces between first and last name', () => {
    const fullName = 'John        Doe';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the full name when given a name with uppercase letters', () => {
    const fullName = 'JOHN DOE';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return the full name when given a name with lowercase letters', () => {
    const fullName = 'john doe';
    const expected = 'Doe, John';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "Error" when given no name', () => {
    const fullName = '';
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "Error" when given a non-string input', () => {
    const fullName = 123;
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "Error" when given a name with additional text after the last name', () => {
    const fullName = 'John Doe Test';
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "Error" when given a name with non-alphabetic characters', () => {
    const fullName = 'John123 Doe';
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

  it('should return "Error" when given a name with at least three words separated by space', () => {
    const fullName = 'John Doe Smith';
    const expected = 'Error';
    const result = formatFullname(fullName);
    expect(result).to.equal(expected);
  });

});




