import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

    formularioForm = this.fb.group({
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      direccion: this.fb.group({
        calle:['', ],
        numero:['',[Validators.minLength(2)]],
        ciudad:['',]
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ]),
      
    });
  
    get aliases() {
      return this.formularioForm.get('aliases') as FormArray;
    }

    addAlias() {
      this.aliases.push(this.fb.control(''));
    }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.formularioForm.value);
  }

  actualizarDatos() {
    this.formularioForm.patchValue({
      nombres: 'Aderson Félix',
      direccion: {
        calle: 'Jr Ramón Castilla'
      }
    });
  }
}
