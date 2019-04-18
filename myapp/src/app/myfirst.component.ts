import { Component } from '@angular/core';

@Component({
    selector: 'app-myfirst', // Qual será a tag html que podera ser usado dentro do html
    // selector: '[app-myfirst]', // Dessa forma podemos usar o seletor do componente como uma IDRETIVA, podendo usar assim: <div app-myfirst></div>
    // selector: '.app-myfirst', // Adicionando um PONTO no inicio, assim como uma classe, podemos escrever assim: <div class="app-myfirst"></div>
    /*template: `
<h1>My first component</h1>
    ` */// Pode ser usado quando nao temos uma estrutura muito grande para exibir, sem precisar criar uma pagina HTML

    templateUrl: './myfirst.component.html',
    /*styles: [`
    .box1{
        width: 200px;
        height: 100px;
        background: freen;
        box-shadow: 5px 10px #CCCCCC;
    }
    `]*/ // Maneira por componente - O uso de crases permite pular linha no codigo
    styleUrls: [
        './myfirst.component.css'
    ] // Declarar o estilo usando uma folha de estilos CSS

})

export class MyFirstComponent {

}
