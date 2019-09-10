import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    /* order */

    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: 'calc(100vw - 280px)', height: 'calc(100vh - 88px)' }), {
      optional: true
    }),

    /* 2 */ group([
      // block executes in parallel

      query(
        ':enter',
        [
          style({ transform: 'translate(1%,3%)', opacity: '0' }),
          animate('0.3s ease-in-out', style({ transform: 'translate(0%)', opacity: '1' }))
        ],
        {
          optional: true
        }
      ),

      query(
        ':leave',
        [
          style({ transform: 'translate(0%)', opacity: '1' }),
          animate('0.3s ease-in-out', style({ transform: 'translate(-3%,-1%)', opacity: '0' }))
        ],
        {
          optional: true
        }
      )
    ])
  ])
  // transition('record <=> chart', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
  //   ]),
  //   query(':enter', animateChild())
  // ]),
  // transition('* <=> FilterPage', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
  //   ]),
  //   query(':enter', animateChild())
  // ])
]);
