"use client";
import type {FormEventHandler, FunctionComponent} from "react";

const submit: FormEventHandler<HTMLFormElement> = async e => {
	const form = e.currentTarget;
	e.preventDefault();

	const response = await fetch("/ngl", {
		method: "POST",
		body: form.message.value,
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
					<textarea name="message" placeholder="Message *" rows={6} className="form-control" required />
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
