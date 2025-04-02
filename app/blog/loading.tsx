import { SymbolIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <div className="container flex justify-center items-center animate-spin">
      <SymbolIcon />
    </div>
  );
}
