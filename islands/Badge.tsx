import { ComponentChildren } from "preact";

interface BadgeProps {
  name: string;
  children: ComponentChildren;
}

export default function Badge({ name, children }: BadgeProps) {
  return (
    <div>
      Hey {name}
      <hr />
      {children}
    </div>
  );
}
