import { useSignal } from "@preact/signals";
import Badge from "../islands/Badge.tsx";

export default function Home() {
  return (
    <>
      <Badge name="parent">
        <Badge name="child" />
      </Badge>
    </>
  );
}
