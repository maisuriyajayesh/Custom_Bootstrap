import { Component} from '@angular/core';

@Component({
  selector: 'app-check-box-radio-button',
  templateUrl: './check-box-radio-button.component.html',
  styleUrls: ['./check-box-radio-button.component.scss']
})
export class CheckBoxRadioButtonComponent {
   
    public Copycode: string = `
 ****** Check Box ******

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
    </div>


    ****** Radio ******
  
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
    </div>           
  `;
  public CheckBox: string = `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
    </div>        
  `;
  public Radio: string = `
     <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
       <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
     </div>
     <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
       <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
     </div>           
   `;
}
