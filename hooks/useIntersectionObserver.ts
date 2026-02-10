'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  initialIsIntersecting?: boolean;
};

type UseIntersectionObserverResult<T extends Element> = {
  ref: (node: T | null) => void;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
};

export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverResult<T> {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    once = false,
    initialIsIntersecting = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const targetRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const cleanup = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const ref = useCallback(
    (node: T | null) => {
      targetRef.current = node;
    },
    []
  );

  useEffect(() => {
    cleanup();

    if (typeof window === 'undefined') return;
    if (!targetRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([nextEntry]) => {
        setEntry(nextEntry);
        setIsIntersecting(nextEntry.isIntersecting);

        if (once && nextEntry.isIntersecting) {
          cleanup();
        }
      },
      { root: root as Element | null, rootMargin, threshold }
    );

    observerRef.current.observe(targetRef.current);

    return cleanup;
  }, [cleanup, once, root, rootMargin, threshold]);

  return { ref, isIntersecting, entry };
}
