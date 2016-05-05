import {Component, OnInit} from 'angular2/core';
import {ICountry} from '../country';
import {RouteParams} from 'angular2/router';
import {geonames} from '../geonames.service';

@Component({
  selector: 'country-info',
  templateUrl: 'src/country-info/country-info.html',
  styleUrls: ['src/country-info/country-info.css']
})
export class CountryInfo implements OnInit {

  public country: ICountry;
  public countryFlagUrl: string;
  public countryMapUrl: string;

  constructor(
    private _routeParams: RouteParams,
    private _geonames: geonames
  ){
    this.country = <ICountry>{}
  }

  ngOnInit (){
    this._geonames.country(this._routeParams.get('countryCode'))
      .subscribe(country => {
        this.country = country
        this.countryFlagUrl = `http://www.geonames.org/img/country/250/${this.country.countryCode}.png`;
        this.countryMapUrl = `http://www.geonames.org/flags/x/${this.country.countryCode.toLocaleLowerCase()}.gif`
      });
  }
}
