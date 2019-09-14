import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { LoggerService } from '~/app/services/logger/logger.service';
import { switchMap } from 'rxjs/operators';
import { ConfigurationService } from '~/app/services/configuration/configuration.service';

/**
 * Details view component for reviewing photo data before uploading
 */
@Component({
  selector: 'ns-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  moduleId: module.id,
})
export class DetailsComponent implements OnInit {

  photoId: string;
  appName: string;

  constructor(
    private configurationService: ConfigurationService,
    private route: ActivatedRoute,
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
    this.appName = this.configurationService.appName;
    this.route.params.forEach((params: Params) => {
      this.photoId = params.id;
    });
    this.loggerService.debug(`[DetailsComponent initialize...] ${this.photoId}`);
  }

}
