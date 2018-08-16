import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { ServiceWp } from "../service/service.wp";

@Component({
    selector: 'media',
    templateUrl: './media.html',
    providers: [ServiceWp]
})
export class Media implements OnInit {
    @Input() id: number;

    media: any;

    constructor(
        private service: ServiceWp
    ) {}

    ngOnInit() {
        if (this.id > 0) {
            this.getMedia(this.id);
        }
    }

    getMedia(id) {
        this.service.getMedia(id)
            .subscribe(result => {
                this.media = result;
            });
    }

}