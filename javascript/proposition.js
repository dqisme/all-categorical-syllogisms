class Proposition {
  constructor(subject, predicate, type) {
    this.subject = subject;
    this.predicate = predicate;
    try {
      const { quantity, quality, toString } = {
        [Proposition.types.A]: {
          quantity: Proposition.quantities.universal,
          quality: Proposition.qualities.affirmative,
          toString: () => `All ${this.subject} is ${this.predicate}`,
        },
        [Proposition.types.E]: {
          quantity: Proposition.quantities.universal,
          quality: Proposition.qualities.negative,
          toString: () => `No ${this.subject} is ${this.predicate}`,
        },
        [Proposition.types.I]: {
          quantity: Proposition.quantities.particular,
          quality: Proposition.qualities.affirmative,
          toString: () => `Some ${this.subject} is ${this.predicate}`,
        },
        [Proposition.types.O]: {
          quantity: Proposition.quantities.particular,
          quality: Proposition.qualities.negative,
          toString: () => `Some ${this.subject} is not ${this.predicate}`,
        },
      }[type];
      this.quality = quality;
      this.quantity = quantity;
      this.type = type;
      this.toString = toString;
    } catch(error) {
      throw new Error('Invalid type of proposition');
    }
  }
}

Proposition.types = {
  A: 'A',
  E: 'E',
  I: 'I',
  O: 'O',
};

Proposition.quantities = {
  universal: 'universal',
  particular: 'particular',
};

Proposition.qualities = {
  affirmative: 'affirmative',
  negative: 'negative',
};

module.exports = Proposition;
