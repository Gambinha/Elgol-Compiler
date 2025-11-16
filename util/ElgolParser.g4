parser grammar ElgolParser;

options {
  tokenVocab = ElgolLexer; // usa os tokens do seu lexer
}

// -------------------------------------------------------------------
// Regra inicial: programa = (funções)* + bloco principal
// -------------------------------------------------------------------
program
    : (functionDecl)* mainBlock EOF
    ;

// -------------------------------------------------------------------
// Funções
// inteiro _Func (inteiro Num, inteiro Dois) .
// inicio .
//   ...
// fim.
// -------------------------------------------------------------------
functionDecl
    : INTEIRO FUNCAO LPAREN paramList? RPAREN PONTO
      INICIO PONTO
      statementList
      FIM PONTO
    ;

paramList
    : param (VIRGULA param)*
    ;

param
    : INTEIRO ID
    ;

// -------------------------------------------------------------------
// Bloco principal
// inicio.
//   ...
// fim.
// -------------------------------------------------------------------
mainBlock
    : INICIO PONTO
      statementList
      FIM PONTO
    ;

// lista de comandos
statementList
    : (statement)*
    ;

// -------------------------------------------------------------------
// Tipos de comandos
// -------------------------------------------------------------------
statement
    : varDecl
    | assignment
    | elgioAssignment
    | whileStmt
    | ifStmt
    ;

// Declaração de variável: inteiro ID.
varDecl
    : INTEIRO ID PONTO
    ;

// Atribuição normal: ID = exprMat .
assignment
    : ID ASSIGN mathExpr PONTO
    ;

// Atribuição com elgio (sem função na expressão!):
// elgio = exprSemFunc .
elgioAssignment
    : ELGIO ASSIGN elgioExpr PONTO
    ;

// -------------------------------------------------------------------
// Expressões matemáticas (SEM precedência)
// expr = operando (op operando)*
// -------------------------------------------------------------------
mathExpr
    : mathOperand (mathOp mathOperand)*
    ;

mathOp
    : MAIS
    | MENOS
    | MULT
    | DIV
    ;

// Em expressão normal PODE ter chamada de função
mathOperand
    : NUM
    | ZERO
    | ID
    | funcCall
    ;

// Chamada de função: FUNCAO ( argList? )
// Parâmetros só podem ser NUM, ZERO ou ID
funcCall
    : FUNCAO LPAREN argList? RPAREN
    ;

argList
    : arg (VIRGULA arg)*
    ;

arg
    : NUM
    | ZERO
    | ID
    ;

// -------------------------------------------------------------------
// Expressão do elgio: igual à mathExpr, porém SEM função
// -------------------------------------------------------------------
elgioExpr
    : elgioOperand (mathOp elgioOperand)*
    ;

elgioOperand
    : NUM
    | ZERO
    | ID
    ;

// -------------------------------------------------------------------
// Expressões lógicas (enquanto, se)
// apenas 2 operandos e 1 oper relacional
// -------------------------------------------------------------------
logicalExpr
    : logicalOperand relOp logicalOperand
    ;

logicalOperand
    : ID
    | NUM
    | ZERO
    ;

relOp
    : MAIOR
    | MENOR
    | IGUAL
    | DIFERENTE
    ;

// -------------------------------------------------------------------
// enquanto ExprLogica.
// inicio.
//    statements
// fim.
// -------------------------------------------------------------------
whileStmt
    : ENQUANTO logicalExpr PONTO
      INICIO PONTO
      statementList
      FIM PONTO
    ;

// -------------------------------------------------------------------
// se ExprLogica.
// entao.
// inicio.
//   statements
// fim.
// senao.
// inicio.
//   statements
// fim.
// -------------------------------------------------------------------
ifStmt
    : SE logicalExpr PONTO
      ENTAO PONTO
      INICIO PONTO
      statementList
      FIM PONTO
      SENAO PONTO
      INICIO PONTO
      statementList
      FIM PONTO
    ;
