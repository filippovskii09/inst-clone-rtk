export const handleFocus = (e: Event, field: any) => {
  const target = e.target as HTMLInputElement;

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.value.length > 0
      ? field.classList.remove(
          'border-red-500',
          'bg-red-700',
          'placeholder:text-red-600',
          'bg-opacity-10',
        )
      : null;
  };

  target.addEventListener('change', handleChange, { once: true });

  target.removeEventListener('focus', (e) => handleFocus(e, field));
};
