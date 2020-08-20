import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-skill-info-slider',
  templateUrl: './skill-info-slider.component.html',
  styleUrls: ['./skill-info-slider.component.css'],
  providers: [{ provide: CdkStepper, useExisting: SkillInfoSliderComponent}]
})
export class SkillInfoSliderComponent extends CdkStepper implements OnInit{

  // constructor() { }

  @Input() header: string;

  ngOnInit(): void {
  }

}
