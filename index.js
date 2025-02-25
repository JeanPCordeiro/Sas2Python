const antlr4 = require('antlr4');
const SASLexer = require('./SASLexer').SASLexer;
const SASParser = require('./SASParser').SASParser;

// Input SAS code
const input = `
DATA mydata;
    SET sashelp.class;
    IF age > 13 THEN status = 'Teen';
    ELSE status = 'Pre-Teen';
RUN;
`;

// Create a stream of characters from the input
const chars = new antlr4.InputStream(input);

// Create a lexer and parser
const lexer = new SASLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SASParser(tokens);

// Parse the input and get the parse tree
const tree = parser.program();

// Print the parse tree
console.log(tree.toStringTree(parser.ruleNames));

