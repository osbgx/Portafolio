export function isTextInputTarget(target: EventTarget | null): boolean {
  return !!(target as HTMLElement)?.closest?.('input, textarea, select, [contenteditable="true"]');
}
