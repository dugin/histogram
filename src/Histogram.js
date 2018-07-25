import React from 'react';
import "./Histogram.css"
import serializeForm from 'form-serialize';
import {onlyAphabetic, lineBreakToSpace} from "./utils/regex"

class Histogram extends React.Component {

    defaultValue = `A persistência da violência contra a mulher na sociedade brasileira é um problema muito presente. Isso deve ser enfrentado, uma vez que, diariamente, mulheres são vítimas desta questão. Neste sentido, dois aspectos fazem-se relevantes: o legado histórico-cultural e o desrespeito às leis.  Segundo a História, a mulher sempre foi vista como inferior e submissa ao homem. Comprova-se isso pelo fato de elas poderem exercer direitos, ingressarem no mercado de trabalho e escolherem suas próprias roupas muito tempo depois do gênero oposto.

Esse cenário, juntamente aos inúmeros casos de violência contra as mulheres corroboram a ideia de que elas são vítimas de um histórico-cultural. Nesse ínterim, a cultura machista prevaleceu ao longo dos anos a ponto de enraizar-se na sociedade contemporânea, mesmo que de forma implícita, à primeira vista.

Conforme previsto pela Constituição Brasileira, todos são iguais perante à lei, independente de cor, raça ou gênero, sendo a isonomia salarial, aquela que prevê mesmo salário para mesma função, também garantidas por lei. No entanto, o que se observa em diversas partes do país,  é a gritante diferença  entre os salários de homens e mulheres, principalmente se estas forem negras. Esse fato causa extrema decepção e constrangimento a elas, as quais sentem-se inseguras e sem ter a quem recorrer. Desse modo, medidas fazem-se necessárias para corrigir a problemática.

Diante dos argumentos supracitados, é dever do Estado proteger as mulheres da violência, tanto física quanto moral, criando campanhas de combate à violência, além de impor leis mais rígidas e punições mais severas para aqueles que não as cumprem. Some-se a isso investimentos em educação, valorizando e capacitando os professores, no intuito de formar cidadãos comprometidos em garantir o bem-estar da sociedade como um todo.`

    state = {
        results: []
    };

    onCheckHistogram = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});

        this.getResults(values.text || '');

    };

    getResults(text) {
        const arr = lineBreakToSpace(text.trim()).split(' ');

        const obj = [];

        arr.forEach(value => {

            if (value.length > 0) {
                let val = onlyAphabetic(value).toLowerCase();

                let index = obj ? obj.map((el) => el.name).indexOf(val) : -1;

                index > -1 ? obj[index].cont++ : obj.push({name: val, cont: 1})

            }
        });

        obj.sort((a, b) => {
            return b.cont - a.cont;
        });

        this.setState({
            results: obj
        })

    }


     getHistogram(str) {
        const arr = lineBreakToSpace(str.trim()).split(' ');

        return arr.map(val => onlyAphabetic(val).toLowerCase())
            .filter( val => val.length > 0)
            .reduce((acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }), {});

    }


    render() {
        return (
            <div className="container">
                <h1 className="mt-2">Insira a Redação</h1>
                <form onSubmit={this.onCheckHistogram}>
                    <textarea name="text" className="mt-2" defaultValue={this.defaultValue} rows="4" cols="50"/>
                    <button className="btn btn-primary"> Verificar</button>
                </form>
                <div className="results my-3">
                    {this.state.results.length > 0 && (
                        <p>Histograma</p>)
                    }
                    <div className="row">
                        {this.state.results.map((val, i) => (
                                <div className="col-md-2 col-sm-3 col-4 p-2 result" key={val.name}> {val.name} : {val.cont}</div>
                            )
                        )}
                    </div>

                </div>
            </div>
        )
    }
}

export default Histogram;