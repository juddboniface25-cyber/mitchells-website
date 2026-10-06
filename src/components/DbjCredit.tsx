/* "Site by Designs by Judd" credit for the footer of every DBJ build.
   Self-contained: no imports, no fonts, no images. It takes the footer's
   own color and font, so it fits light and dark footers alike.
   Usage: <DbjCredit site="kettle-creek-marina" /> in the footer's bottom row.
   Canonical copy: designs-by-judd/site/credit/DbjCredit.tsx. Edit it there
   and re-copy, so every site stays identical. */

const DBJ_URL = "https://designs-by-judd.vercel.app";

export default function DbjCredit({ site }: { site: string }) {
  return (
    <a
      href={`${DBJ_URL}/?ref=${site}`}
      target="_blank"
      rel="noopener"
      className="dbj-credit"
      aria-label="Site by Designs by Judd (opens in a new tab)"
    >
      <style href="dbj-credit" precedence="default">{`
        .dbj-credit { display: inline-flex; align-items: center; gap: .45em; color: inherit; font-size: .8125rem; line-height: 1; text-decoration: none; white-space: nowrap; opacity: .72; transition: opacity .2s ease; }
        .dbj-credit:hover, .dbj-credit:focus-visible { opacity: 1; }
        .dbj-credit svg { height: 1.3em; width: auto; flex: none; transition: transform .2s ease; }
        .dbj-credit:hover svg { transform: translateY(-1px); }
        .dbj-credit b { font-weight: 600; }
      `}</style>
      <svg viewBox="40 110 1020 730" fill="none" aria-hidden="true">
        <rect x="160" y="150" width="780" height="580" rx="64" stroke="currentColor" strokeWidth="48" />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="40"
          strokeLinejoin="round"
          d="M753 689L789 643L709 575L655 615L631 614L617 590L627 628L607 631L608 642L595 609L572 608L588 660L556 630L557 647L539 646L529 670L518 659L531 633L546 637L537 614L568 589L552 584L559 573L515 605L510 586L479 608L492 581L419 581L433 617L405 638L417 611L396 594L392 608L383 588L402 550L391 538L390 555L363 546L385 553L381 535L410 535L397 580L416 597L411 582L425 569L435 577L467 560L490 573L480 554L491 553L467 535L486 523L452 504L491 511L487 540L518 540L510 564L546 528L557 556L603 560L584 545L592 532L570 531L577 516L551 526L569 482L549 490L549 469L527 481L544 460L529 452L536 441L488 452L524 429L483 422L527 418L498 375L456 369L451 383L418 386L439 370L433 337L412 331L435 328L422 288L382 289L368 306L353 268L330 262L324 204L304 206L304 231L302 204L327 201L340 233L332 259L359 266L369 285L376 274L406 287L394 257L403 255L407 279L417 274L454 325L444 344L474 332L475 362L479 345L501 358L516 340L524 394L550 386L535 418L553 415L542 432L554 432L557 462L571 441L583 471L577 457L594 434L586 457L625 458L619 473L604 469L613 479L597 503L611 501L608 515L627 509L620 518L646 537L647 510L661 508L647 485L668 496L670 478L675 510L695 505L667 549L689 556L693 531L700 547L716 522L729 532L738 522L722 539L719 579L771 609L798 645L774 663L776 685Z"
        />
        <path d="M70 785H1030" stroke="currentColor" strokeWidth="64" strokeLinecap="round" />
      </svg>
      <span>
        Site by <b>Designs by Judd</b>
      </span>
    </a>
  );
}
