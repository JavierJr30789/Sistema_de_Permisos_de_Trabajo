import { Component, OnInit, ViewChild } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioSesionComponent } from '../../autentificacion/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from '../../autentificacion/registro/registro.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';




@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  standalone: true,
  imports: [MegaMenu, ButtonModule, CommonModule, RouterModule, ConfirmDialogModule, ToastModule, InicioSesionComponent, RegistroComponent],
  providers: [ConfirmationService, MessageService, RouterModule]
})
export class CabeceraComponent implements OnInit {
  items: MegaMenuItem[] = [];
  isMobile = false;

  @ViewChild('loginDialog') loginDialog!: InicioSesionComponent;
  @ViewChild('registerDialog') registerDialog!: RegistroComponent;

  constructor(private confirmationService: ConfirmationService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Modo offline', icon: 'pi pi-wifi', routerLink: '/' },
      { label: 'Preguntas Frecuentes', icon: 'pi pi-question', routerLink: '/' },
      { label: 'Contacto', icon: 'pi pi-comments', routerLink: '/' },
    ];
  }

  abrirDialogo(tipo: string) {
    if (tipo === 'login') {
      this.loginDialog.show();
    } else if (tipo === 'register') {
      this.registerDialog.show();
    }
  }

  confirmarAccion() {
    this.confirmationService.confirm({
      icon: 'pi pi-question-circle',
      header: 'Ya tienes una cuenta?',
      message: 'Elige una opción para continuar.',
      acceptLabel: 'No tengo una cuenta',
      rejectLabel: 'SI tengo una cuenta',
      accept: () => this.abrirDialogo('register'),
      reject: () => this.abrirDialogo('login'),
    });
  }
}
