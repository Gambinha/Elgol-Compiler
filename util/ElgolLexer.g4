lexer grammar ElgolLexer;

// =================================================================== I. Declaração de Tokens
// ===================================================================
tokens {
	ID,
	ERRO_LEXICO
}

// =================================================================== II. Palavras Reservadas (sem
// alteração) ===================================================================
ELGIO: 'elgio';
INTEIRO: 'inteiro';
ZERO: 'zero';
COMP: 'comp';
ENQUANTO: 'enquanto';
SE: 'se';
ENTAO: 'entao';
SENAO: 'senao';
INICIO: 'inicio';
FIM: 'fim';
MAIOR: 'maior';
MENOR: 'menor';
IGUAL: 'igual';
DIFERENTE: 'diferente';

// =================================================================== III. Tokens do Modo Padrão
// (sem alteração) ===================================================================

IDENTIFICADOR_POTENCIAL:
	[\p{Lu}] [\p{L}0-9_]* {
        const rule1 = this.text.length >= 3;
        const rule2 = /^[a-zA-Z]+$/.test(this.text);

        if (rule1 && rule2) {
            this.type = ElgolLexer.ID;
        } else {
            this.type = ElgolLexer.ERRO_LEXICO;
        }
    };

FUNCAO_POTENCIAL:
	'_' [\p{Lu}] [\p{L}0-9_]* {
        const functionName = this.text.substring(1);
        
        const rule1 = functionName.length >= 3;
        const rule2 = /^[a-zA-Z]+$/.test(functionName);

        if (rule1 && rule2) {
            this.type = ElgolLexer.FUNCAO;
        } else {
            this.type = ElgolLexer.ERRO_LEXICO;
        }
    };

FUNCAO: '_' [\p{Lu}] [\p{L}][\p{L}][\p{L}]*;

NUM: [1-9] [0-9]*;
NUMERO_INVALIDO: '0' [0-9]* -> type(ERRO_LEXICO);

// =================================================================== IV. Operadores e Símbolos
// (sem alteração) ===================================================================
ASSIGN: '=';
MAIS: '+';
MENOS: '-';
MULT: 'x';
DIV: '/';
LPAREN: '(';
RPAREN: ')';
PONTO: '.';
VIRGULA: ',';

// =================================================================== V. Itens a serem Ignorados
// (sem alteração) ===================================================================
COMENTARIO: '#' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

ERRO_INESPERADO: . -> type(ERRO_LEXICO);