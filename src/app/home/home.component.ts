import { Component, OnInit } from '@angular/core';

type concepts = { name: string; value: boolean };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  basicConcepts: concepts[] = [
    { name: 'Bootstrping Angular App ', value: true },
    { name: 'Data binding', value: true },
    { name: 'Property binding', value: true },
    { name: 'Event binding', value: true },
    { name: 'Two way data binding', value: true },
    { name: 'Componet Interaction', value: true },
    { name: 'Input/output', value: true },
    { name: 'Template Binding Syntax', value: false },
  ];

  interMediateConcepts: concepts[] = [
    { name: 'NgIf', value: true },
    { name: 'NgFor', value: true },
    { name: 'NgSwitch', value: true },
    { name: 'NgStyle', value: true },
    { name: 'NgClass', value: true },
    { name: 'Components', value: true },
    { name: 'Directives', value: true },
    { name: 'Binding Host', value: true },
    { name: 'Binding HostListener', value: true },
    { name: 'Component Life Cycle Hooks', value: false },
    { name: 'Smart/Dumb Component Architecture', value: false },
    { name: 'Pipes | Custom Pipes', value: false },
    { name: 'Feature Modules', value: false },
  ];

  advancedConcepts: concepts[] = [
    { name: 'Services', value: true },
    { name: 'Routing', value: true },
    { name: 'Dependency Injection', value: true },
    { name: 'Http and Observable Services', value: false },
    {
      name: 'Forms and Validation (Reactive Forms and Validators)',
      value: false,
    },
    { name: 'Content Projection', value: false },
    { name: 'State Management with RxJs', value: false },
    { name: 'Route Guards, Pre-loads, Lazy-loading', value: false },
    { name: 'Application Structure and Best Practices', value: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
