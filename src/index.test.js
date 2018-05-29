import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const index = fs.readFileSync('./src/index.html', "utf-8");
const { JSDOM } = jsdom;
const { window } = new JSDOM(index);
const { document } = (new JSDOM(`...`)).window;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Should have h1 that says Hello', (done) => {
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Hello");
    done();
    window.close();
  });
});
