import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {

  describe('StringUtils tests', () => {

    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup');      
    })

    afterEach(() => {
      // clearing mocks
      console.log('Teardown');      
    })

    it.todo('test long strings');

    it('Return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
      console.log('Actual test');      
    })

    it('Throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError('Invalid Argument!');      
    })

    it('Throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrow('Invalid Argument!');
    })

    it('Throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done('GetStringInfo should throw error for invalid arg!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid Argument!');
        done();
      }
    });
  })

  it('Return uppercase', () => {
    const result = toUpperCase('jesus');
    expect(result).toBe('JESUS');
  });

  describe('ToUpperCase examples', () => {
    it.each([
      {input:'abc', expected: 'ABC'},
      {input:'my-string', expected: 'MY-STRING'},
      {input:'def', expected: 'DEF'},
    ]) ('$input toUpperCase should be $expected', ({input, expected}) => {
      const actual = toUpperCase(input);

      expect(actual).toBe(expected);
    });
  })

  describe('getStringInfo for arg My-String should', () => {

    it('Return right length', () => {
      const actual = getStringInfo('My-String');

      expect(actual.characters.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });

    it('Return right lower case', () => {
      const actual = getStringInfo('My-String');

      expect(actual.lowerCase).toBe('my-string');
    });

    it('Return right upper case', () => {
      const actual = getStringInfo('My-String');

      expect(actual.upperCase).toBe('MY-STRING');
    });

    it('Return right characters', () => {
      const actual = getStringInfo('My-String');

      expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      );
    });

    it('Return defined extra info', () => {
    const actual = getStringInfo('My-String');
    
    expect(actual.extraInfo).toBeDefined();
    });

    it('Return right extra info', () => {
    const actual = getStringInfo('My-String');
    
    expect(actual.extraInfo).toEqual({});
    });
  });
});