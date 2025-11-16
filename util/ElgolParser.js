// Generated from ElgolParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ElgolParserListener from './ElgolParserListener.js';
const serializedATN = [4,1,29,194,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,0,
1,1,1,1,1,1,1,1,3,1,60,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,
2,73,8,2,10,2,12,2,76,9,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,5,5,88,
8,5,10,5,12,5,91,9,5,1,6,1,6,1,6,1,6,1,6,3,6,98,8,6,1,7,1,7,1,7,1,7,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,118,8,10,10,
10,12,10,121,9,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,129,8,12,1,13,1,13,
1,13,3,13,134,8,13,1,13,1,13,1,14,1,14,1,14,5,14,141,8,14,10,14,12,14,144,
9,14,1,15,1,15,1,16,1,16,1,16,1,16,5,16,152,8,16,10,16,12,16,155,9,16,1,
17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,3,1,0,20,23,3,0,4,4,16,16,18,
18,1,0,12,15,185,0,49,1,0,0,0,2,55,1,0,0,0,4,69,1,0,0,0,6,77,1,0,0,0,8,80,
1,0,0,0,10,89,1,0,0,0,12,97,1,0,0,0,14,99,1,0,0,0,16,103,1,0,0,0,18,108,
1,0,0,0,20,113,1,0,0,0,22,122,1,0,0,0,24,128,1,0,0,0,26,130,1,0,0,0,28,137,
1,0,0,0,30,145,1,0,0,0,32,147,1,0,0,0,34,156,1,0,0,0,36,158,1,0,0,0,38,162,
1,0,0,0,40,164,1,0,0,0,42,166,1,0,0,0,44,175,1,0,0,0,46,48,3,2,1,0,47,46,
1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,
0,0,0,52,53,3,8,4,0,53,54,5,0,0,1,54,1,1,0,0,0,55,56,5,3,0,0,56,57,5,17,
0,0,57,59,5,24,0,0,58,60,3,4,2,0,59,58,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,
0,61,62,5,25,0,0,62,63,5,26,0,0,63,64,5,10,0,0,64,65,5,26,0,0,65,66,3,10,
5,0,66,67,5,11,0,0,67,68,5,26,0,0,68,3,1,0,0,0,69,74,3,6,3,0,70,71,5,27,
0,0,71,73,3,6,3,0,72,70,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,
0,75,5,1,0,0,0,76,74,1,0,0,0,77,78,5,3,0,0,78,79,5,16,0,0,79,7,1,0,0,0,80,
81,5,10,0,0,81,82,5,26,0,0,82,83,3,10,5,0,83,84,5,11,0,0,84,85,5,26,0,0,
85,9,1,0,0,0,86,88,3,12,6,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,
90,1,0,0,0,90,11,1,0,0,0,91,89,1,0,0,0,92,98,3,14,7,0,93,98,3,16,8,0,94,
98,3,18,9,0,95,98,3,42,21,0,96,98,3,44,22,0,97,92,1,0,0,0,97,93,1,0,0,0,
97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,0,98,13,1,0,0,0,99,100,5,3,0,0,100,
101,5,16,0,0,101,102,5,26,0,0,102,15,1,0,0,0,103,104,5,16,0,0,104,105,5,
19,0,0,105,106,3,20,10,0,106,107,5,26,0,0,107,17,1,0,0,0,108,109,5,2,0,0,
109,110,5,19,0,0,110,111,3,32,16,0,111,112,5,26,0,0,112,19,1,0,0,0,113,119,
3,24,12,0,114,115,3,22,11,0,115,116,3,24,12,0,116,118,1,0,0,0,117,114,1,
0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,21,1,0,0,0,121,
119,1,0,0,0,122,123,7,0,0,0,123,23,1,0,0,0,124,129,5,18,0,0,125,129,5,4,
0,0,126,129,5,16,0,0,127,129,3,26,13,0,128,124,1,0,0,0,128,125,1,0,0,0,128,
126,1,0,0,0,128,127,1,0,0,0,129,25,1,0,0,0,130,131,5,17,0,0,131,133,5,24,
0,0,132,134,3,28,14,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,
136,5,25,0,0,136,27,1,0,0,0,137,142,3,30,15,0,138,139,5,27,0,0,139,141,3,
30,15,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,
143,29,1,0,0,0,144,142,1,0,0,0,145,146,7,1,0,0,146,31,1,0,0,0,147,153,3,
34,17,0,148,149,3,22,11,0,149,150,3,34,17,0,150,152,1,0,0,0,151,148,1,0,
0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,33,1,0,0,0,155,153,
1,0,0,0,156,157,7,1,0,0,157,35,1,0,0,0,158,159,3,38,19,0,159,160,3,40,20,
0,160,161,3,38,19,0,161,37,1,0,0,0,162,163,7,1,0,0,163,39,1,0,0,0,164,165,
7,2,0,0,165,41,1,0,0,0,166,167,5,6,0,0,167,168,3,36,18,0,168,169,5,26,0,
0,169,170,5,10,0,0,170,171,5,26,0,0,171,172,3,10,5,0,172,173,5,11,0,0,173,
174,5,26,0,0,174,43,1,0,0,0,175,176,5,7,0,0,176,177,3,36,18,0,177,178,5,
26,0,0,178,179,5,8,0,0,179,180,5,26,0,0,180,181,5,10,0,0,181,182,5,26,0,
0,182,183,3,10,5,0,183,184,5,11,0,0,184,185,5,26,0,0,185,186,5,9,0,0,186,
187,5,26,0,0,187,188,5,10,0,0,188,189,5,26,0,0,189,190,3,10,5,0,190,191,
5,11,0,0,191,192,5,26,0,0,192,45,1,0,0,0,10,49,59,74,89,97,119,128,133,142,
153];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ElgolParser extends antlr4.Parser {

    static grammarFileName = "ElgolParser.g4";
    static literalNames = [ null, null, "'elgio'", "'inteiro'", "'zero'", 
                            "'comp'", "'enquanto'", "'se'", "'entao'", "'senao'", 
                            "'inicio'", "'fim'", "'maior'", "'menor'", "'igual'", 
                            "'diferente'", null, null, null, "'='", "'+'", 
                            "'-'", "'x'", "'/'", "'('", "')'", "'.'", "','" ];
    static symbolicNames = [ null, "ERRO_LEXICO", "ELGIO", "INTEIRO", "ZERO", 
                             "COMP", "ENQUANTO", "SE", "ENTAO", "SENAO", 
                             "INICIO", "FIM", "MAIOR", "MENOR", "IGUAL", 
                             "DIFERENTE", "ID", "FUNCAO", "NUM", "ASSIGN", 
                             "MAIS", "MENOS", "MULT", "DIV", "LPAREN", "RPAREN", 
                             "PONTO", "VIRGULA", "COMENTARIO", "WS" ];
    static ruleNames = [ "program", "functionDecl", "paramList", "param", 
                         "mainBlock", "statementList", "statement", "varDecl", 
                         "assignment", "elgioAssignment", "mathExpr", "mathOp", 
                         "mathOperand", "funcCall", "argList", "arg", "elgioExpr", 
                         "elgioOperand", "logicalExpr", "logicalOperand", 
                         "relOp", "whileStmt", "ifStmt" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ElgolParser.ruleNames;
        this.literalNames = ElgolParser.literalNames;
        this.symbolicNames = ElgolParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ElgolParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 46;
	            this.functionDecl();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.mainBlock();
	        this.state = 53;
	        this.match(ElgolParser.EOF);
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



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ElgolParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ElgolParser.INTEIRO);
	        this.state = 56;
	        this.match(ElgolParser.FUNCAO);
	        this.state = 57;
	        this.match(ElgolParser.LPAREN);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 58;
	            this.paramList();
	        }

	        this.state = 61;
	        this.match(ElgolParser.RPAREN);
	        this.state = 62;
	        this.match(ElgolParser.PONTO);
	        this.state = 63;
	        this.match(ElgolParser.INICIO);
	        this.state = 64;
	        this.match(ElgolParser.PONTO);
	        this.state = 65;
	        this.statementList();
	        this.state = 66;
	        this.match(ElgolParser.FIM);
	        this.state = 67;
	        this.match(ElgolParser.PONTO);
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



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ElgolParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.param();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 70;
	            this.match(ElgolParser.VIRGULA);
	            this.state = 71;
	            this.param();
	            this.state = 76;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ElgolParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(ElgolParser.INTEIRO);
	        this.state = 78;
	        this.match(ElgolParser.ID);
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



	mainBlock() {
	    let localctx = new MainBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ElgolParser.RULE_mainBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(ElgolParser.INICIO);
	        this.state = 81;
	        this.match(ElgolParser.PONTO);
	        this.state = 82;
	        this.statementList();
	        this.state = 83;
	        this.match(ElgolParser.FIM);
	        this.state = 84;
	        this.match(ElgolParser.PONTO);
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



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ElgolParser.RULE_statementList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65740) !== 0)) {
	            this.state = 86;
	            this.statement();
	            this.state = 91;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ElgolParser.RULE_statement);
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.varDecl();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.assignment();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.elgioAssignment();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.whileStmt();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 96;
	            this.ifStmt();
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



	varDecl() {
	    let localctx = new VarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ElgolParser.RULE_varDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(ElgolParser.INTEIRO);
	        this.state = 100;
	        this.match(ElgolParser.ID);
	        this.state = 101;
	        this.match(ElgolParser.PONTO);
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
	    this.enterRule(localctx, 16, ElgolParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(ElgolParser.ID);
	        this.state = 104;
	        this.match(ElgolParser.ASSIGN);
	        this.state = 105;
	        this.mathExpr();
	        this.state = 106;
	        this.match(ElgolParser.PONTO);
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



	elgioAssignment() {
	    let localctx = new ElgioAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ElgolParser.RULE_elgioAssignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(ElgolParser.ELGIO);
	        this.state = 109;
	        this.match(ElgolParser.ASSIGN);
	        this.state = 110;
	        this.elgioExpr();
	        this.state = 111;
	        this.match(ElgolParser.PONTO);
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



	mathExpr() {
	    let localctx = new MathExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ElgolParser.RULE_mathExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.mathOperand();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15728640) !== 0)) {
	            this.state = 114;
	            this.mathOp();
	            this.state = 115;
	            this.mathOperand();
	            this.state = 121;
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



	mathOp() {
	    let localctx = new MathOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ElgolParser.RULE_mathOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15728640) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	mathOperand() {
	    let localctx = new MathOperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ElgolParser.RULE_mathOperand);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.match(ElgolParser.NUM);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(ElgolParser.ZERO);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.match(ElgolParser.ID);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.funcCall();
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



	funcCall() {
	    let localctx = new FuncCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ElgolParser.RULE_funcCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(ElgolParser.FUNCAO);
	        this.state = 131;
	        this.match(ElgolParser.LPAREN);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 327696) !== 0)) {
	            this.state = 132;
	            this.argList();
	        }

	        this.state = 135;
	        this.match(ElgolParser.RPAREN);
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



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ElgolParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.arg();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 138;
	            this.match(ElgolParser.VIRGULA);
	            this.state = 139;
	            this.arg();
	            this.state = 144;
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ElgolParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 327696) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	elgioExpr() {
	    let localctx = new ElgioExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ElgolParser.RULE_elgioExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.elgioOperand();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15728640) !== 0)) {
	            this.state = 148;
	            this.mathOp();
	            this.state = 149;
	            this.elgioOperand();
	            this.state = 155;
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



	elgioOperand() {
	    let localctx = new ElgioOperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ElgolParser.RULE_elgioOperand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 327696) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	logicalExpr() {
	    let localctx = new LogicalExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ElgolParser.RULE_logicalExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.logicalOperand();
	        this.state = 159;
	        this.relOp();
	        this.state = 160;
	        this.logicalOperand();
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



	logicalOperand() {
	    let localctx = new LogicalOperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ElgolParser.RULE_logicalOperand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 327696) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	relOp() {
	    let localctx = new RelOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ElgolParser.RULE_relOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ElgolParser.RULE_whileStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(ElgolParser.ENQUANTO);
	        this.state = 167;
	        this.logicalExpr();
	        this.state = 168;
	        this.match(ElgolParser.PONTO);
	        this.state = 169;
	        this.match(ElgolParser.INICIO);
	        this.state = 170;
	        this.match(ElgolParser.PONTO);
	        this.state = 171;
	        this.statementList();
	        this.state = 172;
	        this.match(ElgolParser.FIM);
	        this.state = 173;
	        this.match(ElgolParser.PONTO);
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



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ElgolParser.RULE_ifStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(ElgolParser.SE);
	        this.state = 176;
	        this.logicalExpr();
	        this.state = 177;
	        this.match(ElgolParser.PONTO);
	        this.state = 178;
	        this.match(ElgolParser.ENTAO);
	        this.state = 179;
	        this.match(ElgolParser.PONTO);
	        this.state = 180;
	        this.match(ElgolParser.INICIO);
	        this.state = 181;
	        this.match(ElgolParser.PONTO);
	        this.state = 182;
	        this.statementList();
	        this.state = 183;
	        this.match(ElgolParser.FIM);
	        this.state = 184;
	        this.match(ElgolParser.PONTO);
	        this.state = 185;
	        this.match(ElgolParser.SENAO);
	        this.state = 186;
	        this.match(ElgolParser.PONTO);
	        this.state = 187;
	        this.match(ElgolParser.INICIO);
	        this.state = 188;
	        this.match(ElgolParser.PONTO);
	        this.state = 189;
	        this.statementList();
	        this.state = 190;
	        this.match(ElgolParser.FIM);
	        this.state = 191;
	        this.match(ElgolParser.PONTO);
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

ElgolParser.EOF = antlr4.Token.EOF;
ElgolParser.ERRO_LEXICO = 1;
ElgolParser.ELGIO = 2;
ElgolParser.INTEIRO = 3;
ElgolParser.ZERO = 4;
ElgolParser.COMP = 5;
ElgolParser.ENQUANTO = 6;
ElgolParser.SE = 7;
ElgolParser.ENTAO = 8;
ElgolParser.SENAO = 9;
ElgolParser.INICIO = 10;
ElgolParser.FIM = 11;
ElgolParser.MAIOR = 12;
ElgolParser.MENOR = 13;
ElgolParser.IGUAL = 14;
ElgolParser.DIFERENTE = 15;
ElgolParser.ID = 16;
ElgolParser.FUNCAO = 17;
ElgolParser.NUM = 18;
ElgolParser.ASSIGN = 19;
ElgolParser.MAIS = 20;
ElgolParser.MENOS = 21;
ElgolParser.MULT = 22;
ElgolParser.DIV = 23;
ElgolParser.LPAREN = 24;
ElgolParser.RPAREN = 25;
ElgolParser.PONTO = 26;
ElgolParser.VIRGULA = 27;
ElgolParser.COMENTARIO = 28;
ElgolParser.WS = 29;

ElgolParser.RULE_program = 0;
ElgolParser.RULE_functionDecl = 1;
ElgolParser.RULE_paramList = 2;
ElgolParser.RULE_param = 3;
ElgolParser.RULE_mainBlock = 4;
ElgolParser.RULE_statementList = 5;
ElgolParser.RULE_statement = 6;
ElgolParser.RULE_varDecl = 7;
ElgolParser.RULE_assignment = 8;
ElgolParser.RULE_elgioAssignment = 9;
ElgolParser.RULE_mathExpr = 10;
ElgolParser.RULE_mathOp = 11;
ElgolParser.RULE_mathOperand = 12;
ElgolParser.RULE_funcCall = 13;
ElgolParser.RULE_argList = 14;
ElgolParser.RULE_arg = 15;
ElgolParser.RULE_elgioExpr = 16;
ElgolParser.RULE_elgioOperand = 17;
ElgolParser.RULE_logicalExpr = 18;
ElgolParser.RULE_logicalOperand = 19;
ElgolParser.RULE_relOp = 20;
ElgolParser.RULE_whileStmt = 21;
ElgolParser.RULE_ifStmt = 22;

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
        this.ruleIndex = ElgolParser.RULE_program;
    }

	mainBlock() {
	    return this.getTypedRuleContext(MainBlockContext,0);
	};

	EOF() {
	    return this.getToken(ElgolParser.EOF, 0);
	};

	functionDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitProgram(this);
		}
	}


}



class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_functionDecl;
    }

	INTEIRO() {
	    return this.getToken(ElgolParser.INTEIRO, 0);
	};

	FUNCAO() {
	    return this.getToken(ElgolParser.FUNCAO, 0);
	};

	LPAREN() {
	    return this.getToken(ElgolParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ElgolParser.RPAREN, 0);
	};

	PONTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.PONTO);
	    } else {
	        return this.getToken(ElgolParser.PONTO, i);
	    }
	};


	INICIO() {
	    return this.getToken(ElgolParser.INICIO, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	FIM() {
	    return this.getToken(ElgolParser.FIM, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitFunctionDecl(this);
		}
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_paramList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	VIRGULA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.VIRGULA);
	    } else {
	        return this.getToken(ElgolParser.VIRGULA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitParamList(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_param;
    }

	INTEIRO() {
	    return this.getToken(ElgolParser.INTEIRO, 0);
	};

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitParam(this);
		}
	}


}



class MainBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_mainBlock;
    }

	INICIO() {
	    return this.getToken(ElgolParser.INICIO, 0);
	};

	PONTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.PONTO);
	    } else {
	        return this.getToken(ElgolParser.PONTO, i);
	    }
	};


	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	FIM() {
	    return this.getToken(ElgolParser.FIM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterMainBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitMainBlock(this);
		}
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_statementList;
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
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterStatementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitStatementList(this);
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
        this.ruleIndex = ElgolParser.RULE_statement;
    }

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	elgioAssignment() {
	    return this.getTypedRuleContext(ElgioAssignmentContext,0);
	};

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_varDecl;
    }

	INTEIRO() {
	    return this.getToken(ElgolParser.INTEIRO, 0);
	};

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	PONTO() {
	    return this.getToken(ElgolParser.PONTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitVarDecl(this);
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
        this.ruleIndex = ElgolParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(ElgolParser.ASSIGN, 0);
	};

	mathExpr() {
	    return this.getTypedRuleContext(MathExprContext,0);
	};

	PONTO() {
	    return this.getToken(ElgolParser.PONTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class ElgioAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_elgioAssignment;
    }

	ELGIO() {
	    return this.getToken(ElgolParser.ELGIO, 0);
	};

	ASSIGN() {
	    return this.getToken(ElgolParser.ASSIGN, 0);
	};

	elgioExpr() {
	    return this.getTypedRuleContext(ElgioExprContext,0);
	};

	PONTO() {
	    return this.getToken(ElgolParser.PONTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterElgioAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitElgioAssignment(this);
		}
	}


}



class MathExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_mathExpr;
    }

	mathOperand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathOperandContext);
	    } else {
	        return this.getTypedRuleContext(MathOperandContext,i);
	    }
	};

	mathOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathOpContext);
	    } else {
	        return this.getTypedRuleContext(MathOpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterMathExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitMathExpr(this);
		}
	}


}



class MathOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_mathOp;
    }

	MAIS() {
	    return this.getToken(ElgolParser.MAIS, 0);
	};

	MENOS() {
	    return this.getToken(ElgolParser.MENOS, 0);
	};

	MULT() {
	    return this.getToken(ElgolParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(ElgolParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterMathOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitMathOp(this);
		}
	}


}



class MathOperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_mathOperand;
    }

	NUM() {
	    return this.getToken(ElgolParser.NUM, 0);
	};

	ZERO() {
	    return this.getToken(ElgolParser.ZERO, 0);
	};

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterMathOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitMathOperand(this);
		}
	}


}



class FuncCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_funcCall;
    }

	FUNCAO() {
	    return this.getToken(ElgolParser.FUNCAO, 0);
	};

	LPAREN() {
	    return this.getToken(ElgolParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ElgolParser.RPAREN, 0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitFuncCall(this);
		}
	}


}



class ArgListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_argList;
    }

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	VIRGULA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.VIRGULA);
	    } else {
	        return this.getToken(ElgolParser.VIRGULA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitArgList(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_arg;
    }

	NUM() {
	    return this.getToken(ElgolParser.NUM, 0);
	};

	ZERO() {
	    return this.getToken(ElgolParser.ZERO, 0);
	};

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitArg(this);
		}
	}


}



class ElgioExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_elgioExpr;
    }

	elgioOperand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElgioOperandContext);
	    } else {
	        return this.getTypedRuleContext(ElgioOperandContext,i);
	    }
	};

	mathOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathOpContext);
	    } else {
	        return this.getTypedRuleContext(MathOpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterElgioExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitElgioExpr(this);
		}
	}


}



class ElgioOperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_elgioOperand;
    }

	NUM() {
	    return this.getToken(ElgolParser.NUM, 0);
	};

	ZERO() {
	    return this.getToken(ElgolParser.ZERO, 0);
	};

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterElgioOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitElgioOperand(this);
		}
	}


}



class LogicalExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_logicalExpr;
    }

	logicalOperand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalOperandContext);
	    } else {
	        return this.getTypedRuleContext(LogicalOperandContext,i);
	    }
	};

	relOp() {
	    return this.getTypedRuleContext(RelOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterLogicalExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitLogicalExpr(this);
		}
	}


}



class LogicalOperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_logicalOperand;
    }

	ID() {
	    return this.getToken(ElgolParser.ID, 0);
	};

	NUM() {
	    return this.getToken(ElgolParser.NUM, 0);
	};

	ZERO() {
	    return this.getToken(ElgolParser.ZERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterLogicalOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitLogicalOperand(this);
		}
	}


}



class RelOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_relOp;
    }

	MAIOR() {
	    return this.getToken(ElgolParser.MAIOR, 0);
	};

	MENOR() {
	    return this.getToken(ElgolParser.MENOR, 0);
	};

	IGUAL() {
	    return this.getToken(ElgolParser.IGUAL, 0);
	};

	DIFERENTE() {
	    return this.getToken(ElgolParser.DIFERENTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterRelOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitRelOp(this);
		}
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_whileStmt;
    }

	ENQUANTO() {
	    return this.getToken(ElgolParser.ENQUANTO, 0);
	};

	logicalExpr() {
	    return this.getTypedRuleContext(LogicalExprContext,0);
	};

	PONTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.PONTO);
	    } else {
	        return this.getToken(ElgolParser.PONTO, i);
	    }
	};


	INICIO() {
	    return this.getToken(ElgolParser.INICIO, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	FIM() {
	    return this.getToken(ElgolParser.FIM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitWhileStmt(this);
		}
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ElgolParser.RULE_ifStmt;
    }

	SE() {
	    return this.getToken(ElgolParser.SE, 0);
	};

	logicalExpr() {
	    return this.getTypedRuleContext(LogicalExprContext,0);
	};

	PONTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.PONTO);
	    } else {
	        return this.getToken(ElgolParser.PONTO, i);
	    }
	};


	ENTAO() {
	    return this.getToken(ElgolParser.ENTAO, 0);
	};

	INICIO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.INICIO);
	    } else {
	        return this.getToken(ElgolParser.INICIO, i);
	    }
	};


	statementList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementListContext);
	    } else {
	        return this.getTypedRuleContext(StatementListContext,i);
	    }
	};

	FIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ElgolParser.FIM);
	    } else {
	        return this.getToken(ElgolParser.FIM, i);
	    }
	};


	SENAO() {
	    return this.getToken(ElgolParser.SENAO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ElgolParserListener ) {
	        listener.exitIfStmt(this);
		}
	}


}




ElgolParser.ProgramContext = ProgramContext; 
ElgolParser.FunctionDeclContext = FunctionDeclContext; 
ElgolParser.ParamListContext = ParamListContext; 
ElgolParser.ParamContext = ParamContext; 
ElgolParser.MainBlockContext = MainBlockContext; 
ElgolParser.StatementListContext = StatementListContext; 
ElgolParser.StatementContext = StatementContext; 
ElgolParser.VarDeclContext = VarDeclContext; 
ElgolParser.AssignmentContext = AssignmentContext; 
ElgolParser.ElgioAssignmentContext = ElgioAssignmentContext; 
ElgolParser.MathExprContext = MathExprContext; 
ElgolParser.MathOpContext = MathOpContext; 
ElgolParser.MathOperandContext = MathOperandContext; 
ElgolParser.FuncCallContext = FuncCallContext; 
ElgolParser.ArgListContext = ArgListContext; 
ElgolParser.ArgContext = ArgContext; 
ElgolParser.ElgioExprContext = ElgioExprContext; 
ElgolParser.ElgioOperandContext = ElgioOperandContext; 
ElgolParser.LogicalExprContext = LogicalExprContext; 
ElgolParser.LogicalOperandContext = LogicalOperandContext; 
ElgolParser.RelOpContext = RelOpContext; 
ElgolParser.WhileStmtContext = WhileStmtContext; 
ElgolParser.IfStmtContext = IfStmtContext; 
