import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routesOptions: ExtraOptions = {
  scrollPositionRestoration: 'top'
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) },
  { path: 'chamados', loadChildren: () => import('./pages/chamados/chamados.module').then(m => m.ChamadosModule) },
  { path: 'chamados/chamado-view', loadChildren: () => import('./pages/chamados/chamado-view/chamado-view.module').then(m => m.ChamadoViewModule)},
  { path: 'faturas', loadChildren: () => import('./pages/faturas/faturas.module').then(m => m.FaturasModule) },
  { path: 'faturas/fatura-view', loadChildren: () => import('./pages/faturas/fatura-view/fatura-view.module').then(m => m.FaturaViewModule)},
  { path: 'cotacoes', loadChildren: () => import('./pages/cotacoes/cotacoes.module').then(m => m.CotacoesModule) },
  { path: 'cotacoes/cotacao-view', loadChildren: () => import('./pages/cotacoes/cotacao-view/cotacao-view.module').then(m => m.CotacaoViewModule) },
  { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule) },
  { path: 'equipamentos', loadChildren: () => import('./pages/equipamentos/equipamentos.module').then(m => m.EquipamentosModule) },
  { path: 'equipamentos/equipamento-view', loadChildren: () => import('./pages/equipamentos/equipamento-view/equipamento-view.module').then(m => m.EquipamentoViewModule) },
  { path: 'projetos', loadChildren: () => import('./pages/projetos/projetos.module').then(m => m.ProjetosModule) },
  { path: 'contratos', loadChildren: () => import('./pages/contratos/contratos.module').then(m => m.ContratosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
