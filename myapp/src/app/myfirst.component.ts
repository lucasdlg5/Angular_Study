import { Component } from '@angular/core';

@Component({
    selector: 'app-myfirst', // Qual será a tag html que podera ser usado dentro do html
    /*template: `
<h1>My first component</h1>
    ` */// Pode ser usado quando nao temos uma estrutura muito grande para exibir, sem precisar criar uma pagina HTML

    templateUrl: './myfirst.component.html'
})

export class MyFirstComponent {

}
