import { Component } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { PlatformI } from 'src/app/Modelos/Platform.interface';
import { recordI } from 'src/app/Modelos/record.interface';
import { sensorI } from 'src/app/Modelos/Sensor.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private api: ApiService, private router: Router) { }

  page = 1;
  pageSize = 10;
  Flota = 1;
  nextPage: any;

  platforms: any;
  plat: any;
  sensors: any;
  ngOnInit(): void {
    this.getPlatform();
  }
  atras() {
    if (this.page > 1) {
      this.page--;
      this.getPlatform();
    }
  }
  siguiente() {
    if (this.nextPage != null) {
      this.page++;
      this.getPlatform();
    }
  }
  getPlatform() {
    this.api.getPlatform(this.page, this.pageSize, this.Flota).subscribe(
      {
        next: data => {
          this.platforms = data;
          this.nextPage = this.platforms.nextPage;
          this.platforms = this.platforms.data;
        },
        error: error => { console.log(error) }
      }
    )
  }
  selectPlat(id: string) {
    // this.api.getPlatformById(id).subscribe(
    //   {
    //     next: data => {
    //       this.plat = data;
    //       this.plat = this.plat.data;
    //       this.sensors = this.plat.sensors;
    //       console.log(this.plat);
    //       console.log(this.sensors);
    //       this.router.navigate(['/sensor'],{queryParams: {sensors: this.sensors}} );
    //     }
    //   });
    this.router.navigate(['/sensor'], { queryParams: { id: id } });
  }
}
