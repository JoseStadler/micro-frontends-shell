import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  keyframes,
} from '@angular/animations';

// Basic
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(100%)',
      }),
    ]),

    query(':enter', [
      animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),
]);

// Keyframes and Positioned
export const stepper = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        animate(
          '800ms ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
            style({ opacity: 0, transform: 'translateY(70%)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ]),
        ),
      ]),
      query(':leave', [
        animate(
          '800ms ease-in-out',
          keyframes([
            style({ opacity: 1, transform: 'translateY(-0%)', offset: 0 }),
            style({ opacity: 0, transform: 'translateY(-70%)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 1 }),
          ]),
        ),
      ]),
    ]),
  ]),
]);

export const stepperCustom = trigger('routeAnimations', [
  transition('inAndOutOne => inAndOutTwo', forward()),
  transition('inAndOutTwo => inAndOutOne', backward()),

  transition('inAndOutTwo => inAndOutThree', forward()),
  transition('inAndOutThree => inAndOutTwo', backward()),

  transition('inAndOutThree => inAndOutFour', forward()),
  transition('inAndOutFour => inAndOutThree', backward()),

  transition('inAndOutFour => inAndOutFive', forward()),
  transition('inAndOutFive => inAndOutFour', backward()),

  transition('inAndOutFive => inAndOutSix', forward()),
  transition('inAndOutSix => inAndOutFive', backward()),

  transition('inAndOutSix => inAndOutSeven', forward()),
  transition('inAndOutSeven => inAndOutSix', backward()),

  transition('inAndOutSeven => inAndOutEight', forward()),
  transition('inAndOutEight => inAndOutSeven', backward()),

  transition('inAndOutEight => inAndOutNine', forward()),
  transition('inAndOutNine => inAndOutEight', backward()),
]);

function forward() {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          top: 0,
          width: '100%',
          position: 'absolute',
        }),
      ],
      optional,
    ),

    group([
      query(
        ':enter',
        [
          animate(
            '800ms ease-in-out',
            keyframes([
              style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
              style({ opacity: 0, transform: 'translateY(70%)', offset: 0.7 }),
              style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
            ]),
          ),
        ],
        optional,
      ),
      query(
        ':leave',
        [
          animate(
            '800ms ease-in-out',
            keyframes([
              style({ opacity: 1, transform: 'translateY(-0%)', offset: 0 }),
              style({ opacity: 0, transform: 'translateY(-70%)', offset: 0.7 }),
              style({ opacity: 0, transform: 'translateY(-100%)', offset: 1 }),
            ]),
          ),
        ],
        optional,
      ),
    ]),
  ];
}

function backward() {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          top: 0,
          width: '100%',
          position: 'absolute',
        }),
      ],
      optional,
    ),

    group([
      query(
        ':enter',
        [
          animate(
            '800ms ease-in-out',
            keyframes([
              style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
              style({ opacity: 0, transform: 'translateY(-70%)', offset: 0.7 }),
              style({ opacity: 1, transform: 'translateY(-0%)', offset: 1 }),
            ]),
          ),
        ],
        optional,
      ),
      query(
        ':leave',
        [
          animate(
            '800ms ease-in-out',
            keyframes([
              style({ opacity: 1, transform: 'translateY(0%)', offset: 0 }),
              style({ opacity: 0, transform: 'translateY(70%)', offset: 0.7 }),
              style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
            ]),
          ),
        ],
        optional,
      ),
    ]),
  ];
}
