import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../service/cadastro.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  nome: String = '';
  sobrenome: String = '';
  endereco: String = '';
  email: String = '';
  senha: String = '';
  dtNascimento: String = '';

  constructor(private router: Router, 
              private _cadastro: CadastroService, 
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'sobrenome' : [null, Validators.required],
      'endereco' : [null, Validators.required],
      'email' : [null, Validators.required],
      'senha' : [null, Validators.required],
      'dtNascimento' : [null, Validators.required]
    });
  }

  onClickSaveCadastro(form: NgForm) {
    this._cadastro.save(form).subscribe(res => {
                                        const id = res['_id'];
                                        this.router.navigate(['/app-cadastro', id]);
                                      }, (err) => {
                                        console.log(err);
                                      });
  }
}
