import Proposition from './proposition';

class Syllogism {
  constructor(mood, figure, majorTerm, minorTerm, middleTerm) {
    const conclusionPredicate = majorTerm;
    const conclusionSubject = minorTerm;
    const { majorPremiseType, minorPremiseType, conclusionType } = mood;
    try {
      const [
        majorPremiseSubject, majorPremisePredicate,
        minorPremiseSubject, minorPremisePredicate
      ] = {
        [Syllogism.figures.first]: [middleTerm, majorTerm, minorTerm, middleTerm],
        [Syllogism.figures.second]: [majorTerm, middleTerm, minorTerm, middleTerm],
        [Syllogism.figures.third]: [middleTerm, majorTerm, middleTerm, minorTerm],
        [Syllogism.figures.fourth]: [majorTerm, middleTerm, middleTerm, minorTerm],
      }[figure];
      this.majorPremise = new Proposition(majorPremiseSubject, majorPremisePredicate, majorPremiseType);
      this.minorPremise = new Proposition(minorPremiseSubject, minorPremisePredicate, minorPremiseType);
      this.conclusion = new Proposition(conclusionSubject, conclusionPredicate, conclusionType);
    } catch (error) {
      console.log(error);
      throw new Error('Invalid figure of syllogism');
    }
  }

  get isValid() {
    if (this.majorPremise) {}
    return true;
  }

  toString() {
    return `${this.majorPremise}\n${this.minorPremise}\n===========\n${this.conclusion}`;
  }
}

Syllogism.figures = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};

export default Syllogism;
