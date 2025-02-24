import { Component, OnInit, ViewChild } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { InicioSesionComponent } from '../../autentificacion/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from '../../autentificacion/registro/registro.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  standalone: true,
  imports: [
    MegaMenu,
    ButtonModule,
    CommonModule,
    InicioSesionComponent,
    RegistroComponent,
    SplitButtonModule,
    TieredMenuModule,
  ],
})
export class CabeceraComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  menuItems: MenuItem[] = []; // Modelo para el p-tieredmenu

  isMobile = false;

  @ViewChild('loginDialog') loginDialog!: InicioSesionComponent;
  @ViewChild('registerDialog') registerDialog!: RegistroComponent;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    // Modelo para el MegaMenu
    this.items = [
      { label: 'Modo offline', root: true },
      { label: 'Preguntas Frecuentes', root: true },
      { label: 'Contacto', root: true },
    ];

    // Modelo para el TieredMenu
    this.menuItems = [
      {
        label: 'Iniciar Sesión',
        icon: 'pi pi-sign-in',
        command: () => this.abrirDialogo('login'),
      },
      {
        label: 'Registrarse',
        icon: 'pi pi-user-plus',
        command: () => this.abrirDialogo('register'),
      },
    ];
  }

  abrirDialogo(tipo: string) {
    if (tipo === 'login') {
      this.loginDialog.show();
    } else if (tipo === 'register') {
      this.registerDialog.show();
    }
  }
}