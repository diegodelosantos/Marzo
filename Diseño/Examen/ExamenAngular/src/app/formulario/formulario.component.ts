import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  countries = [
    {name: 'Afghanistan', abbreviation: 'AF'},
    {name: 'Albania', abbreviation: 'AL'},
    {name: 'Algeria', abbreviation: 'DZ'},
    {name: 'Andorra', abbreviation: 'AD'},
    {name: 'Angola', abbreviation: 'AO'},
    {name: 'Antigua and Barbuda', abbreviation: 'AG'},
    {name: 'Argentina', abbreviation: 'AR'},
    {name: 'Armenia', abbreviation: 'AM'},
    {name: 'Australia', abbreviation: 'AU'},
    {name: 'Austria', abbreviation: 'AT'},
    {name: 'Azerbaijan', abbreviation: 'AZ'},
    {name: 'Bahamas', abbreviation: 'BS'},
    {name: 'Bahrain', abbreviation: 'BH'},
    {name: 'Bangladesh', abbreviation: 'BD'},
    {name: 'Barbados', abbreviation: 'BB'},
    {name: 'Belarus', abbreviation: 'BY'},
    {name: 'Belgium', abbreviation: 'BE'},
    {name: 'Belize', abbreviation: 'BZ'},
    {name: 'Benin', abbreviation: 'BJ'},
    {name: 'Bhutan', abbreviation: 'BT'},
    {name: 'Bolivia', abbreviation: 'BO'},
    {name: 'Bosnia and Herzegovina', abbreviation: 'BA'},
    {name: 'Botswana', abbreviation: 'BW'},
    {name: 'Brazil', abbreviation: 'BR'},
    {name: 'Brunei', abbreviation: 'BN'},
    {name: 'Bulgaria', abbreviation: 'BG'},
    {name: 'Burkina Faso', abbreviation: 'BF'},
    {name: 'Burundi', abbreviation: 'BI'},
    {name: 'Cabo Verde', abbreviation: 'CV'},
    {name: 'Cambodia', abbreviation: 'KH'},
    {name: 'Cameroon', abbreviation: 'CM'},
    {name: 'Canada', abbreviation: 'CA'},
    {name: 'Central African Republic', abbreviation: 'CF'},
    {name: 'Chad', abbreviation: 'TD'},
    {name: 'Chile', abbreviation: 'CL'},
    {name: 'China', abbreviation: 'CN'},
    {name: 'Colombia', abbreviation: 'CO'},
    {name: 'Comoros', abbreviation: 'KM'},
    {name: 'Congo', abbreviation: 'CG'},
    {name: 'Costa Rica', abbreviation: 'CR'},
    {name: "Cote d'Ivoire", abbreviation: 'CI'},
    {name: 'Croatia', abbreviation: 'HR'},
    {name: 'Cuba', abbreviation: 'CU'},
    {name: 'Cyprus', abbreviation: 'CY'},
    {name: 'Czech Republic', abbreviation: 'CZ'},
    {name: 'Denmark', abbreviation: 'DK'},
    {name: 'Djibouti', abbreviation: 'DJ'},
    {name: 'Dominica', abbreviation: 'DM'},
    {name: 'Dominican Republic', abbreviation: 'DO'},
    {name: 'Ecuador', abbreviation: 'EC'},
    {name: 'Egypt', abbreviation: 'EG'},
    {name: 'El Salvador', abbreviation: 'SV'},
    {name: 'Equatorial Guinea', abbreviation: 'GQ'},
    {name: 'Eritrea', abbreviation: 'ER'},
    {name: 'España', abbreviation: 'ES'},
    {name: 'Estonia', abbreviation: 'EE'},
    {name: 'Eswatini', abbreviation: 'SZ'},
    {name: 'Ethiopia', abbreviation: 'ET'},
    {name: 'Fiji', abbreviation: 'FJ'},
    {name: 'Finland', abbreviation: 'FI'},
    {name: 'France', abbreviation: 'FR'},
    {name: 'Gabon', abbreviation: 'GA'},
    {name: 'Gambia', abbreviation: 'GM'},
    {name: 'Georgia', abbreviation: 'GE'},
    {name: 'Germany', abbreviation: 'DE'},
    {name: 'Ghana', abbreviation: 'GH'},
    {name: 'Greece', abbreviation: 'GR'},
    {name: 'Grenada', abbreviation: 'GD'},
    {name: 'Guatemala', abbreviation: 'GT'},
    {name: 'Guinea', abbreviation: 'GN'},
    {name: 'Guinea-Bissau', abbreviation: 'GW'},
    {name: 'Guyana', abbreviation: 'GY'},
    {name: 'Haiti', abbreviation: 'HT'},
    {name: 'Honduras', abbreviation: 'HN'},
    {name: 'Hungary', abbreviation: 'HU'},
    {name: 'Iceland', abbreviation: 'IS'},
    {name: 'India', abbreviation: 'IN'},
    {name: 'Indonesia', abbreviation: 'ID'},
    {name: 'Iran', abbreviation: 'IR'},
    {name: 'Iraq', abbreviation: 'IQ'},
    {name: 'Ireland', abbreviation: 'IE'},
    {name: 'Israel', abbreviation: 'IL'},
    {name: 'Italy', abbreviation: 'IT'},
    {name: 'Jamaica', abbreviation: 'JM'},
    {name: 'Japan', abbreviation: 'JP'},
    {name: 'Jordan', abbreviation: 'JO'},
    {name: 'Kazakhstan', abbreviation: 'KZ'},
    {name: 'Kenya', abbreviation: 'KE'},
    {name: 'Kiribati', abbreviation: 'KI'},
    {name: 'Kosovo', abbreviation: 'XK'},
    {name: 'Kuwait', abbreviation: 'KW'},
    {name: 'Kyrgyzstan', abbreviation: 'KG'},
    {name: 'Laos', abbreviation: 'LA'},
    {name: 'Latvia', abbreviation: 'LV'},
    {name: 'Lebanon', abbreviation: 'LB'},
    {name: 'Lesotho', abbreviation: 'LS'},
    {name: 'Liberia', abbreviation: 'LR'},
    {name: 'Libya', abbreviation: 'LY'},
    {name: 'Liechtenstein', abbreviation: 'LI'},
    {name: 'Lithuania', abbreviation: 'LT'},
    {name: 'Luxembourg', abbreviation: 'LU'},
    {name: 'Madagascar', abbreviation: 'MG'},
    {name: 'Malawi', abbreviation: 'MW'},
    {name: 'Malaysia', abbreviation: 'MY'},
    {name: 'Maldives', abbreviation: 'MV'},
    {name: 'Mali', abbreviation: 'ML'},
    {name: 'Malta', abbreviation: 'MT'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Mauritania', abbreviation: 'MR'},
    {name: 'Mauritius', abbreviation: 'MU'},
    {name: 'Mexico', abbreviation: 'MX'}
  ];

  onSubmit(): void {
    alert('Formulario enviado!');
  }
}
