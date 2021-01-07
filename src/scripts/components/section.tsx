import { JSX, h } from 'preact';
import { forwardRef } from 'preact/compat';
import { Ref, useMemo } from 'preact/hooks';
import { applyClass } from './helpers';
import { useCSS } from './styles';
import { useTheme } from './theme';

export type SectionProps = JSX.IntrinsicElements['section'];

export const Section = forwardRef((props: SectionProps, ref: Ref<HTMLElement>) => {
  const css = useCSS();
  const class_ = useMemo(
    () =>
      css({
        '&:not(:first-child)': {
          marginTop: '2em',
        },
      }),
    [css],
  );
  return <section {...applyClass(props, class_)} ref={ref} />;
});

export type SectionHeaderProps = JSX.IntrinsicElements['div'];

export const SectionHeader = forwardRef((props: SectionHeaderProps, ref: Ref<HTMLDivElement>) => {
  const css = useCSS();
  const class_ = useMemo(
    () =>
      css({
        marginBottom: '1em',
      }),
    [css],
  );
  return <div {...applyClass(props, class_)} ref={ref} />;
});

export type SectionTitleProps = JSX.IntrinsicElements['h1'];

export const SectionTitle = forwardRef((props: SectionTitleProps, ref: Ref<HTMLHeadingElement>) => {
  const css = useCSS();
  const class_ = useMemo(
    () =>
      css({
        fontSize: '1.125em',
        fontWeight: 'normal',
        margin: 0,
      }),
    [css],
  );
  return <h1 {...applyClass(props, class_)} ref={ref} />;
});

export type SectionBodyProps = JSX.IntrinsicElements['div'];

export const SectionBody = forwardRef((props: SectionBodyProps, ref: Ref<HTMLDivElement>) => {
  const css = useCSS();
  const theme = useTheme();
  const class_ = useMemo(
    () =>
      css({
        background: theme.section.background,
        borderRadius: '4px',
        boxShadow: `0 1px 2px 0 ${theme.section.shadow1}, 0 1px 3px 1px ${theme.section.shadow2}`,
      }),
    [css, theme],
  );
  return <div {...applyClass(props, class_)} ref={ref} />;
});

export type SectionItemProps = JSX.IntrinsicElements['div'];

export const SectionItem = forwardRef((props: SectionItemProps, ref: Ref<HTMLDivElement>) => {
  const css = useCSS();
  const theme = useTheme();
  const class_ = useMemo(
    () =>
      css({
        padding: '0.75em 1.25em',
        '&:not(:first-child)': {
          borderTop: `solid 1px ${theme.separator}`,
        },
      }),
    [css, theme],
  );
  return <div {...applyClass(props, class_)} ref={ref} />;
});
