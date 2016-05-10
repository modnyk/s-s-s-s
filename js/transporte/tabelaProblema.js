
////////////////////////////////////////////////////
//                FUNCOES DA TABELA               //
////////////////////////////////////////////////////
Tabela = function() {
    var t = {};

    t.reseta = function() {
        t.nRestri = 0;
        t.nVar = document.getElementById("variaveis").value;
    };

    t.carrega = function(xx) {
        throw "Not Implemented Yet!";
        t.reseta();
        $("#myTableData").empty();
        $("#myTableData2").empty();
        t.existe = true;
        t.nRestri = xx["iRest"];
        t.nVar = xx["nVariaveis"];
        t.problema = xx["problema"];
        t.objetivo = xx["objetivo"];
        t.restricoes = xx["restricoes"];
        t.relacoes = xx["relacoes"];
        t.rhs = xx["rhs"];
        t.upper = xx["upper"];
        t.lower = xx["lower"];
        //Cabecalho
        var table = document.getElementById("myTableData");
        var row = table.insertRow(0);
        row.insertCell(0).innerHTML = '&nbsp;';
        for (i = 1; i <= t.nVar; i++)
            row.insertCell(i).innerHTML = '<center><b>Coluna' + (i) + '</b></center>';
        row.insertCell().innerHTML = '<center><b>Linha</b></center>';
        row.insertCell().innerHTML = '<center><b>Lado Direito</b></center>';
        //Funcao Objetivo
        row = table.insertRow(1);
        row.insertCell(0).innerHTML = '<b>Objetivo</b>';
        for (i = 1; i <= t.nVar; i++)

            row.insertCell(i).innerHTML = '<input id="x0' + (i - 1) + '" type="text" \
                    class="fObj form-control" onkeypress="return isNumberKey(event)" required  step="any" value="' + t.objetivo[i - 1] + '">';
        row.insertCell().innerHTML = '&nbsp;';
        row.insertCell().innerHTML = '&nbsp;';
        //add restricoes
        if (t.restricoes[0] === "n") {
            showAlert("danger", "Erro: O sistema não possui restrições");
        } else {
            var table = document.getElementById("myTableData");
            if (t.nRestri < 21) {

                for (j = 2; j < (t.nRestri + 2); j++) {

                    var row = table.insertRow(j);
                    row.insertCell(0).innerHTML = '<b>Restri&ccedil;&atilde;o' + (j - 1) + '</b>';
                    for (i = 1; i <= t.nVar; i++) {
                        row.insertCell(i).innerHTML = '<input id="x' + (j - 1) + '' + (i - 1) + '" type="text"  \
                    class="xRest form-control" onkeypress="return isNumberKey(event)" required  step="any" value="' + t.restricoes[j - 2][i - 1] + '">';
                    }

                    if (t.relacoes[j - 2] === "<=") {
                        row.insertCell().innerHTML = '<select id="relacao' + (j - 1) + '" class="relacao form-control">\
                <option value="<=" selected="selected"><=</option><option>=</option><option>>=</option></select>';
                    } else if (t.relacoes[j - 2] === "=") {
                        row.insertCell().innerHTML = '<select id="relacao' + (j - 1) + '" class="relacao form-control">\
                <option><=</option><option value="=" selected="selected">=</option><option>>=</option></select>';
                    } else if (t.relacoes[j - 2] === ">=") {
                        row.insertCell().innerHTML = '<select id="relacao' + (j - 1) + '" class="relacao form-control">\
                <option><=</option><option>=</option><option value=">=" selected="selected">>=</option></select>';
                    }

                    row.insertCell().innerHTML = '<input id="ladoDir' + (j - 1) + '" type="text" \
                class="ladoDir form-control" onkeypress="return isNumberKey(event)" required  step="any" value="' + t.rhs[j - 2] + '">';
                }
            } else {
                showAlert('warning', 'Limite máximo de restrições atingido: 20');
            }
        }
<<<<<<< HEAD
=======

        //Limite superior e inferior
        var table = document.getElementById("myTableData2");
        var rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = '&nbsp;';
        for (i = 1; i <= t.nVar; i++) {
            row.insertCell(i).innerHTML = '<center><b>Coluna' + (i) + '</b></center>';
        }
        var rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = '<b>Limite Superior</b>';
        for (i = 1; i <= t.nVar; i++) {

            row.insertCell(i).innerHTML = '<input id="limiSupx' + (i) + '" type="text" \
                    class="limSup form-control" onkeypress="return isInfinityKey(event)" required  step="any" value="' + t.upper[i - 1] + '">';
        }
        row = table.insertRow(rowCount + 1);
        row.insertCell(0).innerHTML = '<b>Limite Inferior</b>';
        for (i = 1; i <= t.nVar; i++) {

            row.insertCell(i).innerHTML = '<input id="limiInfx' + (i) + '" type="text" \
                    class="limInf form-control" onkeypress="return isInfinityKey(event)" required  step="any" value="' + t.lower[i - 1] + '">';
        }
>>>>>>> 73429cd1cfd82e7fe5f461579677c67c14f96a09
    };

    //Cria a tabela base de um novo modelo
    t.novo = function() {
        t.reseta();
        t.existe = true;
        //Cabecalho
        var table = document.getElementById("myTableData");
        var row = table.insertRow(0);
        row.insertCell(0).innerHTML = '&nbsp;';
        for (i = 1; i <= t.nVar; i++)
            row.insertCell(i).innerHTML = '<center><b>Coluna' + (i) + '</b></center>';


        row.insertCell().innerHTML = '<center><b>Suprimento</b></center>';
        //Funcao Objetivo
        row = table.insertRow(1);
        row.insertCell(0).innerHTML = '<b>Demanda</b>';
        for (i = 1; i <= t.nVar; i++)
            row.insertCell(i).innerHTML = '<input id="x0' + (i - 1) + '" type="text" \
                    class="fObj form-control" onkeypress="return isNumberKey(event)" required  step="any">';
        row.insertCell().innerHTML = '&nbsp;';
        row.insertCell().innerHTML = '&nbsp;';
		
        //Insere primeira restricao
<<<<<<< HEAD
        //t.addRow();

=======
        t.addRow();
        
>>>>>>> 73429cd1cfd82e7fe5f461579677c67c14f96a09
    };

    //Adiciona restricoes ao modelo
    t.addRow = function() {
        if (t.nRestri === 20) {
            showAlert('warning', 'Limite máximo de restrições atingido: 20');
            return;
        }

        t.nRestri++;
        var table = document.getElementById("myTableData");
<<<<<<< HEAD
        var row = table.insertRow(t.nRestri);
        row.insertCell(0).innerHTML = '<b>Restri&ccedil;&atilde;o' + t.nRestri + '</b>';
=======
        var row = table.insertRow(t.nRestri	);
        row.insertCell(0).innerHTML = '<b>Linha' + t.nRestri + '</b>';
>>>>>>> 73429cd1cfd82e7fe5f461579677c67c14f96a09
        for (i = 1; i <= t.nVar; i++)
            row.insertCell(i).innerHTML = '<input id="x' + t.nRestri + '' + (i - 1) + '" type="text"  \
                    class="xRest form-control" onkeypress="return isNumberKey(event)" required  step="any">';


        row.insertCell().innerHTML = '<input id="ladoDir' + t.nRestri + '" type="text" style="min-width: 90px;"\
                class="ladoDir form-control" onkeypress="return isNumberKey(event)" required  step="any">';
    };

    t.addCol = function() {
        if (t.nVar === 10) {
            showAlert('warning', 'Limite máximo de colunas atingido: 10');
            return;
        }

        t.nVar++;
        var table = document.getElementById("myTableData");
<<<<<<< HEAD

        table.rows[0].insertCell(t.nVar).innerHTML = '<center><b>x' + (t.nVar) + '</b></center>';
        for (i = 1; i < table.rows.length; i++) {
            table.rows[i].insertCell(table.rows[i].cells.length - 2).innerHTML = '<input id="x' + t.nRestri + '' + (t.nVar) + '" type="text"  \
=======
				
		table.rows[0].insertCell(t.nVar).innerHTML = '<center><b>Coluna' + (t.nVar) + '</b></center>';
		for (i = 1; i < table.rows.length; i++){
				table.rows[i].insertCell(table.rows[i].cells.length - 2).innerHTML = '<input id="x' + t.nRestri + '' + (t.nVar) + '" type="text"  \
>>>>>>> 73429cd1cfd82e7fe5f461579677c67c14f96a09
						class="xRest form-control" onkeypress="return isNumberKey(event)" required  step="any">';
        }
    };

    t.deleteRow = function() {
        var obj = document.getElementById("myTableData").rows[t.nRestri];
        var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("myTableData");
        if (t.nRestri > 1) {
            t.nRestri--;
            table.deleteRow(t.nRestri + 1);
        }
    };

    //Remove restricoes do modelo
    t.deleteCol = function() {
        //var obj = document.getElementById("myTableData").rows[t.nRestri];
        //var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("myTableData");
        if (t.nVar > 1) {
            t.nVar--;


            table.rows[0].deleteCell(t.nVar + 1);

            for (i = 1; i < table.rows.length; i++) {
                table.rows[i].deleteCell(t.nVar);//.innerHTML = '<input id="x' + t.nRestri + '' + (t.nVar) + '" type="text"  \class="xRest form-control" onkeypress="return isNumberKey(event)" required  step="any">';
            }

        }
    };

    t.existe = false;
    return t;
};


leituraParametros = function() {
    var metodo = document.getElementById("metodo").value;
    var demanda = [];
    var restricoes = [];
    var rhs = [];
    var tabelaTransporte = [[]];

    //Pegando dados da Tabela
    $(".fObj").each(function() {
        demanda.push(parseFloat($(this).val()));
    });

    var i = 0;
    var nRest = 0;
    var nVar = demanda.length;
    restricoes[0] = [];
    $(".xRest").each(function() {
        restricoes[nRest].push(parseFloat($(this).val()));
        i++;
        if (i === nVar) {
            i = 0;
            nRest++;
            restricoes[nRest] = [];
        }
    });
    restricoes.pop();

    $(".ladoDir").each(function() {
        rhs.push(parseFloat($(this).val()));
    });

    tabelaTransporte = restricoes;
    for (var i = 0; i < tabelaTransporte.length; i++) {
        tabelaTransporte[i].push(rhs[i]);
    }
    tabelaTransporte.push(demanda);

    return {
        metodo: metodo,
        problema: tabelaTransporte
    };

}

verificaTabela = function() {
    var bool = false;
    $(".fObj").each(function() {
        bool = ($(this).val() === '' || $(this).val() === null);
    });
    if (!bool) {
        $(".xRest").each(function() {
            bool = ($(this).val() === '' || $(this).val() === null);
        });
        if (!bool) {
            $(".ladoDir").each(function() {
                bool = ($(this).val() === '' || $(this).val() === null);
            });
        }
    }

    return bool;
}
//# sourceURL=tabelaProblema.js
