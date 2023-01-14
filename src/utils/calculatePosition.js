'use strict';

export const calculatePosition = (placement, childRef, tooltipRef) => {
  const childCurrent = childRef.current;

  const child = childCurrent.getBoundingClientRect();
  const tooltip = tooltipRef.current.getBoundingClientRect();

  switch (placement) {
    case 'top-left':
      return {
        top: `${childCurrent.offsetTop - tooltip.height - 10}px`,
        left: `${childCurrent.offsetLeft}px`
      };
    case 'top-center':
      return {
        top: `${childCurrent.offsetTop - tooltip.height - 10}px`,
        left: `${childCurrent.offsetLeft - (tooltip.width - child.width) / 2}px`
      };
    case 'top-right':
      return {
        top: `${childCurrent.offsetTop - tooltip.height - 10}px`,
        left: `${childCurrent.offsetLeft - (tooltip.width - child.width)}px`
      };
    case 'bottom-left':
      return {
        top: `${childCurrent.offsetTop + child.height + 10}px`,
        left: `${childCurrent.offsetLeft}px`
      };
    case 'bottom-center':
      return {
        top: `${childCurrent.offsetTop + child.height + 10}px`,
        left: `${childCurrent.offsetLeft - (tooltip.width - child.width) / 2}px`
      };
    case 'bottom-right':
      return {
        top: `${childCurrent.offsetTop + child.height + 10}px`,
        left: `${childCurrent.offsetLeft - (tooltip.width - child.width)}px`
      };
    case 'left-top':
      return {
        top: `${childCurrent.offsetTop}px`,
        left: `${childCurrent.offsetLeft - tooltip.width - 10}px`
      };
    case 'left-center':
      return {
        top: `${childCurrent.offsetTop + child.height / 2 - tooltip.height / 2}px`,
        left: `${childCurrent.offsetLeft - tooltip.width - 10}px`
      };
    case 'left-bottom':
      return {
        top: `${childCurrent.offsetTop + child.height - tooltip.height}px`,
        left: `${childCurrent.offsetLeft - tooltip.width - 10}px`
      };
    case 'right-top':
      return {
        top: `${childCurrent.offsetTop}px`,
        left: `${childCurrent.offsetLeft + child.width + 10}px`
      };
    case 'right-center':
      return {
        top: `${childCurrent.offsetTop + child.height / 2 - tooltip.height / 2}px`,
        left: `${childCurrent.offsetLeft + child.width + 10}px`
      };
    case 'right-bottom':
      return {
        top: `${childCurrent.offsetTop + child.height - tooltip.height}px`,
        left: `${childCurrent.offsetLeft + child.width + 10}px`
      };
    default:
      return {
        top: `${childCurrent.offsetTop + child.height + 10}px`,
        left: `${childCurrent.offsetLeft - (tooltip.width - child.width) / 2}px`
      };
  }
};