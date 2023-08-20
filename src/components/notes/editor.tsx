import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import { Note } from "./note-interfaces";

export interface EditorProps {
    currentNote: Note;
    updateNote: () => void;
}

export default function Editor(props: EditorProps) {
    const { currentNote, updateNote } = props;
    const [selectedTab, setSelectedTab] = React.useState("write" as  "write" | "preview" | undefined)

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown: string) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
