import React from "react";
import { J, validateProps } from "../utils/validation";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
const noteItemPropsSchema = J.object({
	id: J.string().required(),
	title: J.string().required(),
	body: J.string().required(),
	createdAt: J.string().required(),
	archived: J.boolean().required(),
});

function NoteItem(props) {
	const validatedProps = validateProps(noteItemPropsSchema, props, "NoteItem");
	const { id, title, body, createdAt } = validatedProps;

	return (
		<>
			<Link className="note-item__link" to={`/notes/${id}`}>
				<div className="note-item ">
					<h3 className="note-item__title">{title}</h3>
					<p className="note-item__createdAt">{createdAt}</p>
					<p className="note-item__body">{parser(body)}</p>
				</div>
			</Link>
		</>
	);
}

export default NoteItem;
