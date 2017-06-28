import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { ServiceseriesService } from './serviceseries.service';
import { SeasonComponent } from './season/season.component';
import { ComicsComponent } from './comics/comics.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuperComponent } from './super/super.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ComicsearchComponent } from './comicsearch/comicsearch.component';
import { AuthhService } from './authh.service';
const paths = [
  {
    path: ''
    , component: FormComponent
  },
  {
    path: 'season'
    , component: SeasonComponent
  },
  {
    path: 'comic'
    , component: ComicsComponent
  },

  {
    path: 'series'
    , component: SeriesComponent
  },
  {
    path: 'admin'
    , component: AdminComponent,
    data: [{
      types: 'admin'
    }], canActivate: [AuthhService]
  },
  {
    path: 'super'
    , component: SuperComponent,
    data: [{
      types: 'super'
    }], canActivate: [AuthhService]
  },
  {
    path: 'user'
    , component: UserComponent
  },
  {
    path: 'comicss'
    , component: ComicsearchComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonComponent,
    ComicsComponent,
    FormComponent,
    SuperComponent,
    UserComponent,
    AdminComponent,
    ComicsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [ServiceseriesService, AuthhService],
  bootstrap: [AppComponent]
})
export class AppModule { }
