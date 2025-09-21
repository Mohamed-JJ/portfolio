import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm prose-blue dark:prose-invert max-w-none prose-p:text-secondary dark:prose-p:text-gray-300 prose-headings:text-primary dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
      )}
    >
      {children}
    </div>
  );
}
