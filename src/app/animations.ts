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
]);
