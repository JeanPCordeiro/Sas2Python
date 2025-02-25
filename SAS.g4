grammar SAS;

program: (dataStep | procStep)* EOF;

dataStep: 'DATA' datasetName ';' (statement ';')* 'RUN' ';';
procStep: 'PROC' procName ';' (statement ';')* 'RUN' ';';

datasetName: ID;
procName: ID;

statement: assignment | ifStatement | doStatement | setStatement;

assignment: ID '=' expression;

ifStatement: 'IF' expression 'THEN' statement ('ELSE' statement)?;

doStatement: 'DO' (statement ';')* 'END' ';';

setStatement: 'SET' datasetName;

expression: logicalExpression;

logicalExpression: relationalExpression (('AND' | 'OR') relationalExpression)*;

relationalExpression: additiveExpression (('<' | '>' | '<=' | '>=' | '=' | '~=') additiveExpression)?;

additiveExpression: multiplicativeExpression (('+' | '-') multiplicativeExpression)*;

multiplicativeExpression: primaryExpression (('*' | '/') primaryExpression)*;

primaryExpression: ID | NUMBER | '(' expression ')';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '\'' .*? '\'';

WS: [ \t\r\n]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '*' ~[\r\n]* -> skip;
