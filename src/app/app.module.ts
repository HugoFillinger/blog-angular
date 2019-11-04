import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDuBlogComponent } from './post-du-blog/post-du-blog.component';
import { LesPostsComponent } from './les-posts/les-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDuBlogComponent,
    LesPostsComponent
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
