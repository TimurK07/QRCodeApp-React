import {GENERATE_DATA} from "../../constanst.js";
import {QRCodeSVG} from "qrcode.react";

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

	return (
			<div>
				{data.map((text) => (
						<ul>
							<li key={text}>
								{text}
								<p><QRCodeSVG value={text} size={100}/></p>
							</li>
						</ul>
				))}
			</div>
	)
}