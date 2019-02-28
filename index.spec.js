const { exec } = require('child_process');

describe('answer', () => {
  it('should be return \'The answer is 42\'', () => {
    exec('./index.js', (err, stdout) => {
      expect(stdout).toBe('The answer is 42\n');
    });
  });
});
