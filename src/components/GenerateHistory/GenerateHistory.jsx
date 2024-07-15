import {GENERATE_DATA} from "../../constanst.js";

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

	return (
			<div>
				{data.map((text) => (
						<p>{text}</p>
				))}
			</div>
	)
}