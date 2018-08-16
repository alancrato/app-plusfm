import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { NavbarComponent } from './navbar/navbar';
import { NotificationsComponent } from './notifications/notifications';

@NgModule({
	declarations: [
		FooterComponent,
    	NavbarComponent,
    	NotificationsComponent
	],
	imports: [],
	exports: [
		FooterComponent,
    	NavbarComponent,
    	NotificationsComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule {}
