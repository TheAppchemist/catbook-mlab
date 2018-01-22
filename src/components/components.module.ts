import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { IonicModule } from 'ionic-angular/module';
@NgModule({
	declarations: [LoaderComponent],
	imports: [
		IonicModule
	],
	exports: [LoaderComponent]
})
export class ComponentsModule {}
