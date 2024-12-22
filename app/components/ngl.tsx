"use client";
import type {FormEventHandler, FunctionComponent} from "react";

const submit: FormEventHandler<HTMLFormElement> = async e => {
	e.preventDefault();

	const form = e.currentTarget;
	const slug = form.question.value;
	const question = form.answer.value;

	const response = await fetch("/ngl", {
		method: "POST",
		body: JSON.stringify({
			gameSlug: slug === "anonymous" ? "" : slug,
			question,
		}),
	});

	if (response.ok) {
		window.alert("Message has been sent");
	} else {
		window.alert(`Error ${response.status}: ${response.statusText}`);
	}

	form.reset();
};

const Form: FunctionComponent = () => (
	<form onSubmit={submit}>
		<div className="row gap-3">
			<div className="col-md-12">
				<select name="question" className="form-select" required>
					<option value="anonymous">Send me anonymous messages!</option>
					<option value="confessions">Send me anonymous confessions</option>
					<option value="3words">Describe me in 3 words, anonymously</option>
					<option value="neverhave">Send me a never have I ever, anonymously</option>
					<option value="tbh">If you could change anything about me, what would it be?</option>
				</select>
			</div>
			<div className="col-md-12">
				<textarea
					name="answer"
					placeholder="Message *"
					rows={6}
					className="form-control"
					required
					style={{resize: "none"}}
				/>
			</div>
			<div className="col-md-12">
				<div className="send">
					<input className="btn" type="submit" value="Send message" />
				</div>
			</div>
		</div>
	</form>
);

export default Form;
