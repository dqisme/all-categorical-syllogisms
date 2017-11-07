#!/usr/local/bin/node

const readline = require('readline');

const Syllogism = require('./syllogism');
const Mood = require('./mood');
const Term = require('./term');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'What is the categorical syllogism form? ',
});

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  const [[majorPremiseType, minorPremiseType, conclusionType], figure] = input.split('-');
  const mood = new Mood(majorPremiseType, minorPremiseType, conclusionType);
  const majorTerm = new Term('Predicate'[0]);
  const minorTerm = new Term('Subject'[0]);
  const middleTerm = new Term('Middle'[0]);
  const syllogism = new Syllogism(mood, figure, majorTerm, minorTerm, middleTerm);
  console.log(syllogism.toString());
  rl.prompt();
});
