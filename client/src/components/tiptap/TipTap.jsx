import { useEditor, EditorContent } from "@tiptap/react";

import CharacterCount from "@tiptap/extension-character-count";
import TipTapToolbar from "./TipTapToolbar";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";

const limit = 250;

const extensions = [
  Document,
  Paragraph,
  Text,
  Bold,
  Italic,
  CharacterCount.configure({ limit }),
];

const Tiptap = ({ onChange }) => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] bg-background p-2 border-input bg-background  ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 duration-300 transition",
      },
    },
    enableInputRules: [Italic],
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <TipTapToolbar editor={editor} limit={limit} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
