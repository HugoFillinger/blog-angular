import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-les-posts',
  templateUrl: './les-posts.component.html',
  styleUrls: ['./les-posts.component.scss']
})


export class LesPostsComponent implements OnInit {
@Input() postTitre: string;
@Input() postContenu: string;
@Input() postAvis: number;
@Input() createdDate: Date;
  ngOnInit(){
    console.log('Le composant a fini son initialisation');
  }
isAuth = false;
  lastUpdate = new Date();
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }
  onlike(){
    console.log('Tu aime ce post');
this.postAvis += 1
  }
  ondislike(){
    console.log('tu n\'aime pas ce post');
this.postAvis -= 1
            }

  getColor(){
    if(this.postAvis > 0 ) {
      return 'green';
    } else if (this.postAvis < 0){
      return 'red';
    } else if (this.postAvis === 0 ){
      return 'black';
    }
  }
}
