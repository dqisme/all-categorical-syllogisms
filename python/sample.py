#!/usr/local/bin/python3

"""This script dump categorical syllogism according to user's input"""
from mood import Mood
from term import Term

(major_premise_type, minor_premise_type, conclusion_type), figure =\
    input('What is the categorical syllogism form? ').split('-')
mood = Mood(major_premise_type, minor_premise_type, conclusion_type);
majorTerm = Term('Predicate'[0])
minorTerm = Term('Subject'[0])
middleTerm = Term('Middle'[0])
syllogism = Syllogism(mood, figure, majorTerm, minorTerm, middleTerm);
print(syllogism)
