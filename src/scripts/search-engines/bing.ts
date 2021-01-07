import * as Poi from 'poi-ts';
import { CSSAttribute, css } from '../styles';
import { SerpHandler } from '../types';
import { getParentElement, handleSerp } from './helpers';

const globalStyle: CSSAttribute = {
  '[data-ub-blocked="visible"]': {
    background: 'rgba(255, 192, 192, 0.5) !important',
  },
  '.ub-button': {
    color: 'rgb(26, 13, 171)',
  },
  '.ub-button:hover': {
    textDecoration: 'underline',
  },
};

const controlStyle: CSSAttribute = {
  display: 'block',
  fontSize: '14px',
  lineHeight: 2.5,
};

const serpHandlers: Record<string, SerpHandler | undefined> = {
  '/search': handleSerp({
    globalStyle,
    targets: '#b_results, .b_algo',
    controlHandlers: [
      {
        target: '#b_results',
        position: 'beforebegin',
        style: {
          ...controlStyle,
          marginLeft: '20px',
        },
      },
    ],
    entryHandlers: [
      {
        target: '.b_algo',
        url: 'a',
        actionTarget: '.b_attribution',
        actionStyle: {
          display: 'inline-block',
          width: 0,
          'cite + &, a:not(.trgr_icon) + &': {
            marginLeft: '6px',
          },
        },
      },
    ],
  }),
  '/images/search': handleSerp({
    globalStyle: {
      '.ub-button': {
        color: 'rgb(26, 13, 171)',
      },
      '.ub-button:hover': {
        textDecoration: 'underline',
      },
    },
    targets: '.dg_b, .infsd, .lnkw',
    controlHandlers: [
      {
        target: '.dg_b',
        position: 'beforebegin',
        style: {
          ...controlStyle,
          marginLeft: '10px',
        },
      },
    ],
    entryHandlers: [
      {
        target: '.infnmpt > .infsd, .img_info > .lnkw',
        level: '.dgControl_list > li',
        url: root => {
          const m = root.querySelector<HTMLElement>('.iusc')?.getAttribute('m');
          return m != null
            ? Poi.tryParseJSON(m, Poi.object({ purl: Poi.string() }))?.purl ?? null
            : null;
        },
        actionTarget: root =>
          root.querySelector<HTMLElement>('.infnmpt') ??
          root.querySelector<HTMLElement>('.img_info'),
        actionStyle: actionRoot => {
          const actionTarget = getParentElement(actionRoot);
          if (actionTarget.matches('.infnmpt')) {
            actionRoot.closest<HTMLElement>('.infopt')?.classList.add(
              css({
                '[data-ub-blocked="visible"] &': {
                  background: 'rgba(255, 192, 192, 0.5) !important',
                },
              }),
            );
            actionRoot.className = css({
              display: 'block',
              fontSize: '11px',
              lineHeight: '16px',
              marginTop: '-8px',
              overflow: 'hidden',
              paddingBottom: '8px',
              pointerEvents: 'auto',
              textOverflow: 'ellipsis',
            });
          } else {
            actionRoot.closest<HTMLElement>('.imgpt')?.classList.add(
              css({
                '[data-ub-blocked="visible"] &': {
                  boxShadow: '0 0 0 12px rgba(255, 192, 192, 0.5)',
                },
              }),
            );
            actionTarget.classList.add(
              css({
                height: '49.2px !important',
              }),
            );
            actionRoot.className = css({
              pointerEvents: 'auto',
              '& .ub-button': {
                color: 'inherit',
              },
            });
          }
        },
      },
    ],
    pagerHandlers: [
      {
        target: '.dgControl_list, .dgControl_list > li',
        innerTargets: '.infsd, .lnkw',
      },
      {
        target: '#b_content',
        innerTargets: '.dg_b, .infsd, .lnkw',
      },
    ],
  }),
  '/videos/search': handleSerp({
    globalStyle: {
      ...globalStyle,
      '[data-ub-blocked="visible"] .mc_vtvc': {
        background: 'transparent !important',
      },
    },
    targets: '#vm_res, .dg_u',
    controlHandlers: [
      {
        target: '#vm_res',
        position: 'beforebegin',
        style: {
          ...controlStyle,
          marginLeft: '160px',
        },
      },
    ],
    entryHandlers: [
      {
        target: '.dg_u',
        url: root => {
          const vrhm = root.querySelector<HTMLElement>('.vrhdata')?.getAttribute('vrhm');
          return vrhm != null
            ? Poi.tryParseJSON(vrhm, Poi.object({ murl: Poi.string() }))?.murl ?? null
            : null;
        },
        actionTarget: '.mc_vtvc_meta',
        actionStyle: {
          display: 'block',
        },
      },
    ],
    pagerHandlers: [
      {
        target: '.dg_b',
        innerTargets: '.dg_u',
      },
      {
        target: '#b_content',
        innerTargets: '#vm_res, .dg_u',
      },
    ],
  }),
  '/news/search': handleSerp({
    globalStyle,
    targets: '#contentid, .source',
    controlHandlers: [
      {
        target: '#contentid',
        position: 'afterbegin',
        style: {
          display: 'block',
          marginBottom: '20px',
        },
      },
    ],
    entryHandlers: [
      {
        target: '.source',
        level: target => {
          const newsCard = target.closest<HTMLElement>('.news-card');
          return newsCard?.querySelector('.generalads') ? null : newsCard;
        },
        url: '.title',
        actionTarget: '.source',
        actionStyle: {
          marginLeft: '6px',
          flex: '0 100000 auto !important',
        },
      },
    ],
    pagerHandlers: [
      {
        target: '.news-card',
        innerTargets: '.source',
      },
    ],
  }),
};

export function getSerpHandler(): SerpHandler | null {
  return serpHandlers[new URL(window.location.href).pathname] ?? null;
}
