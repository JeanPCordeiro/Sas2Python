// Generated from SAS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SASListener from './SASListener.js';
const serializedATN = [4,1,30,146,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,48,8,1,10,1,12,1,51,9,1,1,1,1,1,1,1,1,2,1,
2,1,2,1,2,1,2,1,2,5,2,62,8,2,10,2,12,2,65,9,2,1,2,1,2,1,2,1,3,1,3,1,4,1,
4,1,5,1,5,1,5,1,5,3,5,78,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
90,8,7,1,8,1,8,1,8,1,8,5,8,96,8,8,10,8,12,8,99,9,8,1,8,1,8,1,8,1,9,1,9,1,
9,1,10,1,10,1,11,1,11,1,11,5,11,112,8,11,10,11,12,11,115,9,11,1,12,1,12,
1,12,3,12,120,8,12,1,13,1,13,1,13,5,13,125,8,13,10,13,12,13,128,9,13,1,14,
1,14,1,14,5,14,133,8,14,10,14,12,14,136,9,14,1,15,1,15,1,15,1,15,1,15,1,
15,3,15,144,8,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
0,4,1,0,12,13,2,0,5,5,14,18,1,0,19,20,1,0,21,22,144,0,36,1,0,0,0,2,41,1,
0,0,0,4,55,1,0,0,0,6,69,1,0,0,0,8,71,1,0,0,0,10,77,1,0,0,0,12,79,1,0,0,0,
14,83,1,0,0,0,16,91,1,0,0,0,18,103,1,0,0,0,20,106,1,0,0,0,22,108,1,0,0,0,
24,116,1,0,0,0,26,121,1,0,0,0,28,129,1,0,0,0,30,143,1,0,0,0,32,35,3,2,1,
0,33,35,3,4,2,0,34,32,1,0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,
36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,0,0,1,40,1,1,0,0,0,41,
42,5,1,0,0,42,43,3,6,3,0,43,49,5,2,0,0,44,45,3,10,5,0,45,46,5,2,0,0,46,48,
1,0,0,0,47,44,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,
0,0,0,51,49,1,0,0,0,52,53,5,3,0,0,53,54,5,2,0,0,54,3,1,0,0,0,55,56,5,4,0,
0,56,57,3,8,4,0,57,63,5,2,0,0,58,59,3,10,5,0,59,60,5,2,0,0,60,62,1,0,0,0,
61,58,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,
63,1,0,0,0,66,67,5,3,0,0,67,68,5,2,0,0,68,5,1,0,0,0,69,70,5,25,0,0,70,7,
1,0,0,0,71,72,5,25,0,0,72,9,1,0,0,0,73,78,3,12,6,0,74,78,3,14,7,0,75,78,
3,16,8,0,76,78,3,18,9,0,77,73,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,77,76,
1,0,0,0,78,11,1,0,0,0,79,80,5,25,0,0,80,81,5,5,0,0,81,82,3,20,10,0,82,13,
1,0,0,0,83,84,5,6,0,0,84,85,3,20,10,0,85,86,5,7,0,0,86,89,3,10,5,0,87,88,
5,8,0,0,88,90,3,10,5,0,89,87,1,0,0,0,89,90,1,0,0,0,90,15,1,0,0,0,91,97,5,
9,0,0,92,93,3,10,5,0,93,94,5,2,0,0,94,96,1,0,0,0,95,92,1,0,0,0,96,99,1,0,
0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,10,
0,0,101,102,5,2,0,0,102,17,1,0,0,0,103,104,5,11,0,0,104,105,3,6,3,0,105,
19,1,0,0,0,106,107,3,22,11,0,107,21,1,0,0,0,108,113,3,24,12,0,109,110,7,
0,0,0,110,112,3,24,12,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,
113,114,1,0,0,0,114,23,1,0,0,0,115,113,1,0,0,0,116,119,3,26,13,0,117,118,
7,1,0,0,118,120,3,26,13,0,119,117,1,0,0,0,119,120,1,0,0,0,120,25,1,0,0,0,
121,126,3,28,14,0,122,123,7,2,0,0,123,125,3,28,14,0,124,122,1,0,0,0,125,
128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,27,1,0,0,0,128,126,1,0,0,
0,129,134,3,30,15,0,130,131,7,3,0,0,131,133,3,30,15,0,132,130,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,29,1,0,0,0,136,134,1,0,0,
0,137,144,5,25,0,0,138,144,5,26,0,0,139,140,5,23,0,0,140,141,3,20,10,0,141,
142,5,24,0,0,142,144,1,0,0,0,143,137,1,0,0,0,143,138,1,0,0,0,143,139,1,0,
0,0,144,31,1,0,0,0,12,34,36,49,63,77,89,97,113,119,126,134,143];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SASParser extends antlr4.Parser {

    static grammarFileName = "SAS.g4";
    static literalNames = [ null, "'DATA'", "';'", "'RUN'", "'PROC'", "'='", 
                            "'IF'", "'THEN'", "'ELSE'", "'DO'", "'END'", 
                            "'SET'", "'AND'", "'OR'", "'<'", "'>'", "'<='", 
                            "'>='", "'~='", "'+'", "'-'", "'*'", "'/'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "ID", "NUMBER", "STRING", "WS", "COMMENT", 
                             "LINE_COMMENT" ];
    static ruleNames = [ "program", "dataStep", "procStep", "datasetName", 
                         "procName", "statement", "assignment", "ifStatement", 
                         "doStatement", "setStatement", "expression", "logicalExpression", 
                         "relationalExpression", "additiveExpression", "multiplicativeExpression", 
                         "primaryExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SASParser.ruleNames;
        this.literalNames = SASParser.literalNames;
        this.symbolicNames = SASParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SASParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 34;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 32;
	                this.dataStep();
	                break;
	            case 4:
	                this.state = 33;
	                this.procStep();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(SASParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dataStep() {
	    let localctx = new DataStepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SASParser.RULE_dataStep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(SASParser.T__0);
	        this.state = 42;
	        this.datasetName();
	        this.state = 43;
	        this.match(SASParser.T__1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33557056) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 45;
	            this.match(SASParser.T__1);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(SASParser.T__2);
	        this.state = 53;
	        this.match(SASParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procStep() {
	    let localctx = new ProcStepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SASParser.RULE_procStep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(SASParser.T__3);
	        this.state = 56;
	        this.procName();
	        this.state = 57;
	        this.match(SASParser.T__1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33557056) !== 0)) {
	            this.state = 58;
	            this.statement();
	            this.state = 59;
	            this.match(SASParser.T__1);
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(SASParser.T__2);
	        this.state = 67;
	        this.match(SASParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datasetName() {
	    let localctx = new DatasetNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SASParser.RULE_datasetName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(SASParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procName() {
	    let localctx = new ProcNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SASParser.RULE_procName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(SASParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SASParser.RULE_statement);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.assignment();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.ifStatement();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.doStatement();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 76;
	            this.setStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SASParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(SASParser.ID);
	        this.state = 80;
	        this.match(SASParser.T__4);
	        this.state = 81;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SASParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(SASParser.T__5);
	        this.state = 84;
	        this.expression();
	        this.state = 85;
	        this.match(SASParser.T__6);
	        this.state = 86;
	        this.statement();
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 87;
	            this.match(SASParser.T__7);
	            this.state = 88;
	            this.statement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doStatement() {
	    let localctx = new DoStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SASParser.RULE_doStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(SASParser.T__8);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33557056) !== 0)) {
	            this.state = 92;
	            this.statement();
	            this.state = 93;
	            this.match(SASParser.T__1);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(SASParser.T__9);
	        this.state = 101;
	        this.match(SASParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SASParser.RULE_setStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(SASParser.T__10);
	        this.state = 104;
	        this.datasetName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SASParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.logicalExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalExpression() {
	    let localctx = new LogicalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SASParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.relationalExpression();
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12 || _la===13) {
	            this.state = 109;
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 110;
	            this.relationalExpression();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SASParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.additiveExpression();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 507936) !== 0)) {
	            this.state = 117;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 507936) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 118;
	            this.additiveExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SASParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.multiplicativeExpression();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 122;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 123;
	            this.multiplicativeExpression();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SASParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.primaryExpression();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21 || _la===22) {
	            this.state = 130;
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===22)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 131;
	            this.primaryExpression();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SASParser.RULE_primaryExpression);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.match(SASParser.ID);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.match(SASParser.NUMBER);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.match(SASParser.T__22);
	            this.state = 140;
	            this.expression();
	            this.state = 141;
	            this.match(SASParser.T__23);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SASParser.EOF = antlr4.Token.EOF;
SASParser.T__0 = 1;
SASParser.T__1 = 2;
SASParser.T__2 = 3;
SASParser.T__3 = 4;
SASParser.T__4 = 5;
SASParser.T__5 = 6;
SASParser.T__6 = 7;
SASParser.T__7 = 8;
SASParser.T__8 = 9;
SASParser.T__9 = 10;
SASParser.T__10 = 11;
SASParser.T__11 = 12;
SASParser.T__12 = 13;
SASParser.T__13 = 14;
SASParser.T__14 = 15;
SASParser.T__15 = 16;
SASParser.T__16 = 17;
SASParser.T__17 = 18;
SASParser.T__18 = 19;
SASParser.T__19 = 20;
SASParser.T__20 = 21;
SASParser.T__21 = 22;
SASParser.T__22 = 23;
SASParser.T__23 = 24;
SASParser.ID = 25;
SASParser.NUMBER = 26;
SASParser.STRING = 27;
SASParser.WS = 28;
SASParser.COMMENT = 29;
SASParser.LINE_COMMENT = 30;

SASParser.RULE_program = 0;
SASParser.RULE_dataStep = 1;
SASParser.RULE_procStep = 2;
SASParser.RULE_datasetName = 3;
SASParser.RULE_procName = 4;
SASParser.RULE_statement = 5;
SASParser.RULE_assignment = 6;
SASParser.RULE_ifStatement = 7;
SASParser.RULE_doStatement = 8;
SASParser.RULE_setStatement = 9;
SASParser.RULE_expression = 10;
SASParser.RULE_logicalExpression = 11;
SASParser.RULE_relationalExpression = 12;
SASParser.RULE_additiveExpression = 13;
SASParser.RULE_multiplicativeExpression = 14;
SASParser.RULE_primaryExpression = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_program;
    }

	EOF() {
	    return this.getToken(SASParser.EOF, 0);
	};

	dataStep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataStepContext);
	    } else {
	        return this.getTypedRuleContext(DataStepContext,i);
	    }
	};

	procStep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcStepContext);
	    } else {
	        return this.getTypedRuleContext(ProcStepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DataStepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_dataStep;
    }

	datasetName() {
	    return this.getTypedRuleContext(DatasetNameContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterDataStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitDataStep(this);
		}
	}


}



class ProcStepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_procStep;
    }

	procName() {
	    return this.getTypedRuleContext(ProcNameContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterProcStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitProcStep(this);
		}
	}


}



class DatasetNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_datasetName;
    }

	ID() {
	    return this.getToken(SASParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterDatasetName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitDatasetName(this);
		}
	}


}



class ProcNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_procName;
    }

	ID() {
	    return this.getToken(SASParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterProcName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitProcName(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	doStatement() {
	    return this.getTypedRuleContext(DoStatementContext,0);
	};

	setStatement() {
	    return this.getTypedRuleContext(SetStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(SASParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_ifStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class DoStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_doStatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterDoStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitDoStatement(this);
		}
	}


}



class SetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_setStatement;
    }

	datasetName() {
	    return this.getTypedRuleContext(DatasetNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterSetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitSetStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_expression;
    }

	logicalExpression() {
	    return this.getTypedRuleContext(LogicalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitExpression(this);
		}
	}


}



class LogicalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_logicalExpression;
    }

	relationalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterLogicalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitLogicalExpression(this);
		}
	}


}



class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_relationalExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitRelationalExpression(this);
		}
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_multiplicativeExpression;
    }

	primaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SASParser.RULE_primaryExpression;
    }

	ID() {
	    return this.getToken(SASParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(SASParser.NUMBER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SASListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}


}




SASParser.ProgramContext = ProgramContext; 
SASParser.DataStepContext = DataStepContext; 
SASParser.ProcStepContext = ProcStepContext; 
SASParser.DatasetNameContext = DatasetNameContext; 
SASParser.ProcNameContext = ProcNameContext; 
SASParser.StatementContext = StatementContext; 
SASParser.AssignmentContext = AssignmentContext; 
SASParser.IfStatementContext = IfStatementContext; 
SASParser.DoStatementContext = DoStatementContext; 
SASParser.SetStatementContext = SetStatementContext; 
SASParser.ExpressionContext = ExpressionContext; 
SASParser.LogicalExpressionContext = LogicalExpressionContext; 
SASParser.RelationalExpressionContext = RelationalExpressionContext; 
SASParser.AdditiveExpressionContext = AdditiveExpressionContext; 
SASParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
SASParser.PrimaryExpressionContext = PrimaryExpressionContext; 
