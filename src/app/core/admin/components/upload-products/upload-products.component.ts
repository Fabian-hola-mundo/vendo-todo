import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.scss']
})
export class UploadProductsComponent {

formulario!: any;
form!: any;
inputText!: string;
rates: any = [1, 2, 3, 4, 5];
image!: string

products = {}

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      image: new FormArray([]),
      place: new FormControl(),
      stateOfProduct: new FormControl()
    })
  }

  pushImage(){
    this.formulario.image.push(this.image)
    console.log(this.formulario.image);

    this.image = ''
  }

  get imageArray() {
    return this.formulario.get('images') as FormArray;
  }

  agregarImagen() {
    this.imageArray.push(this.formBuilder.control(''));
  }

  eliminarImagen(index: number) {
    this.imageArray.removeAt(index);
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nombre: [null],
      arreglo: this.formBuilder.array([])
    })

    this.productService.getProduct().subscribe(product => {
      this.products = product

    })
  }

  agregarTelefonoCorreo() {
    const arreglo = this.form.get('arreglo') as FormArray;

    const grupo = this.formBuilder.group({
      telefono: [null],
      correo: [null]
    })

    arreglo.push(grupo);
  }

  onSubmit() {
    console.log(this.formulario.value);
    const response =  this.productService.addProduct(this.formulario.value)
    console.log(response);
  }

}
