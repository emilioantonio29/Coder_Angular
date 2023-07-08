import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]'
})
export class RoundedBlockDirective {

  /*Inyeccion de dependencias: Inyectar servicios externos a la directiva adentro de la clase. Si se necesita cambiar el estilo del elemento
  al cual se le esta aplicando la directiva, se necesita una referencia al elemento. Se hace con inyeccion de dependencias */
  constructor(
      private eLementRef: ElementRef, 
      private rendered: Renderer2
    ) { 
      console.log("this.eLementRef", this.eLementRef)
      this.rendered.setStyle(this.eLementRef.nativeElement, 'border-radius', '15px')
      this.rendered.setStyle(this.eLementRef.nativeElement, 'background-color', 'grey')
      this.rendered.setStyle(this.eLementRef.nativeElement, 'color', 'white')
  }

}
