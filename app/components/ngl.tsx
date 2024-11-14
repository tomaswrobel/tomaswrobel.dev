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
		<div className="row">
			<div className="col-md-12">
				<div className="form-group">
					<select name="question" className="form-control" required>
						<option value="anonymous">Send me anonymous messages!</option>
						<option value="confessions">Send me anonymous confessions</option>
						<option value="3words">Describe me in 3 words, anonymously</option>
						<option value="neverhave">Send me a never have I ever, anonymously</option>
						<option value="tbh">If you could change anything about me, what would it be?</option>
					</select>
				</div>
			</div>
			<div className="col-md-12">
				<div className="form-group">
					<textarea name="answer" placeholder="Message *" rows={6} className="form-control" required />
				</div>
			</div>
			<div className="col-md-12">
				<div className="send">
					<input className="button" type="submit" value="Send message" />
				</div>
			</div>
		</div>
	</form>
);

export default Form;
