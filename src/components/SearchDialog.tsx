import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { searchEntries } from "../searchIndex";
import { Icon } from "./Icon";

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

const suggestions = ["office hours", "documents", "holiday", "out of office", "appointment"];

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => searchEntries(query), [query]);

  if (!open) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled])',
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="search-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
        ref={dialogRef}
        onKeyDown={handleKeyDown}
      >
        <h2 id="search-dialog-title" className="sr-only">
          Search this website
        </h2>

        <div className="search-field">
          <Icon name="search" size={19} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides, statuses, and FAQs…"
            aria-label="Search this website"
            autoComplete="off"
          />
          <button type="button" className="search-close" onClick={onClose} aria-label="Close search">
            <Icon name="close" size={18} />
          </button>
        </div>

        <p className="search-scope">
          <Icon name="shield" size={13} />
          Searches this introduction website only — not live government records.
        </p>

        <div className="search-body">
          {query.trim().length === 0 ? (
            <>
              <p className="search-label">Try a search</p>
              <div className="search-suggestions">
                {suggestions.map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    className="search-suggestion"
                    onClick={() => setQuery(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <p className="search-hint">
                Results come from the sections, guides, status explanations, and FAQs already on this
                page.
              </p>
            </>
          ) : results.length > 0 ? (
            <>
              <p className="search-count" aria-live="polite">
                {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query.trim()}
                &rdquo;
              </p>
              <ul className="search-results">
                {results.map((result) => (
                  <li key={`${result.group}-${result.title}`}>
                    <a href={result.href} onClick={onClose}>
                      <span className="search-group">{result.group}</span>
                      <span className="search-result-title">{result.title}</span>
                      <span className="search-result-desc">{result.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="search-empty" role="status">
              <p>No matches for &ldquo;{query.trim()}&rdquo;.</p>
              <p>Try a broader word such as &ldquo;office&rdquo;, &ldquo;documents&rdquo;, or &ldquo;holiday&rdquo;.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
