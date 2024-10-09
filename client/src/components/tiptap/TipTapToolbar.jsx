import { Bold, Italic } from "lucide-react";
import { Toggle } from "../ui/toggle";
import TipTapCharCounter from "./TipTapCharCounter";

const TipTapToolbar = ({ editor, limit }) => {
  return (
    <div className="flex items-center gap-x-1 rounded-md border p-1">
      <Toggle
        size="sm"
        className="data-[state=on]:bg-accent-dark data-[state=on]:text-accent-foreground"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold strokeWidth={2.5} className="size-4" />
      </Toggle>
      <Toggle
        size="sm"
        className="data-[state=on]:bg-accent-dark data-[state=on]:text-accent-foreground"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic strokeWidth={2.5} className="size-4" />
      </Toggle>
      <TipTapCharCounter editor={editor} limit={limit} />
    </div>
  );
};
export default TipTapToolbar;
