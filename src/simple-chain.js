const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (this.chain.length === 0) {
      this.chain.push(value);
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if( position > this.chainLength || position < 0) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.slice(0,position - 1).concat(this.chain.slice(position));
    return this;

  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    if (this.chain.length == 0){
      return "";
    }
    this.chain[0] = "( " + String(this.chain[0]) + " )";
    for (let i = 1; i  < this.chain.length;i ++) {
      this.chain[i] = "~~( " + String(this.chain[i]) + " )";
    }

    let result = this.chain.join('');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
