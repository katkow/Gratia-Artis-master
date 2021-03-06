import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [

    {
        path: '',
        component: TabsPage,
        children: [
          {
            path: 'feed',
            loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
          },
          {
            path: 'uploader',
            loadChildren: () => import('../uploader/uploader.module').then( m => m.UploaderPageModule)
          },
          {
            path: 'profile',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'post/:id',
            loadChildren: () => import('../post/post.module').then( m => m.PostPageModule)
          },
          {
            path: 'edit-profile',
            loadChildren: () => import('../edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
          }
            //{path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule'},
           // {path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule'},
           // {path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'},
            //{path: 'post/:id', loadChildren: '../post/post.module#PostPageModule'},
            //{path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule'},
        ]
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)], //zmiana z forRoot
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }
  


/* wersja autogenerated z app-routing.module.ts
{
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'uploader',
    loadChildren: () => import('./uploader/uploader.module').then( m => m.UploaderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }


];
*/