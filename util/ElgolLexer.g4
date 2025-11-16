lexer grammar ElgolLexer;

// ===================================================================
// I. Declaração de tokens “virtuais” (apenas nomes)
// ===================================================================
tokens { ERRO_LEXICO }

// ===================================================================
// II. Palavras Reservadas
// ===================================================================
ELGIO       : 'elgio';
INTEIRO     : 'inteiro';
ZERO        : 'zero';
COMP        : 'comp';
ENQUANTO    : 'enquanto';
SE          : 'se';
ENTAO       : 'entao';
SENAO       : 'senao';
INICIO      : 'inicio';
FIM         : 'fim';
MAIOR       : 'maior';
MENOR       : 'menor';
IGUAL       : 'igual';
DIFERENTE   : 'diferente';

// ===================================================================
// III. Identificadores e Funções
// ===================================================================
// Variáveis: Teste, Lixo, Variavel, etc.
// Começam com maiúscula e têm pelo menos 3 letras totais
ID          : [A-Z] [a-zA-Z]{2,} ;

// Funções: _Soma, _Fazalgo, etc.
// '_' + letra maiúscula + pelo menos mais 2 letras
FUNCAO      : '_' [A-Z] [a-zA-Z]{2,} ;

// ===================================================================
// IV. Números
// ===================================================================
// Números válidos: 1, 2, 10, 345, etc. (não pode começar com 0)
NUM         : [1-9] [0-9]* ;

// Números inválidos começando com 0 viram ERRO_LEXICO
NUMERO_INVALIDO : '0' [0-9]* -> type(ERRO_LEXICO);

// ===================================================================
// V. Operadores e Símbolos
// ===================================================================
ASSIGN      : '=';
MAIS        : '+';
MENOS       : '-';
MULT        : 'x';
DIV         : '/';
LPAREN      : '(';
RPAREN      : ')';
PONTO       : '.';
VIRGULA     : ',';

// ===================================================================
// VI. Ignorados
// ===================================================================
COMENTARIO  : '#' ~[\r\n]* -> skip;
WS          : [ \t\r\n]+ -> skip;

// ===================================================================
// VII. Qualquer outra coisa é erro léxico
// ===================================================================
ERRO_INESPERADO : . -> type(ERRO_LEXICO);
