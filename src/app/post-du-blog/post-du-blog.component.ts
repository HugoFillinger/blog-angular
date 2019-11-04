import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-du-blog',
  templateUrl: './post-du-blog.component.html',
  styleUrls: ['./post-du-blog.component.scss']
})
export class PostDuBlogComponent implements OnInit {

  isAuth = false;

  lespost = [
    {
      titre:'Mon premier post',
      contenu:'Internet est le réseau informatique mondial accessible au public. C\'est un réseau de réseaux, à commutation de paquets, sans centre névralgique, composé de millions de réseaux aussi bien publics que privés, universitaires, commerciaux et gouvernementaux, eux-mêmes regroupés en réseaux autonomes (il y en avait plus de 91 000 en 20191). L\'information est transmise via Internet grâce à un ensemble standardisé de protocoles de transfert de données, qui permet des applications variées comme le courrier électronique, la messagerie instantanée, le pair-à-pair et le World Wide Web. C\'est l\'apparition de ce dernier qui a popularisé Internet.\n' +
        '\n' +
        'Un internaute est une personne qui utilise un accès à internet. Cet accès peut être obtenu grâce à un fournisseur d\'accès via divers moyens de communication électronique : soit filaire (réseau téléphonique commuté à bas débit, ADSL, fibre optique jusqu\'au domicile), soit sans fil (WiMAX, par satellite, 3G+, 4G, ou 5G).\n' +
        '\n' +
        'Un nombre croissant d\'objets peuvent se connecter à Internet, cette évolution est appelée l\'Internet des objets.',
      avis: 0,
      createdDate: new Date()

    },
    {
      titre:'Mon second post',
      contenu:'oulala oui je suis d\'accord tu a trop raison, mais tu parle de quoi enfaite ?',
      avis: 3,
      createdDate: new Date()
    },
    {
      titre:'Encore un post',
      contenu:'En vrai je ne sais même pas moi.',
      avis: -3,
      createdDate: new Date()
    }
  ];



  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

}


