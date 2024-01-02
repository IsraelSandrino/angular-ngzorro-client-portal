import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

// const routesOptions: ExtraOptions = {
//   scrollPositionRestoration: 'top'
// }

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/login' },
//   { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
//   { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
//   { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
//   { path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) },
//   { path: 'chamados', loadChildren: () => import('./pages/chamados/chamados.module').then(m => m.ChamadosModule) },
//   { path: 'chamados/chamado-view', loadChildren: () => import('./pages/chamados/chamado-view/chamado-view.module').then(m => m.ChamadoViewModule)},
//   { path: 'faturas', loadChildren: () => import('./pages/faturas/faturas.module').then(m => m.FaturasModule) },
//   { path: 'faturas/fatura-view', loadChildren: () => import('./pages/faturas/fatura-view/fatura-view.module').then(m => m.FaturaViewModule)},
//   { path: 'cotacoes', loadChildren: () => import('./pages/cotacoes/cotacoes.module').then(m => m.CotacoesModule) },
//   { path: 'cotacoes/cotacao-view', loadChildren: () => import('./pages/cotacoes/cotacao-view/cotacao-view.module').then(m => m.CotacaoViewModule) },
//   { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule) },
//   { path: 'equipamentos', loadChildren: () => import('./pages/equipamentos/equipamentos.module').then(m => m.EquipamentosModule) },
//   { path: 'equipamentos/equipamento-view', loadChildren: () => import('./pages/equipamentos/equipamento-view/equipamento-view.module').then(m => m.EquipamentoViewModule) },
//   { path: 'projetos', loadChildren: () => import('./pages/projetos/projetos.module').then(m => m.ProjetosModule) },
//   { path: 'projetos/projeto-view', loadChildren: () => import('./pages/projetos/projeto-view/projeto-view.module').then(m => m.ProjetoViewModule) },
//   { path: 'contratos', loadChildren: () => import('./pages/contratos/contratos.module').then(m => m.ContratosModule) },
//   { path: 'contratos/contrato-view', loadChildren: () => import('./pages/contratos/contrato-view/contrato-view.module').then(m => m.ContratoViewModule) }
// ];

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canActivate: [authGuard] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
