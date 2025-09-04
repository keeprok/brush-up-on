export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      placeholder={placeholder}
    />
  );
}
