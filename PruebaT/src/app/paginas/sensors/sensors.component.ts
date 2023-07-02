import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent {


  constructor(private api: ApiService, private route: ActivatedRoute) { }
  sensors: any;
  plat: any;
  platId: string | null= "";
  page = 1;
  nextPage: any;
  ngOnInit(): void {
    // this.sensors = this.route.snapshot.queryParamMap.get('sensors');
    // console.log(this.sensors);
    this.platId = this.route.snapshot.queryParamMap.get('id');
    console.log(this.platId);
    this.api.getPlatformById(this.platId).subscribe(
      {
        next: data => {
          this.plat = data;
          this.plat = this.plat.data;
          this.sensors = this.plat.sensors;
        }

      }
    );
  }
  selectSens(id: string) {
    console.log(id);
  }
  atras() {
    if (this.page > 1) {
      this.page--;
    }
  }
  siguiente() {
    if (this.nextPage != null) {
      this.page++;
    }
  }
}
