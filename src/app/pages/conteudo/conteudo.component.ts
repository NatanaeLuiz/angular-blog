import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFAKE';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  photoCover:string = "";
  contentTitle:string = "";
  contentDescription:string = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    )

    this.setValuesToComponenteConteudo(this.id)
  }

  setValuesToComponenteConteudo(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]
  
    this.photoCover = result.photo;
    this.contentTitle= result.title;
    this.contentDescription = result.description;

  }
}
