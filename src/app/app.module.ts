import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundedBlockDirective } from './directives/rounded/rounded-block.directive';
import { DraggableDirective } from './directives/draggable/draggable.directive';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { GeneralComponentComponent } from './general-component/general-component.component';
// import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
// import { StyledTextComponent } from './styled-text/styled-text.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundedBlockDirective,
    DraggableDirective,
    // HeaderComponent,
    // FooterComponent,
    // GeneralComponentComponent,
    // MainWrapperComponent,
    // StyledTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
